import './App.css';
import './components/body/bodyStyles.css'
import Header from "./components/header/header";
import BodyItems from "./components/body/bodyItems";

function App() {

   return (
    <div className="App">
          <div>
             <Header></Header>
             <div className="sliderBG"></div>
             <div className="bodyBG">
                <div style={{textAlign:"left",maxWidth:"1200px", margin:"0 auto",padding:"20px",fontSize:"20px"}}>DorNet Odezda</div>
                <BodyItems></BodyItems>
             </div>
          </div>
    </div>
  );
}

export default App;
