'use client';

import { products } from '@/data/products';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
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
  setCart((preValue: []) => [...preValue, newItem]);
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
    <Container maxWidth="xl" sx={{ marginTop: '5rem' }}>
      <Grid container spacing={2}>
        {products.map((product) => {
          return (
            <Grid
              key={product.id}
              item
              xs={6}
              md={4}
              xl={4}
              sx={{ padding: '20px' }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  image={product.image}
                  title={product.title}
                  sx={{ paddingTop: '100%' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5"> {product.title}</Typography>
                  {/* <Typography> {item.description}</Typography> */}
                </CardContent>

                <CardActions>
                  <Button
                    variant="contained"
                    onClick={() => {
                      if (!itemId.includes(product.id)) {
                        setItemId([...itemId, product.id]);
                        addTocart(product, setCart);
                      } else {
                        addMoreItem(product, cart, setCart);
                      }

                      console.log(cart);
                    }}
                  >
                    {' '}
                    Add To cart{' '}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
