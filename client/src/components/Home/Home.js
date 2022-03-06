import react from 'react';
import  ReactDOM from 'react-dom';
import { Component } from 'react';
import './Home.css'
import axios from 'axios';
class  Home extends Component {
  state ={
    home :[]
 
   }
   componentDidMount (){
       axios.get('js/data.json').then(res =>{this.setState({home:res.data.home})});
       
   }
  
  render(){
 const {home} = this.state;
 const home1 = home.map((hom)=>{return (  <div>
   <h1> {hom.titre}</h1>
  <h2> {hom.sousTitre}</h2>
 </div>)

 })
return (


<div>

<section id="hero">
    <div className="hero-container" data-aos="fade-up">

      <h1>Welcome to My first React </h1>
      <h2>I Create my firts react project from a to z with Html and CSS and JS6 </h2>
   
    </div>
  </section>

</div>




)}

 }
 export default Home ; 
 