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
      <Grid>
         <Grid>
            <button
               className={`hamburger-button ${isOpen ? "open" : ""}`}
               onClick={toggleMenu}
            >
               <span className="line line-1"></span>
               <span className="line line-2"></span>
               <span className="line line-3"></span>
            </button>
         </Grid>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
               <ul>
                  <NavLink to="/dornetstore" className="nav-link">
                     <li             onClick={toggleMenu}
                     >Мерч</li>
                  </NavLink>

               <NavLink to="/delivery" className="nav-link">
                  <li             onClick={toggleMenu}
                  >Доставка</li>
               </NavLink>

               {IsAuthenticate?(<div>
                     <NavLink to="/profile" className="nav-link">
                        <li             onClick={toggleMenu}
                        >
                           Профиль
                        </li>
                     </NavLink>
                     <li             onClick={toggleMenu}
                     >
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

