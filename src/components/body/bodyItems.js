import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from '@material-ui/core';
import pled from "../../imgs/Плед-спальник.jpg"
import beysbolka from "../../imgs/Бейсболка.jpg"
import brelok from "../../imgs/Мультитул.jpg"
import termos from "../../imgs/Термос.jpg"
import lighter from "../../imgs//фонарик.jpg"
import dornetCoin from "../../imgs/dornetCoin.png"
import buyButton from "../../imgs/buy.png"

const ProductCard = ({ product }) => {
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
                        <Typography gutterBottom variant="h5" component="h2" style={{// Максимальная ширина блока
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
                     <Grid container item xs={12} justifyContent="space-between">
                           <Grid item xs={6}>
                              <button  style={{textAlign:"left"}}><img style={{maxWidth:"30%"}} src={buyButton} alt=""/></button>
                           </Grid>
                           <Grid container item xs={6} style={{alignItems:"center"}}>
                              <Grid item xs={8} style={{textAlign:"right"}}>
                                 <Typography variant="h5" color="textSecondary" component="h2">
                                    {product.price}
                                 </Typography>
                              </Grid>
                              <Grid item xs={4} style={{textAlign:"right"}}>
                                 <img style={{maxWidth:"60%"}}  src={dornetCoin} alt=""/>
                              </Grid>
                           </Grid>
                        </Grid>
                  </Grid>

               </CardContent>
            </CardActionArea>
         </Card>
      </Grid>

   );
};

const ProductList = ({ products }) => {
   return (
      <Grid container spacing={0} style={{maxWidth:"1200px",margin:"0 auto"}}>
         {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
               <ProductCard product={product} />
            </Grid>
         ))}
      </Grid>
   );
};
export default function BodyItems(){
   return(
      <ProductList products={products}></ProductList>
   )
}
const products = [
   {
      id: 1,
      name: 'Плед-спальник',
      description: 'Греет в самые холодные ночи',
      price: 2400,
      image: pled,
   },
   {
      id: 2,
      name: 'Термос',
      description: 'Греет душу',
      price: 1500,
      image: termos,
   },
   {
      id: 3,
      name: 'Брелок-мультитул',
      description: 'Поможет в трудную минуту',
      price: 650,
      image: brelok,
   },
   {
      id: 4,
      name: 'Бейсболка',
      description: 'Защитит от солнца',
      price: 1200,
      image: beysbolka,
   },
   {
      id: 5,
      name: 'Фонарик-факел',
      description: 'Поможет в ночи',
      price: 1000,
      image: lighter,
   }]
