import React,{useEffect,useState} from 'react'
import './App.css';
import {
	BrowserRouter,
	Route, 
	Routes,
} from 'react-router-dom';
import axios from 'axios';
import Destinations from './components/Destinations/Destinations';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Form.js/Form';




function App() {

const [destinations,setDestinations]=useState([])



  return (
      <BrowserRouter>
        <Header/>
              <Routes>
                <Route path="/" element={<Destinations destinations={destinations} />}/>
                <Route path="/add-destination" element={<Form/>}/>
              </Routes>
        <Footer/>
        </BrowserRouter>
   
    
    
  );
}

export default App;
