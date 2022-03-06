import react , {Component}from 'react';
import  ReactDOM from 'react-dom';
import './Style.css'
import axios from 'axios'
import image from '../../images/th.jfif'
class   About extends Component {
    state ={
      about :[]
   
     }
     componentDidMount (){
         axios.get('js/data.json').then(res =>{this.setState({about:res.data.about})});
         
     }
    render(){
        const {about} = this.state;
        const about1 = about.map((abou)=>{return (  <div>
           
                       <div class="creative-info">
                    <h2 class="info-title"> {abou.titre}</h2>
                    <h4 class="info-dir">{abou.sousTitre}</h4>
                    <p class="info-desc">
                    {abou.contenu1} </p>
                    <p class="info-desc">
                    {abou.contenu1}</p>
                </div>
        </div>)
       
        })
return(
<div>

<div class="creative">
<img src={image}  className="img" alt="" />
 <div class="container">
                {about1}
</div>
 </div>
        

</div>

)}

 }
 export default About ; 
 