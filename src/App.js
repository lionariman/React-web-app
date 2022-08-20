import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header></Header>
        <Sidebar></Sidebar>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route path="/messages" element={<Messages></Messages>}></Route>
            <Route path="/news" element={<News></News>}></Route>
            <Route path="/music" element={<Music></Music>}></Route>
            <Route path="/settings" element={<Settings></Settings>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
