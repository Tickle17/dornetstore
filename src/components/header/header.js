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
               <Grid item xs={10} sm={9} md={3} className="logo">
                  <NavLink to="/dornetstore" className="nav-link">
                     <img src={dornetLogo} alt="logo" style={{cursor:"pointer"}}/>
                  </NavLink>
               </Grid>
               {isWide?(
                  <Grid container item md={9} alignItems="center" justifyContent="space-between">
                     <Grid item sm={6} className="headerMenu">
                           <NavLink to="/dornetstore" className="nav-link">
                              <li>Мерч</li>
                           </NavLink>
                           <NavLink to="/delivery" className="nav-link">
                              <li>Доставка</li>
                           </NavLink>
                     </Grid>
                     <Grid container item sm={6}alignItems="center">
                        {/*<Grid item sm={3}>*/}
                        {/*   <ComboBox></ComboBox>*/}
                        {/*</Grid>*/}

                        {IsAuthenticate?
                           <Grid container item xs={12} md={12} alignItems="center" justifyContent="flex-end">

                              <Grid item xs={4} className="headerMenu">
                                 <NavLink to="/basket" className="nav-link">
                                    <li>Корзина</li>
                                 </NavLink>
                              </Grid>

                              <Grid item xs={4} className="headerMenu">
                                 <NavLink to="/profile" className="nav-link">
                                    <li>Профиль</li>
                                 </NavLink>
                              </Grid>

                              <Grid item xs={4}>
                                 <LogoutPage logOut={logOut}></LogoutPage>
                              </Grid>
                           </Grid>
                           :
                           <Grid item xs={12} container justifyContent="flex-end">
                              <Grid>
                                 <button className="headerButton" onClick={handleOpen}>Войти</button>
                              </Grid>
                           </Grid>
                        }
                     </Grid>
                  </Grid>
               ):(
                  <Grid item xs={2} sm={1} style={{overflow:"hidden"}}>
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