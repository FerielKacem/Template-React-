import react from 'react';
import  ReactDOM from 'react-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Contact from './components/contact/Contact';
import Home from './components/Home/Home';

import About from './components/About/About';
import Index from './components/Index/Index';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
      <Routes>
     <Route path='/' element={<Index/>}></Route>
   
   
      </Routes>
      </Router>
    </div>
  );
}

export default App;
