'use client';
import { products } from '@/data/products';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  AppBar,
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';

export default function Nav() {
  return (
    <main>
      <div>
        <CssBaseline>
          <AppBar position="relative" color="inherit" sx={{ color: 'orange' }}>
            <Toolbar>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item xs={8}>
                  <Typography variant="h6"> KCOM</Typography>
                </Grid>
                <Grid item xs={4} alignItems="center" justifyContent="flex-end">
                  <Stack
                    direction="row"
                    spacing={4}
                    alignItems="center"
                    justifyContent="flex-end"
                  >
                    <Link href="/products"> Products</Link>
                    <IconButton
                      size="large"
                      aria-label="show 4 new mails"
                      color="inherit"
                    >
                      <Badge badgeContent={4} color="error">
                        <AddShoppingCartIcon />
                      </Badge>
                    </IconButton>
                  </Stack>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </CssBaseline>
      </div>
    </main>
  );
}
