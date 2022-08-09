
import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  BrowserRouter,
  Routes
} from 'react-router-dom';

import Splash from './splash/splash';
import LoginForm from './session/login_form';
import SignUpForm from './session/signup_form'
import Home from './splash/home'



const App = () => (
  <div>
      {/* <Splash /> */}
      <Routes>
      <Route exact path="/" element={<Splash/>} />
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/login" element={<LoginForm/>} />
      <Route exact path="/signup" element={<SignUpForm/>} />
     
     </Routes>
  </div>
  
);

export default App;