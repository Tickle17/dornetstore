import './App.css';
import './components/body/bodyStyles.css'
import Header from "./components/header/header";
import Futter from "./components/futter/futter";
import {useEffect, useState} from "react";
import {checkAuthen} from "./components/modal/login/checkAuthenticate";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SliderBG from "./components/body/sliderBG";
import BodyBG from "./components/body/bodyBG";

// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
   let [IsAuthenticated,setIsAuthenticated] = useState(false)
   useEffect(()=>{
      checkAuthen({setIsAuthenticated})
   },[])
   return (
    <div className="App">
       <Router basename="/">
          <Header IsAuthenticate={IsAuthenticated} setIsAuthenticated={setIsAuthenticated}>

          </Header>

          <Routes>
             <Route exact path="/" element={
                <div>
                   <SliderBG/>
                   <BodyBG/>
                </div>
             }>
             </Route>
          </Routes>

          <Futter></Futter>

       </Router>

    </div>
  );
}

export default App;
