import React from 'react';
import Profile from "./profile/Profile"
import FullName from "./profile/FullName"
import Adress from "./profile/Address"
import Fullname from './profile/FullName';
import Address from './profile/Address';


function App() {
  var name = "zeineb"
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
        <Fullname firstName = {name} verif="hello"}/>
        <Address/>
      </header>
    </div>
  );
}

export default App;
