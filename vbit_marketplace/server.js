const accountSid = 'ACe7faaeafde1aafc4c694f3b68c1035bc';
const authToken = 'fc81ae82e6c7469051947bc5c72a6225';
const client = require('twilio')(accountSid, authToken);
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
var request = require('request');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var randomInt = require('random-int');

app.use(bodyParser.json());

//initializing knex
var knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : 'ec2-184-73-216-48.compute-1.amazonaws.com',
    user : 'wgplntgwvybicj',
    password : '1c93f9fc50d8226d44070305ab2a4d83a2474470d1a66f1c184cad2f43a6d285',
    database : 'd84jgl5h94pqst'
  }
});

//Listen for OTP
app.get('/otp', function(req, res) {
  var uid = req.param('uid');
  sendOTP(uid);
});
//OTP sender
function sendOTP(uid){
  let otp = randomInt(1111, 9999);
  client.messages
    .create({
       body: 'Your otp is' + otp,
       from: '+12513330297',
       to: '+919392848111'
     })
    .then(message => console.log(message.sid));
    knex('users').where({
  uid: uid
  }).insert({verificationcode: otp})
}
//listener for otp verification
app.get('verifyOTP',function(req,res){
  let receivedOTP = req.param('otp');
  let uid = req.param('uid');
  knex.select('verificationcode').where({uid: uid }).from('users').then((rows) => {
        for (row of rows) {
            console.log(`${row['uid']} ${row['otp']}`);
            if (otp=receivedOTP) {
              console.log("Verified");
            }
        }
    })
});

//send Email
app.get('/email', (req,res) => {
    var uid = req.body.uid;
    sendEmail(uid);
});

function sendEmail(uid){
     let rand = Math.floor((Math.random()*100) + 54);
     knex('users').where({
        uid: uid
     }).insert({userverificationcode: rand})
    link = "http://localhost:3000"+"/verifyemail?id="+rand;
    const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'nathanial84@ethereal.email',
        pass: '7t8uWSbShsb8wFwSNu'
    }
});
var mailOptions = {
  from: 'Sender Name <sender@example.com>',
  to: 'Recipient <recipient@example.com>',
  subject: 'Confirm your email account',
  html: "<a href="+link+">click here to verify</a>"
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

//listener to verify email 
app.get('/verifyemail', function(req,res){
          
     let receivedhash = req.body.hash;
     let uid = req.body.uid;
     var checkhash;
     knex('users').where({
     userid: uid
    }).select('userverificationcode').returning().then(function(code){
    checkhash = code[0];
    if(receivedhash = checkhash){
     knex('users').update('userpassword', 'TRUE')
    }
})

})      

// Sign up 
app.post('/signup', (req, res) => {
  const { useremail, userfirstname, userpassword} = req.body;
  let hash = bcrypt.hashSync(userpassword,10);
  knex('users')
    .insert({
      useremail: useremail,
      userpassword: hash,
      userfirstname: userfirstname,
      userregistrationdate: new Date()
    })
    .then(user => {
      res.json("User Registered Successfully")
    })
    .catch(err => res.status(400).json('Error Registering'))
})
// listen for all incoming requests
app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});
