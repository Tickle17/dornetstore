import './App.css';
import './components/body/bodyStyles.css'
import Header from "./components/header/header";
import BodyItems from "./components/body/bodyItems";
import Futter from "./components/futter/futter";
import HomePageSlider from "./components/homePageSlider/homePageSlider";

function App() {

   return (
    <div className="App">
          <div>
             <Header></Header>

             <div className="sliderBG">
                <div className="sliderWith">
                   <HomePageSlider></HomePageSlider>
                </div>
             </div>
             <div className="bodyBG">
                <div style={{maxWidth:"1200px", margin:"0 auto",fontSize:"20px"}}>
                   <div style={{textAlign:"left",marginLeft:"20px",marginTop:"20px"}}>DorNet Odezda</div>
                   <BodyItems></BodyItems>
                </div>
                <Futter></Futter>
             </div>
          </div>
    </div>
  );
}

export default App;
