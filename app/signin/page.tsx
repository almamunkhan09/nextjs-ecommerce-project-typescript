'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

type Inputs = {
  email: string;
  password: string;
  remember: boolean;
};

const schema = yup.object({
  // email is required with email format
  email: yup.string().email().required(),

  // password is required with minimum length of 8
  password: yup.string().min(8).required(),
});

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Al Mamun Khan
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
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
            height: '100vh',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              {...register('email', { required: true })}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            {errors.email && (
              <Typography color="error">
                {' '}
                Please provide a valid email
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
            <FormControlLabel
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container spacing={2}>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
