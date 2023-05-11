import { Grid } from '@mui/material';
import dornetLogo from "../../imgs/index.png"
import "./headerStyle.css"
import ComboBox from "./searchBar";
import Modal from "../modal/Modal"
import React, {useState} from "react";
import LogoutPage from "../modal/login/logout_page";
import { useMediaQuery } from 'react-responsive';
import { NavLink,useNavigate } from 'react-router-dom';
import BurgerMenu from "./burgerMenu";

export default function Header ({IsAuthenticate,setIsAuthenticated}){

   const isWide = useMediaQuery({ minWidth: '1181px' }); // ширина экрана >= 1181px

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
            <Grid container className="header" justifyContent="space-between">
               <Grid item xs={10} sm={7} md={3} className="logo">
                  <NavLink exact to="/dornetstore" className="nav-link" active>
                     <img src={dornetLogo} alt="logo" style={{cursor:"pointer"}}/>
                  </NavLink>
               </Grid>
               {isWide?(
                  <Grid container item md={9} alignItems="center">
                     <Grid item xs={6} className="headerMenu">
                        <ul >
                           <NavLink exact to="/dornetstore" className="nav-link" active>
                              <li>Мерч</li>
                           </NavLink>
                           <NavLink to="/delivery" className="nav-link">
                              <li>Доставка</li>
                           </NavLink>
                        </ul>
                     </Grid>
                     <Grid container item sm={6} justifyContent="space-between" alignItems="center">
                        <Grid item sm={6}><ComboBox></ComboBox></Grid>

                        {IsAuthenticate?
                           <Grid container item xs={6} md={6} alignItems="center">
                              <Grid item xs={5}>
                                 <NavLink to="/profile" className="nav-link">
                                    Профиль
                                 </NavLink>
                              </Grid>
                              <Grid item xs={7}>
                                 <LogoutPage logOut={logOut}></LogoutPage>
                              </Grid>
                           </Grid>
                           :
                           <Grid item xs={6} md={6}>
                              <button className="headerButton" onClick={handleOpen}>Войти</button>
                           </Grid>
                        }
                     </Grid>
                  </Grid>
               ):(
                  <Grid item xs={2} sm={2} style={{overflow:"hidden"}}>
                     <BurgerMenu
                        IsAuthenticate = {IsAuthenticate}
                        logOut={logOut} handleOpen={handleOpen}></BurgerMenu>
                  </Grid>
               )}
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