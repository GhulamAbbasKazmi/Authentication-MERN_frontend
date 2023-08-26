import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
// import {Button} from 'antd';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Toaster } from "react-hot-toast";
import Home from './pages/Home';

function App() {
  return (
   <BrowserRouter>
    <Toaster position="top-center" reverseOrder={false} />

   <Routes>

      <Route path='/Login' element={<Login /> }/>
      <Route path='/Signup' element={<Signup /> }/>
      <Route path='/' element={<Home /> }/>

   </Routes>
   
   
   </BrowserRouter>

  );
}

export default App;
