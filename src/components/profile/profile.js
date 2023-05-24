import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import dornetCoin from '../../imgs/dornetCoin.png';
import axios from 'axios';
import Loader from "../../loader";


export default function ProflePage() {

// стейты с данными юзера
   const [userInfo, setUserInfo] = useState({
      firstname: '',
      secondname: '',
      balance: '',
      orders:""
   });

   const [firstNameInput, setFirstNameInput] = useState("");
   const [secondNameInput, setSecondNameInput] = useState("");
   const [editMode, setEditMode] = useState(false);
   const [loader, setLoader] = useState(true)
   const token = localStorage.getItem('token');
   const username = localStorage.getItem('username');

   // обновление стейтов данных юзера при ререндере данных
   useEffect(() => {
      async function profileCheck(username, token) {
         setLoader(true)
         try {
            const response = await axios.post(
               'http://localhost:5001/auth/username',
               { username, token }
            );
            if (response.data.message === 'access') {
               console.log(response.data)
               setFirstNameInput(response.data.firstname)
               setSecondNameInput(response.data.secondname)
               setUserInfo({
                  firstname: response.data.firstname,
                  secondname: response.data.secondname,
                  balance: response.data.balance,
                  orders: response.data.orders
               });
               setLoader(false)
            }
         } catch (error) {
            console.log(error);
         }
      }
      profileCheck(username, token);
   }, [username, token]);


   // отправление новых данных пользователя в бд
   const handleSaveClick = async () => {
      try {
         await axios.post(
            'http://localhost:5001/auth/update',
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
                        <Grid item xs={4} style={{cursor:"pointer"}} onClick={() => setEditMode(true)}>
                           Изменить
                        </Grid>
                     ) : (
                        <Grid item xs={4}>
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

               <Grid item xs={12}
                     style={{margin:"0 auto", marginTop:"50px",
                        maxWidth:"1200px",backgroundColor:"white",padding:"50px",textAlign:"left", borderRadius:"10px",boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 8px"}}>
                  <Grid container
                        style={{paddingBottom:"50px"}}>
                     <Grid item xs={3}>
                        {`История заказов(${userInfo.orders.length})`}
                     </Grid>
                     <Grid item xs={3}>
                        Неоплаченные заказы(0)
                     </Grid>
                     <Grid item xs={3}>
                        Избранные товары(0)
                     </Grid>
                  </Grid>
                  {(loader ? <Loader></Loader> :
                     <Grid>
                        {
                           userInfo.orders.map((orderGroup, i) => (
                              <Grid key={i}>
                                 {orderGroup.map((order, j) => (
                                    <Grid container key={j}>
                                       <Grid container style={{padding: "20px 0px"}}>
                                          <Grid container alignItems="center" style={{
                                             borderBlock: "1px solid",
                                             borderColor: "rgba(211, 211, 211, 0.5)",
                                             padding: "10px 0px"
                                          }}>
                                             <Grid item xs={1} >
                                                <img src={order.photo} alt=""/>
                                             </Grid>
                                             <Grid item container alignItems="center" justifyContent="center" xs={3} >
                                                <Grid>
                                                   {order.name}
                                                </Grid>
                                                <Grid item container alignItems="center" justifyContent="center" style={{opacity: "0.5", fontSize: "13px"}}>
                                                   {order.description}
                                                </Grid>
                                             </Grid>
                                             <Grid item container alignItems="center" justifyContent="center" xs={4}>
                                                {order.price}
                                             </Grid>
                                             <Grid item container alignItems="center" justifyContent="center" xs={4}>
                                                {`${new Date(order.createdAt).getFullYear()}.${(
                                                   new Date(order.createdAt).getMonth() + 1
                                                )
                                                   .toString()
                                                   .padStart(2, "0")}.${new Date(order.createdAt)
                                                   .getDate()
                                                   .toString()
                                                   .padStart(2, "0")} ${new Date(order.createdAt)
                                                   .getHours()
                                                   .toString()
                                                   .padStart(2, "0")}:${new Date(order.createdAt)
                                                   .getMinutes()
                                                   .toString()
                                                   .padStart(2, "0")}:${new Date(order.createdAt)
                                                   .getSeconds()
                                                   .toString()
                                                   .padStart(2, "0")}`}                                             </Grid>
                                          </Grid>
                                       </Grid>
                                    </Grid>
                                 ))}
                              </Grid>
                           ))}
                     </Grid>)}
               </Grid>

            </Grid>
   )
}
