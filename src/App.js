import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Messages from './components/Messages/Messages';

function App() {
  return (
    <div className='app-wrapper'>
      <Header></Header>
      <Sidebar></Sidebar>
      <div className='app-wrapper-content'>
        {/* <Profile></Profile> */}
        <Messages></Messages>
      </div>
    </div>
  );
}

export default App;
