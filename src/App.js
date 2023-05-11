import './App.css';
import './components/body/bodyStyles.css'
import Header from "./components/header/header";
import Futter from "./components/futter/futter";
import {useEffect, useState} from "react";
import {checkAuthen} from "./components/modal/login/checkAuthenticate";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SliderBG from "./components/body/sliderBG";
import BodyBG from "./components/body/bodyBG";
import ProflePage from "./components/profile/profile";



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
             <Route exact path="/dornetstore" element={
                <div className="adaptiveMargin">
                   <SliderBG/>
                   <BodyBG/>
                </div>
             }>
             </Route>
             <Route exact path="/delivery" element={
                <div style={{margin:"0 auto",  padding:"200px 0px"}}>
                   <div style={{
                      margin:"0 auto",
                      width: "10%",
                      animation: "spin 20s linear infinite"}}>
                      Здесь будет много информации о доставке
                   </div>
                </div>
             }>
             </Route>
             <Route exact path="/profile" element={
                <div className="adaptiveMargin">
                   <ProflePage></ProflePage>
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
