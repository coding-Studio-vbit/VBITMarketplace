import React from 'react';



const Profile = () => {
	return (
        <form>
  <h1>Primary Information</h1>
  <div class="question">
    <input type="text" required/>
    <label>First Name</label>
  </div>
  <div class="question">
    <input type="text" required/>
    <label>Last Name</label>
  </div>
  <div class="question">
    <input type="text" required/>
    <label>Email Address</label>
  </div>
  <div class="question">
    <input type="text" required/>
    <label>Gender</label>
  </div>
   <div class="question">
    <input type="text" required/>
    <label>Date of Birth</label>
  </div>
  <div class="question">
    <input type="text" required/>
    <label>Mobile Number</label>
  </div>
  <button>Edit</button>
</form>
  );
}

export default Profile;