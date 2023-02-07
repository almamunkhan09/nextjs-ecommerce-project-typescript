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
  cardHolder: string;
  cardNumber: string;
  cvv: string;
};

const schema = yup.object({
  cardHolder: yup.string().email().required(),
  cardNumber: yup.string().min(15).required(),
  cvv: yup.number().max(3).min(3).required(),
});

const theme = createTheme();

export default function PaymentDetails(): React.ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
            {...register('cardHolder', { required: true })}
            margin="normal"
            required
            fullWidth
            id="cardHolder"
            label="Name on the card"
            name="cardHolder"
            autoComplete="cardHolder"
          />
          {errors.cardHolder && (
            <Typography color="error">
              {' '}
              Please Provide Name on the card{' '}
            </Typography>
          )}

          <TextField
            {...register('cardNumber', { required: true })}
            margin="normal"
            required
            fullWidth
            id="cardNumber"
            label="cardNumber"
            name="cardNumber"
            autoComplete="cardNumber"
          />
          {errors.cardNumber && (
            <Typography color="error">
              {' '}
              Please Provide valid Card Number
            </Typography>
          )}
          <TextField
            {...register('cvv', { required: true, minLength: 3, maxLength: 3 })}
            margin="normal"
            required
            fullWidth
            id="cvv"
            label="cvv"
            name="cvv"
            autoComplete="cvv"
            type="number"
          />
          {errors.cvv && (
            <Typography color="error"> CVV is not valid</Typography>
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
