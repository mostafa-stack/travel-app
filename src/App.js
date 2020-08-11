import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar'
import Tourlist from './Components/Tourlist/Tourlist'
function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Tourlist></Tourlist>
    </React.Fragment>
  );
}

export default App;
