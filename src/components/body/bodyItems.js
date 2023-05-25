import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from '@material-ui/core';
import dornetCoin from "../../imgs/dornetCoin.png"
import buyButton from "../../imgs/buy.png"
import buyButton_hover from "../../imgs/buyed.png"
import axios from "axios";
import {memo, useEffect, useState} from "react";
import ModalLoader from "../modal/modalLoader";


const token = localStorage.getItem('token');
const username = localStorage.getItem('username');

const ProductCard = ({ product }) => {
const [loading, setLoading] =useState(false)
   async function sendProd (){
      try {
         setLoading(true)
         const response= await axios.post(
            "https://dornetshop.ru:5001/auth/updateBusket",
            {
               token,username, name: product.name, price: product.price, photo:product.image,description:product.description,createdAt:product.createdAt
            }
         )
         if (response.data.message==="success"){
            console.log(response.data.message)
            setLoading(false)
         }
      }
      catch (error) {
         console.log(error)}
      setLoading(false)

   }

   return (
      <Grid >
         <Card
            style={{ maxWidth: "1200px", maxHeight: 'auto',margin:"20px" }}
         >
            <CardActionArea style={{maxWidth: "1200px",}}>
               <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.title}
                  style={{ maxWidth: '100%', maxHeight: 'auto' }}

               />
               <CardContent>
                  <Grid container spacing={2}>
                     <Grid item xs={12} style={{textAlign:"center"}}>
                        <Typography gutterBottom variant="h5" component="h2" style={{
                           whiteSpace: "nowrap", // Запрет переноса строк
                           overflow: "hidden", // Скрытие всего, что не помещается в блоке
                           textOverflow: "ellipsis", // Замена не помещающихся слов троеточием
                        }}>
                           {product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p"   style={{
                           whiteSpace: "nowrap", // Запрет переноса строк
                           overflow: "hidden", // Скрытие всего, что не помещается в блоке
                           textOverflow: "ellipsis", // Замена не помещающихся слов троеточием
                        }}>
                           {product.description}
                        </Typography>
                     </Grid>
                     <Grid container item xs={12} justifyContent="space-between" style={{alignItems:"center"}}>
                           <Grid item xs={3} sm={2}>
                              <button onClick={sendProd} style={{textAlign:"left"}}>
                                 <img style={{maxWidth:"100%"}} src={buyButton} alt=""
                                onMouseOver={(e) => (e.currentTarget.src = buyButton_hover)}
                                onMouseOut={(e) => (e.currentTarget.src = buyButton)}/>
                              </button>
                           </Grid>
                           <Grid container justifyContent="space-between" item xs={9} sm={10} style={{alignItems:"center"}}>
                              <Grid item xs={7} sm={9} style={{textAlign:"right"}}>
                                 <Typography variant="h5" color="textSecondary">
                                    {product.price}
                                 </Typography>
                              </Grid>
                              <Grid item xs={5} sm={3}>
                                 <img style={{maxWidth:"60%"}}  src={dornetCoin} alt=""/>
                              </Grid>
                           </Grid>
                        </Grid>
                  </Grid>
                  {loading ? <ModalLoader></ModalLoader> : <></>}
               </CardContent>
            </CardActionArea>
         </Card>
      </Grid>

   );
};

const ProductList =  memo(({ products }) => {
   return (
      <Grid container style={{maxWidth:"1200px",margin:"0 auto"}}>
         {products.map((product) => (
            <Grid item xs={6} sm={6} md={3} key={product.id}>
               <ProductCard product={product} />
            </Grid>
         ))}
      </Grid>
   );
});
export default function BodyItems(){
   let [products,setProducts] =useState([])
   useEffect(()=>{
      async function getProducts (){
         try{
            const response = await axios.get("https://dornetshop.ru:5001/items/items")
            setProducts(response.data.items)
         }
         catch (error){
            console.log(error)
         }
      }
      getProducts()
   },[])
   return(
      <ProductList products={products}></ProductList>
   )
}