import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Login from './login.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Myname from './myname.jsx';
import Simpleform from './Simpleform.jsx';
import Feedback from './Feedback.jsx';
import Home from './Components/home.jsx';
import About from'./Components/About.jsx';
import Landing from './Components/landing.jsx';
import Counter from './Components/counter.jsx';
import  Navigate  from './Components/navigate.jsx';
import Location from './Components/Location.jsx';
import Parameter from './Components/parameter.jsx';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
         <Route path='/' element={<Landing/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/myname' element={<Myname/>}/>
       <Route path='/simpleform' element={<Simpleform/>}/>
       <Route path='/feedback' element= {<Feedback/>}/>
       <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/Counter' element={<Counter/>}/>
          <Route path='/navigate' element={<Navigate/>}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='/parameter' elements={<Parameter/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
