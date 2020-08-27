import React from 'react';
import Profile from "./profile/Profile"
import FullName from "./profile/FullName"
import Adress from "./profile/Address"
import Fullname from './profile/FullName';
import Address from './profile/Address';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
        <Fullname />
        <Address/>
      </header>
    </div>
  );
}

export default App;
