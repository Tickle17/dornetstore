import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import dornetCoin from '../../imgs/dornetCoin.png';
import axios from 'axios';


export default function ProflePage() {
   const [userInfo, setUserInfo] = useState({
      firstname: '',
      secondname: '',
      balance: '',
   });

   const [firstNameInput, setFirstNameInput] = useState("");
   const [secondNameInput, setSecondNameInput] = useState("");
   const [editMode, setEditMode] = useState(false);
   const token = localStorage.getItem('token');
   const username = localStorage.getItem('username');

   useEffect(() => {
      async function profileCheck(username, token) {
         try {
            const response = await axios.post(
               'https://tickle17.github.io//auth/username',
               { username, token }
            );
            if (response.data.message === 'access') {
               setFirstNameInput(response.data.firstname)
               setSecondNameInput(response.data.secondname)
               setUserInfo({
                  firstname: response.data.firstname,
                  secondname: response.data.secondname,
                  balance: response.data.balance,
               });
            }
         } catch (error) {
            console.log(error);
         }
      }
      profileCheck(username, token);
   }, [username, token]);


   const handleSaveClick = async () => {
      try {
         await axios.post(
            'https://tickle17.github.io//auth/update',
            {
               username,
               token,
               firstName: firstNameInput,
               secondName: secondNameInput,
            }
         )
        await setUserInfo({
            ...userInfo,
            firstname: firstNameInput,
            secondname: secondNameInput,
         })
         setEditMode(false);
         ;
      } catch (error) {
         console.log(error);
      }
   };


   return(
      <Grid style={{margin:"0 auto",
         backgroundColor:"rgba(112, 112, 115, 0.15)",padding:"50px 0px"}}>

         <Grid item xs={12} style={{maxWidth:"1200px",margin:"0 auto"}}>
            <div style={{textAlign:"left",paddingBottom:"50px",fontSize:"30px"}}>Кабинет покупателя</div>
         </Grid>

         <Grid item xs={12} style={{margin:"0 auto",
            maxWidth:"1200px",backgroundColor:"white",padding:"50px",textAlign:"left", borderRadius:"10px",boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 8px"}}>
            <Grid container style={{paddingBottom:"30px"}}>
               <Grid item xs={3}>
                  Личная информация
               </Grid>
               {!editMode ? (
                  <Grid item xs={9} style={{cursor:"pointer"}} onClick={() => setEditMode(true)}>
                     Изменить
                  </Grid>
               ) : (
                  <Grid item xs={9}>
                     <button onClick={() => handleSaveClick()}>Сохранить</button>
                  </Grid>
               )}
            </Grid>
            {!editMode ?
               (
                  <div>
               {userInfo.firstname} {userInfo.secondname}
                  </div>)
                  : (
               <Grid>
                  <input
                     type="text"
                     value={firstNameInput}
                     onChange={(e) => setFirstNameInput(e.target.value)}
                     style={{backgroundColor:"rgba(112, 112, 115, 0.15)",padding:"10px",borderRadius:"10px"}}
                  />
                  <input
                     type="text"
                     value={secondNameInput}
                     onChange={(e) => setSecondNameInput(e.target.value)}
                     style={{backgroundColor:"rgba(112, 112, 115, 0.15)",padding:"10px",borderRadius:"10px", marginLeft:"10px"}}

                  />
               </Grid>
               )}
            <Grid container  style={{paddingTop:"20px"}}>
               <Grid container item xs={12}>
                  <img src={dornetCoin} alt="" style={{width:"20px",marginRight:"10px"}}/>
                  <div>{userInfo.balance} баллов</div>
               </Grid>
            </Grid>
         </Grid>

         <Grid item xs={12} style={{margin:"0 auto", marginTop:"50px",
            maxWidth:"1200px",backgroundColor:"white",padding:"50px",textAlign:"left", borderRadius:"10px",boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 8px"}}>
            <Grid container style={{paddingBottom:"50px"}}>
               <Grid item xs={3}>
                  История заказов(0)
               </Grid>
               <Grid item xs={3}>
                  Неоплаченные заказы(0)
               </Grid>
               <Grid item xs={3}>
                  Избранные товары(0)
               </Grid>
            </Grid>
            <div style={{paddingBottom:"10px", fontWeight:"lighter",opacity:"0.5"}}>Заказ №12312313 от 13.13.2013</div>
            <div>Форма заказа</div>
         </Grid>
      </Grid>
   )
}
