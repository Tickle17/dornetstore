import { Grid } from '@mui/material';
import dornetLogo from "../../imgs/index.png"
import "./headerStyle.css"
import ComboBox from "./searchBar";
import Modal from "../modal/Modal"
import {useState} from "react";
import LogoutPage from "../modal/login/logout_page";
import { NavLink,useNavigate } from 'react-router-dom';

export default function Header ({IsAuthenticate,setIsAuthenticated}){
   // states for Modal
   const [showModal,setShowModal] =useState(false)
   const handleOpen = () =>{
      setShowModal(true)
   }
   const handeClose = () =>{
      setShowModal(false)
   }

   const navigate = useNavigate();

   function logOut() {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      setIsAuthenticated(false)
      navigate("/dornetstore")
      window.location.reload()
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
                  <NavLink exact to="/dornetstore" className="nav-link" activeClassName="active" active>
                     <li>Мерч</li>
                  </NavLink>
                  <NavLink to="/delivery" className="nav-link" activeClassName="active">
                     <li>Доставка</li>
                  </NavLink>
               </ul>
            </Grid>
            <Grid container item xs={4} justifyContent="space-between" alignItems="center">
               <Grid item xs={6}><ComboBox></ComboBox></Grid>

               {IsAuthenticate?
                  <Grid container item xs={6} alignItems="center">
                     <Grid item xs={6}>
                        <NavLink to="/profile" className="nav-link" activeClassName="active">
                           Профиль
                        </NavLink>
                     </Grid>
                     <Grid item xs={6}>
                        <LogoutPage logOut={logOut}></LogoutPage>
                     </Grid>
                  </Grid>
                  :
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