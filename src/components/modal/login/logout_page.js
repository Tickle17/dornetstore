export default function LogoutPage({logOut}) {
   return(
      <div style={{justifyContent:"center",columnGap:"10px"}}>
         <button className="headerButton" onClick={logOut}>
            <input  type="submit" value="Log out"/>
         </button>

      </div>
   )

}