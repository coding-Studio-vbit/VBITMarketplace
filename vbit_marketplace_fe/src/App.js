import React, { Component } from 'react';
import Profile from './Profile';
import './App.css';
import Landing from './Landing';
import Landing1 from './Landing1';
import './style.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <div>
       <Landing />
       <Landing1 />
     </div>
     <Profile />
      
     </React.Fragment>
    );
  }
}
export default App;