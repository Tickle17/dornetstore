import { Grid } from '@mui/material';
import dornetLogo from "../../imgs/index.png"
import "./headerStyle.css"
import ComboBox from "./searchBar";
import Modal from "../modal/Modal"
import {useState} from "react";
import LogoutPage from "../modal/login/logout_page";
import { NavLink } from 'react-router-dom';

export default function Header ({IsAuthenticate,setIsAuthenticated}){
   // states for Modal
   const [showModal,setShowModal] =useState(false)
   const handleOpen = () =>{
      setShowModal(true)
   }
   const handeClose = () =>{
      setShowModal(false)
   }

   function logOut() {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      window.location.reload()
      setIsAuthenticated(false)
   }

   return(
      <div>
         <Grid container className="headerBG">
         <Grid container className="header">
            <Grid item xs={3} className="logo">
               <img src={dornetLogo} alt="logo"/>
            </Grid>
            <Grid item xs={5} className="headerMenu">
               <ul >
                  <NavLink exact to="/" className="nav-link" activeClassName="active" active>
                     <li>Мерч</li>
                  </NavLink>
                  <NavLink to="/delivery" className="nav-link" activeClassName="active">
                     <li>Доставка</li>
                  </NavLink>
               </ul>
            </Grid>
            <Grid container item xs={4} justifyContent="space-between" alignItems="center">
               <div><ComboBox></ComboBox></div>

               {IsAuthenticate?
                  <LogoutPage logOut={logOut}></LogoutPage>:
                  <button className="headerButton" onClick={handleOpen}>Войти</button>}

            </Grid>
         </Grid>
      </Grid>
         <Modal
            show={showModal}
            closeModal={handeClose}
            IsAuthenticate={IsAuthenticate}
            setIsAuthenticated={setIsAuthenticated}>

         </Modal>
      </div>

   )
}