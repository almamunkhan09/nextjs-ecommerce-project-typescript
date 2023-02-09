'use client';

import { TextFieldsOutlined } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Avatar,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { border } from '@mui/system';

const cartList = [
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    count: 1,
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    count: 1,
  },
];

export default function Cart() {
  return (
    <Container maxWidth="md">
      <Stack justifyContent={'center'} alignItems="center">
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Your cart
        </Typography>

        <List>
          {cartList.map((item) => {
            return (
              <ListItem
                sx={{ border: 'solid 1px', marginBottom: '5px' }}
                key={item.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={item.title} />
                </ListItemAvatar>{' '}
                <Stack marginRight={'10px'}>
                  {' '}
                  <Typography> {item.title}</Typography>{' '}
                </Stack>
                <Stack sx={{ margingLeft: 'auto' }}>
                  {' '}
                  <Button sx={{ mergin: '10px' }} variant="contained">
                    {item.count}
                  </Button>
                </Stack>
              </ListItem>
            );
          })}
        </List>
      </Stack>
    </Container>
  );
}
