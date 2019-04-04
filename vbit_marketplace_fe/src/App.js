import React, { Component } from 'react';
import Profile from './Profile';

import './style.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="App">
      <nav>
        <h1 className="VBIT"><a href="#">VBI<span>T</span></a></h1>
          <div className='main'>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>WishList</a></li>
              <li><a href='#'>About</a></li>
              <div className='search-box'>
              <input type="text" name=""placeholder="Type to search"/>
              <a className="search-btn" href="#"></a>
              <i className="fa-search"></i>
              </div>
              
            </ul>
          </div>
         
          
        
      </nav>
    </div>
     <Profile />
      
     </React.Fragment>
    );
  }
}

export default App;
