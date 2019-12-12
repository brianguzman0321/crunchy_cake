import React from 'react';
import {Link} from 'react-router-dom';
import  './style.css';
import Login from './login';


const Show = () => {
  return(
    <div className = 'show-feedback'>
     <img src = { require('../../assets/feedback-background.jpg') } id = 'background' alt = 'feedback-background' />
     <Link to = '/' id = 'mylink'><img src={ require('../../assets/home.svg') } id = 'homeimage' alt = 'home' /></Link>
     <Login />
    </div>
  );
}

export default Show;