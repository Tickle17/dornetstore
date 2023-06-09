import axios from "axios";



export function checkAuthen({setIsAuthenticated}){



   const token = localStorage.getItem('token');
   const username = localStorage.getItem('username');
   async function check(username,token) {
      function logOut() {
         localStorage.removeItem('token')
         localStorage.removeItem('username')
         window.location.reload()
         setIsAuthenticated(false)
      }
      try {
         const response = await axios.post(
            'https://dornetshop.ru:5001/auth/check',
            { username, token });
         if (response.data.message === 'access'){
            return setIsAuthenticated(true);
         }
         else logOut();
      } catch (error) {
         console.log(error);
      }
   }
   return(
      check(username,token)
   )
}