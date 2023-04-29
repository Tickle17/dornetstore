export default function LogoutPage({logOut}) {
   return(
      <div style={{justifyContent:"center",columnGap:"10px"}}>
         <button>
            <input onClick={logOut} type="submit" value="Log out"/>
         </button>

      </div>
   )

}