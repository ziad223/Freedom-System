import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Frontend from './components/Frontend';
import English from './components/English';
import Home from './components/Home';
import Germany from './components/Germany';
import French from './components/French';
import Icdl from './components/Icdl';
import Graphic from './components/Graphic';
import RoomOneE from './components/RoomOneE';
import RoonTwoE from './components/RoonTwoE';
import RoomThreeE from './components/RoomThreeE';
import RoomFourE from './components/RoomFourE';
import RoomFiveE from './components/RoomFiveE';
import Waiting from './components/Waiting';
import RoomSix from './components/RoomSix';
import RoomSeven from './components/RoomSeven';
import RoomEight from './components/RoomEight';
import RoomNine from './components/RoomNine';
import RoomTen from './components/RoomTen';
import Out from './components/Out';
import Login from './components/Login';


const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Login/>} />
        <Route path='/home' element = {<Home/>} />
        <Route path='/english' element = {<English/>} />
        <Route path='/english/room-one' element = {<RoomOneE/>} />
        <Route path='/english/room-two' element = {<RoonTwoE/>} />
        <Route path='/english/room-three' element = {<RoomThreeE/>} />
        <Route path='/english/room-four' element = {<RoomFourE/>} />
        <Route path='/english/room-five' element = {<RoomFiveE/>} />
        <Route path='/english/room-six' element = {<RoomSix/>} />
        <Route path='/english/room-seven' element = {<RoomSeven/>} />
        <Route path='/english/room-eight' element = {<RoomEight/>} />
        <Route path='/english/room-nine' element = {<RoomNine/>} />
        <Route path='/english/room-ten' element = {<RoomTen/>} />
        <Route path='/english/waiting' element = {<Waiting/>} />
        <Route path='/english/out' element = {<Out/>} />
        <Route path='/germany' element = {<Germany/>} />
        <Route path='/french' element = {<French/>} />
        <Route path='/frontend' element = {<Frontend/>} />
        <Route path='/icdl' element = {<Icdl/>} />
        <Route path='/graphic' element = {<Graphic/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App