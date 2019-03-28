const accountSid = 'good luck';
const authToken = 'i will not tell';
const client = require('twilio')(accountSid, authToken);
var request = require('request');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var randomInt = require('random-int');
//initializing knex
var knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : 'ec2-damaged.compute-1.amazonaws.com',
    user : 'wgplntgwvybicj',
    password : 'place password here',
    database : 'hola'
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
            if (`${row['otp']}`=receivedOTP) {
              console.log("Verified");
            }
        }
    })
});
// listen for all incoming requests
app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});
