'use client';

import { products } from '@/data/products';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import * as React from 'react';

const addTocart = (product, setCart) => {
  const newItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    count: 1,
  };
  setCart((preValue) => [...preValue, newItem]);
};

const addMoreItem = (product, cart, setCart) => {
  let array2 = [...cart];
  array2.find((a) => a.id == product.id).count += 1;
  console.log(array2);

  // const matchFunction = (element) => element.id === product.id;
  // const indexOfItem = cartList.findIndex(matchFunction);
  // console.log(indexOfItem);
  setCart(array2);
};

export default function ResponsiveGrid() {
  const [cart, setCart] = React.useState([]);
  const [itemId, setItemId] = React.useState([]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                sx={{ height: 300 }}
                image={product.image}
                title={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography> */}
              </CardContent>
              <CardActions>
                <Button
                  size="medium"
                  onClick={() => {
                    if (!itemId.includes(product.id)) {
                      setItemId([...itemId, product.id]);
                      addTocart(product, setCart);
                    } else {
                      addMoreItem(product, cart, setCart);
                    }

                    console.log('Hello');
                  }}

                  // if (findOne) {
                  //   console.log('Found One');
                  // }
                >
                  {console.log(cart)}
                  Add to the cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
