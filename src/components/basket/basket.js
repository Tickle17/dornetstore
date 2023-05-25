import {Grid} from "@mui/material";
import {memo, useEffect, useState} from "react";
import axios from "axios";

const token = localStorage.getItem('token');
const username = localStorage.getItem('username');

async function deleteBusketItem (itemId){
   try{
      await axios.post(
         "https://dornetshop.ru:5001/auth/deleteItemBusket",
         {username,itemId}
      )
      // window.location.reload();
   }
   catch (e) {
      console.log(e);
   }
}

async function delBusket (){
   try {
      await axios.post(
         "https://dornetshop.ru:5001/auth/deleteBusket",
         {
            username,token
         }
      )
      // window.location.reload();
   }
   catch (e) {
      console.log(e);
   }
}
async function buyBusket ({basket},total){
   try{
      console.log(basket, total)
      const response= await axios.post(
         "https://dornetshop.ru:5001/auth/sendOrder",
         {username,basket,total}
      )
      if(response.data.message==="access"){
         delBusket()
         // window.location.reload();
      }
      else return response.data
   }
   catch (e) {
      console.log(e);
   }
}

const BasketList = memo(({ basket }) => {
   const [total,setTotal]=useState(0)
   useEffect(()=>{
      const sumTotal = basket.reduce((sum, item) => sum + item.price, 0);
      setTotal(sumTotal)
   },[basket])
   return (
      <Grid style={{minHeight:"600px",maxWidth:"1200px",margin:"0 auto"}}>
         {(basket.length<1)?(<div style={{paddingTop:"200px"}}> Еще ничего нет, время закупаться...</div>):(
            <div>
               {basket.map((item) => (
                  <Grid style={{padding: "20px 0px"}}>
                     <Grid container alignItems="center" style={{
                        borderBlock: "1px solid",
                        borderColor: "rgba(211, 211, 211, 0.5)",
                        padding: "10px 0px"
                     }}>
                        <Grid item xs={1}>
                           <img src={item.photo} alt=""/>
                        </Grid>
                        <Grid item xs={4}>
                           <Grid>
                              {item.name}
                           </Grid>
                           <Grid style={{opacity: "0.5", fontSize: "13px"}}>
                              {item.description}
                           </Grid>
                        </Grid>
                        <Grid item xs={4}>
                           {item.price}
                        </Grid>
                        <Grid item xs={3}>
                           <button onClick={()=> {
                              const itemId=item._id
                              deleteBusketItem(itemId)
                           }}>
                              Удалить
                           </button>
                        </Grid>
                     </Grid>
                  </Grid>
               ))}
               <Grid container item xs={3} alignItems="center" justifyContent="space-evenly">
                  <div>{total}</div>
                  <button
                     className="headerButton"
                     onClick={()=>buyBusket({basket},total)}
                  >
                     <input  type="submit" value="Оформить"/>
                  </button>
                  <button
                     className="headerButton"
                     onClick={delBusket}
                  >
                     Удалить корзину
                  </button>
               </Grid>
            </div>)}


      </Grid>
   );
});
export default function Basket() {
   const [basket, setBasket] = useState([]);

   useEffect(() => {
      async function getBasket() {
         try {
            const response = await axios.post(
               'https://dornetshop.ru:5001/auth/basket',
               { username, token }
            );
            if (response.data.message === 'access') {
               setBasket(response.data.basket);
            }
         } catch (error) {
            console.log(error);
         }
      }
      getBasket()
      return()=> {getBasket()}
   }, []);

   return (
      <div>
         <BasketList basket={basket} />
      </div>
   );
}

