import react from 'react';
import  ReactDOM from 'react-dom';
import './Style.css'
import {Link} from 'react-router-dom'

import Contact from '../contact/Contact';
import Home from '../Home/Home';

import About from '../About/About';

 function Nav(){
return (


<div>

<div className="top">
     
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"> Home </li>
          <li className="topListItem">About me </li>
          <li className="topListItem">Profile </li>
          <li className="topListItem"> Contact Us</li>
  
        </ul>
      </div>
     
    </div>
</div>




);

 }


 export default Nav ; 
