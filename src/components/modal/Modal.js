import "./modalStyle.css"
import axios from "axios";
import LoginPage from "./login/login_page";
export default function Modal(props) {
   const showHideClassName = props.show ? 'modal display-block' : 'modal display-none';
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
      } catch (error) {
         console.log(error);
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
      } catch (error) {
         console.log(error);
      }
   }
   return(
      <div className={showHideClassName}>
         <div className="modal-main">

            <LoginPage
               autorized = {(username,password)=>{
                  autorized(username,password)
               }}
               registration = {(username,password)=>{
                  registration(username,password)
               }}
            ></LoginPage>

            <button className="headerButton"  onClick={props.closeModal} > Close</button>
         </div>

      </div>
   )
}