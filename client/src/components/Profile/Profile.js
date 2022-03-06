import react, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './Style.js';
import {Profile,Creative,ProfileSkilTitelSpan,ProfileSkilTitel,ProfileList,ProfileItemspan,ProfileItem,Web,SkillsDesc,Bar,Title,Perc,Parent ,Span1,Span2,Span3,Skills} from'./Style.js';
class  ProfileP extends Component {
 state ={
 user :[],
 language :[]

 
}
componentDidMount (){
    axios.get('js/data.json').then(res =>{this.setState({user:res.data.user})});
    axios.get('js/data.json').then(res =>{this.setState({language:res.data.language})});
}
 
render(){
    const {user} = this.state;
    const UserItem = user.map(item=>{return(
<div key={item.id}>
   
<ProfileList>
                        <ProfileItem>
                            <ProfileItemspan >Name :</ProfileItemspan>
                            {item.name}
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemspan >Birthday :</ProfileItemspan>
                            {item.date}
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemspan >Address :</ProfileItemspan>
                            {item.adresse}
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemspan >Phone :</ProfileItemspan>
                            {item.phone}
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemspan >Email :</ProfileItemspan>
                            {item.email}
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemspan >Website : </ProfileItemspan>
                            <Web  >{item.web}</Web>
                        </ProfileItem>
                    </ProfileList>
</div>)
})
const {language} = this.state;
    const language1 = language.map(lang=>{return(<div>
         <Bar>
                        <Title>{lang.language}</Title>
                        <Perc >{lang.pourcentage}</Perc>
                        <Parent>
                            <Span1></Span1>
                        </Parent>
                    </Bar>
    </div>)} );
return(
<Creative>
 <div> 
     <div>
            <div className="container">
                <Profile>
                    <ProfileSkilTitel><profileSkilTitelSpan>My </profileSkilTitelSpan>Profile</ProfileSkilTitel>
                    {UserItem}
                </Profile>
                
                <Skills>
                   
                    <ProfileSkilTitel> Some <profileSkilTitelSpan>skills</profileSkilTitelSpan></ProfileSkilTitel>
                    
                   {language1}
                </Skills>
                
            </div>
        </div>
        
      
        




</div></Creative>
)



}
}
export default ProfileP; 