'use client';

import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import * as React from 'react';
import PaymentDetails from './PaymentDetails';
import Review from './Review';
import ShiipingAddress from './ShiipingAddress';

const steps = ['Shiiping Address', 'Payment Details', 'Review'];

const showForm = (step: number): React.ReactElement => {
  switch (step) {
    case 0:
      return <ShiipingAddress />;

    case 1:
      return <PaymentDetails />;

    case 2:
      return <Review />;

    default:
      return <ShiipingAddress />;
  }
};

export default function HorizontalLabelPositionBelowStepper(): React.ReactElement {
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const handleNext = () => {
    setActiveStep((preValue) => preValue + 1);
  };
  const handleBack = () => {
    setActiveStep((preValue) => preValue - 1);
  };

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        justifyContent: 'center',

        display: 'flex',
        marging: ' auto',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          width: '100%',
          border: 'solid 1px',
          borderRadius: '10px',
          m: '2',
        }}
      >
        <Box m={4}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {showForm(activeStep)}

        <Box
          sx={{
            m: 2,
            alignItems: 'center',
            justifyContent: 'space-around',
            display: 'flex',
          }}
        >
          <Button variant="contained" onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
