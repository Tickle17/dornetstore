import React, { useState } from 'react';
import "./burgerStyles.css"
import {NavLink} from "react-router-dom";
import LogoutPage from "../modal/login/logout_page";
import {Grid} from "@mui/material";
export default function BurgerMenu ({IsAuthenticate,logOut,handleOpen}) {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   }

   return (
      <Grid item xs={6}>
         <button
            className={`hamburger-button ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
         >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
         </button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
               <ul>
                  <NavLink exact to="/dornetstore" className="nav-link" active>
                     <li>Мерч</li>
                  </NavLink>

               <NavLink to="/delivery" className="nav-link">
                  <li>Доставка</li>
               </NavLink>

               {IsAuthenticate?(<div>
                     <NavLink to="/profile" className="nav-link">
                        <li>
                           Профиль
                        </li>
                     </NavLink>
                     <li>
                        <LogoutPage logOut={logOut}></LogoutPage>
                     </li>
                  </div>)
                  :(
               <button className="headerButton" style={{marginTop:"50px"}} onClick={handleOpen}>Войти</button>)
            }
               </ul>
            </div>
      </Grid>)
};

