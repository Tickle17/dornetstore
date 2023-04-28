import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from '@material-ui/core';

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
                  <Typography gutterBottom variant="h5" component="h2">
                     {product.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                     {product.description}
                  </Typography>
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
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 100,
      image: 'https://picsum.photos/id/1015/400/300',
   },
   {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 200,
      image: 'https://picsum.photos/id/1016/400/300',
   },
   {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      price: 300,
      image: 'https://picsum.photos/id/1018/400/300',
   },
   {
      id: 4,
      name: 'Product 4',
      description: 'Description of Product 2',
      price: 200,
      image: 'https://picsum.photos/id/1016/400/300',
   },
   {
      id: 4,
      name: 'Product 4',
      description: 'Description of Product 2',
      price: 200,
      image: 'https://picsum.photos/id/1016/400/300',
   },
   {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 100,
      image: 'https://picsum.photos/id/1015/400/300',
   },
   {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 200,
      image: 'https://picsum.photos/id/1016/400/300',
   },
   {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      price: 300,
      image: 'https://picsum.photos/id/1018/400/300',
   },
];
