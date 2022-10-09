import React from 'react';
import './App.css';
import Default from './components/Default/Default';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
// import Dialogs from './components/Dialogs/Dialogs'; --- // in container
import DialogsContainer from './components/Dialogs/DialogsContainer';
// import Users from './components/Users/Users'; --- // in container
import UsersContainer from './components/Users/UsersContainer';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Settings from './components/Settings/Settings';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header></Header>
        <Sidebar></Sidebar>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/*" element={<Default></Default>}></Route>

            <Route path="/profile/*" element={
              <Profile ></Profile>}>
            </Route>

            <Route path="/messages/*" element={
              <DialogsContainer ></DialogsContainer>}>
            </Route>

            <Route path="/users/*" element={
              <UsersContainer ></UsersContainer>}>
            </Route>

            {/* <Route path="/news/*" element={<News></News>}></Route>

            <Route path="/music/*" element={<Music></Music>}></Route>

            <Route path="/settings/*" element={<Settings></Settings>}></Route> */}

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
