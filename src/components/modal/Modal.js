import "./modalStyle.css"
import axios from "axios";
import LoginPage from "./login/login_page";
import {useState} from "react";
export default function Modal(props) {
   const showHideClassName = props.show ? 'modal display-block' : 'modal display-none';

   const [warningMessage,setWarningMessage] = useState("")
   const [warningMessageInfo,setWarningMessageInfo] = useState(false)

   function timerStart(){
      const timerMessage = setTimeout (() => {
         setWarningMessageInfo(false)
      },2000 );
      return timerMessage;
   }
   async function autorized(username,password) {

      try {
         const response = await axios.post(
            'http://localhost:5001/auth/login',
            { username, password });
         // сохраняем JWT токен в локальном хранилище
         localStorage.setItem('token', response.data.token);
         localStorage.setItem('username', response.data.username);

         // устанавливаем состояние авторизации в true
         props.setIsAuthenticated(true);
         props.closeModal()
      } catch (error) {
         setWarningMessageInfo(true);
         setWarningMessage(error.response.data.message);
         timerStart();
         console.log(`${error.response.data.message}`);
      }
   }

   async function registration(username,password) {
      try {
         const response = await axios.post(
            'http://localhost:5001/auth/registration',
            { username, password });
         // сохраняем JWT токен в локальном хранилище
         localStorage.setItem('token', response.data.token);
         localStorage.setItem('username', response.data.username);

         // устанавливаем состояние авторизации в true
         props.setIsAuthenticated(true);
         props.closeModal()
      } catch (error) {
         console.log(error);
      }
   }
   return(
      <div className={showHideClassName}>
         <div className="modal-main">
            <div style={{display:"block"}}>
               <div className="burger" onClick={props.closeModal} >
                  <span className="line1"></span>
                  <span className="line2"></span>
               </div>
            </div>
            <LoginPage
               autorized = {(username,password)=>{
                  autorized(username,password)
               }}
               registration = {(username,password)=>{
                  registration(username,password)
               }}
            ></LoginPage>
            <div className={warningMessageInfo?"warningMessageActive":"warningMessageNone"}>{warningMessage}</div>
         </div>

      </div>
   )
}