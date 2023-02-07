'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

type Inputs = {
  name: string;
  street: string;
  email: string;
  password: string;
  streetNumber: number;
  post: number;
  city: string;
};

const schema = yup.object({
  // email is required with email format
  email: yup.string().email().required(),
  // password is required with minimum length of 8
  password: yup.string().min(8).required(),
  name: yup.string().required(),
  street: yup.string().required(),
  streetNumber: yup.string().required(),
  post: yup.string().required(),
  city: yup.string().required(),
});

const theme = createTheme();

export default function ShippingAddress(): React.ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const [checkboxMarked, setCheckboxMarked] = React.useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    localStorage.setItem('items', JSON.stringify(data));
    setCheckboxMarked((preValue: boolean) => !preValue);

    reset();
  };

  // console.log(watch('password'));

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <TextField
            {...register('name', { required: true })}
            margin="normal"
            required
            fullWidth
            id="name"
            label="name"
            name="name"
            autoComplete="name"
          />
          {errors.name && (
            <Typography color="error"> Please Provide your Name </Typography>
          )}

          <TextField
            {...register('street', { required: true })}
            margin="normal"
            required
            fullWidth
            id="street"
            label="Street "
            name="street"
            autoComplete="street"
          />
          {errors.street && (
            <Typography color="error"> Please provide Street Name</Typography>
          )}
          <TextField
            {...register('streetNumber', { required: true })}
            margin="normal"
            required
            fullWidth
            id="streetNo"
            label="Street Number"
            name="str"
            autoComplete="email"
            type="number"
          />
          {errors.streetNumber && (
            <Typography color="error">
              {' '}
              Please provide a valid Street Number
            </Typography>
          )}
          <TextField
            {...register('post', { required: true })}
            margin="normal"
            required
            fullWidth
            id="post"
            label="Post Code"
            name="Post Code"
            autoComplete="Post Code"
            type="number"
          />
          {errors.post && (
            <Typography color="error">
              {' '}
              Plaese Provide a valid Post Code
            </Typography>
          )}

          <TextField
            {...register('city', { required: true })}
            margin="normal"
            required
            fullWidth
            id="city"
            label="city"
            name="city"
            autoComplete="Post Code"
          />
          {errors.city && (
            <Typography color="error">
              {' '}
              Plaese Provide the Name of your City
            </Typography>
          )}

          {/* {errors.email && <span role="alert">This field is required</span>} */}
          <TextField
            sx={{ marginBottom: '10px' }}
            {...register('password', { required: true })}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {errors.password && (
            <Typography sx={{ justifyContent: 'center' }} color="error">
              {' '}
              At least 8 character is required
            </Typography>
          )}
          {/* <FormControlLabel
        control={
          <Checkbox
            disableRipple
            checked={checkboxMarked}
            onClick={() => setCheckboxMarked((preValue) => !preValue)}
            {...register('remember')}
            color="primary"
          />
        }
        label="Remember me"
      /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
