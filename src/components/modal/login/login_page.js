import {useState} from "react";
import { Grid } from '@mui/material';

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
      <Grid container spacing={2} style={{justifyContent:"center"}}>
         <Grid container spacing={1} item xs={12}>
            <Grid item xs={12}>
               <div>Username:</div>
            </Grid>
            <Grid item xs={12}>
               <input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  id="username"
                  name="username"
                  className="inputModal"
               />
            </Grid>

         </Grid>

         <Grid container spacing={1} item xs={12}>
            <Grid item xs={12}>
               <div htmlFor="pass">Password:</div>
            </Grid>
            <Grid item xs={12}>
               <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="pass"
                  name="password"
                  className="inputModal"
               />
            </Grid>

         </Grid>
         <Grid container spacing={2} item xs={12}>
            <Grid item xs={6} textAlign="right">
               <button className="headerButton" onClick={login}>
                  <input  type="submit" value="Login"/>
               </button>
            </Grid>
            <Grid item xs={6} textAlign="left">
               <button className="headerButton" onClick={registr}>
                  <input  type="submit" value="Sign in"/>
               </button>
            </Grid>
         </Grid>
      </Grid>
   )

}