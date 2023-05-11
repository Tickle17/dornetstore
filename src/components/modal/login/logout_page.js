import {Grid} from "@mui/material";

export default function LogoutPage({logOut}) {
   return(
      <Grid item xs={12} style={{justifyContent:"center"}}>
            <button
               className="headerButton"
               onClick={logOut}>
               <input  type="submit" value="Log out"/>
            </button>
      </Grid>

   )
}