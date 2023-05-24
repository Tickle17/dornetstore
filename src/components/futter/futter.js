import "./futterStyle.css"
import {Grid} from "@mui/material"
import dornetLogo from "../../imgs/index.png";
import google from "../../imgs/Google.png"
import apple from "../../imgs/AppStore.png"
import gallery from "../../imgs/AppGalery.png"
import { styled } from '@mui/system';
import {NavLink} from "react-router-dom";
import React from "react";


const CustomGrid = styled(Grid)(({ theme }) => ({
   [theme.breakpoints.up('md')]: {
      marginLeft: '-20px',
   },
}));


export default function Futter (){

   return(
      <div className="futterBG">
         <Grid container className="footer">
            <Grid item xs={6} sm={4} style={{textAlign:"left"}}>
               <NavLink to="/dornetstore" className="nav-link" >
                  <img src={dornetLogo} alt="logo" style={{cursor:"pointer"}}/>
               </NavLink>
               <Grid container rowSpacing={1} style={{padding:"15px 0px"}}>
                  <Grid item xs={10} md={6}>
                     <img src={google} alt="logo" style={{cursor:"pointer"}}/>
                  </Grid>
                  <CustomGrid item xs={10} md={6}>
                     <img  src={apple} alt="logo" style={{cursor:"pointer"}}/>
                  </CustomGrid>
                  <Grid item xs={10} md={6}>
                     <img src={gallery} alt="logo" style={{cursor:"pointer"}}/>
                  </Grid>
               </Grid>
               <Grid container spacing={1}>
                  <Grid item xs={12} style={{fontWeight:"bold",fontSize:"20px"}}>8 (800) 555-61-70
                  </Grid>
                  <Grid item xs={12} style={{opacity:"0.2"}}>© 2015—2023 Дорожная Сеть
                  </Grid>
                  <Grid item xs={12} style={{opacity:"0.2",textDecoration:"underline",cursor:"pointer"}}>Политика конфиденциальности
                  </Grid>
               </Grid>

            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
         </Grid>
      </div>
   )
}