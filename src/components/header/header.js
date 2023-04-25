import { Grid } from '@mui/material';
import dornetLogo from "../../imgs/index.png"
import "./headerStyle.css"
import ComboBox from "./searchBar";
export default function Header (){

   return(
      <Grid container className="headerBG">
         <Grid container className="header">
            <Grid item xs={3} className="logo">
               <img src={dornetLogo} alt="logo"/>
            </Grid>
            <Grid item xs={5} >
               <ul >
                  <li>Мерч</li>
                  <li>Доставка</li>
               </ul>
            </Grid>
            <Grid container item xs={4} justifyContent="space-between" alignItems="center">
               <div><ComboBox></ComboBox></div>
               <button>Войти</button>
            </Grid>
         </Grid>
      </Grid>
   )
}