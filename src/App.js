import React from 'react';
import './App.css';
import Profile from './components/Frofile';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='app-wrapper'>
      <Header></Header>
      <Sidebar></Sidebar>
      <Profile></Profile>
    </div>
  );
}

export default App;
