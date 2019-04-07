import React from 'react';



const Profile = () => {
	return (
  <form>
  <h1>Primary Information</h1>
  <div class="question">
    <input type="text" value="Hailee" required/>
    <label>First Name</label>
  </div>
  <div class="question">
    <input type="text" value="Steinfeld" required/>
    <label>Last Name</label>
  </div>
  <div class="question">
    <input type="text" value="hailee@gmail.com"required/>
    <label>Email Address</label>
  </div>
  <div class="question">
    <input type="text" value="Female"required/>
    <label>Gender</label>
  </div>
   <div class="question">
    <input type="text" value="December 11 1996"required/>
    <label>Date of Birth</label>
  </div>
  <div class="question">
    <input type="text" value="323-845-9200"required/>
    <label>Mobile Number</label>
  </div>
  <button>Edit</button>

</form>
  );
}

export default Profile;