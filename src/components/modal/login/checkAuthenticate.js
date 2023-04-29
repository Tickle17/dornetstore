import axios from "axios";

export function checkAuthen({setIsAuthenticated}){
   const token = localStorage.getItem('token');
   const username = localStorage.getItem('username');
   async function check(username,token) {
      try {
         const response = await axios.post(
            'http://localhost:5001/auth/check',
            { username, token });
         if (response.data.message === 'access'){
            return setIsAuthenticated(true);
         }
            setIsAuthenticated(false);
      } catch (error) {
         console.log(error);
      }
   }
   return(
      check(username,token)
   )
}