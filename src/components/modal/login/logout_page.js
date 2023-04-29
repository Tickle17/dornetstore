export default function LogoutPage({logOut}) {
   return(
      <div style={{justifyContent:"center",columnGap:"10px"}}>
         <div>Logout</div>
         <input onClick={logOut} type="submit" value="Log out"/>
      </div>
   )

}