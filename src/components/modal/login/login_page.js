import {useState} from "react";

export default function LoginPage({autorized,registration}) {
   const [username,setUserName] = useState("")
   const [password,setPassword] = useState("")

   function login(event) {
      event.preventDefault();
      autorized(username, password);
   }
   function registr(event) {
      event.preventDefault();
      registration(username, password);
   }

   return(
      <div style={{justifyContent:"center"}}>
         <div>
            <div>Username:</div>
            <input
               onChange={(e) => setUserName(e.target.value)}
               type="text"
               id="username"
               name="username"
               style={{backgroundColor:"gray"}}
            />
         </div>

         <div>
            <div htmlFor="pass">Password (8 characters minimum):</div>
            <input
               onChange={(e) => setPassword(e.target.value)}
               type="password"
               id="pass"
               name="password"
               minLength="8"
               style={{backgroundColor:"gray"}}

            />
         </div>

         <button>
            <input onClick={login} type="submit" value="Sign in"/>
         </button>
         <button>
            <input onClick={registr} type="submit" value="registr"/>
         </button>
      </div>
   )

}