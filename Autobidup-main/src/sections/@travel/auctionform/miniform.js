import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';

import { Button, Typography, Box, Container, Stepper, Step, StepButton } from '@mui/material';
import { useRouter } from 'next/router';

import Step1 from '../auctionform/usernformationstep1';
import Step2 from '../auctionform/cardetailsstep2';

//--------------------------------------------------------------
const steps = ['Consignor Information', 'Car Details'];

export default function Miniform() {

  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  console.log('hello');
  const router = useRouter();
  // const encodedUpdateBidding = router.query.updateBidding;
  // const decodedUpdateBidding = encodedUpdateBidding ? JSON.parse(decodeURIComponent(encodedUpdateBidding)) : null;


  const [formValues1, setFormValues1] = useState({
    name: '',
    phone_no: '',
  });
  const [formValues2, setFormValues2] = useState({
    chassis_no: '',
    engine_no: '',
    year: '',
    make: '',
    model: '',
    mileage: '',
    modified: '',
    car_location: '',
    car_type: '',
    tans_type : ''
  });
  const validateForm = (i) => {
    let isValid = true;
    const newErrors = {};
    if (i == 0) {
      // Validate each field
      if (!formValues1.name) {
        newErrors.name = 'Name is required';
        isValid = false;
      }

      if (!formValues1.phone_no) {
        newErrors.phone_no = 'Phone Number is required';
        isValid = false;
      }

    } else if (i == 1) {
      if (!formValues2.chassis_no) {
        newErrors.chassis_no = 'Chassis Number is required';
        isValid = false;
      }
      if (!formValues2.engine_no) {
        newErrors.engine_no = 'Engine Number is required';
        isValid = false;
      }

      if (!formValues2.mileage) {
        newErrors.mileage = 'Mileage is required';
        isValid = false;
      }

      if (!formValues2.year) {
        newErrors.year = 'Year is required';
        isValid = false;
      }

      if (!formValues2.make) {
        newErrors.make = 'Make is required';
        isValid = false;
      }

      if (!formValues2.model) {
        newErrors.model = 'Model is required';
        isValid = false;
      }

      if (!formValues2.tans_type) {
        newErrors.tans_type = 'Transmission Type is required';
        isValid = false;
      }
      if (!formValues2.modified) {
        newErrors.modified = 'Modification is required';
        isValid = false;
      }
      if (!formValues2.car_location) {
        newErrors.car_location = 'Car Location is required';
        isValid = false;
      }
      if (!formValues2.car_type) {
        newErrors.car_type = 'Car Type is required';
        isValid = false;
      }
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleNext = (actStep) => {
    const isValid1 = validateForm(actStep);
    // const isValid2 = validateForm(actStep);
    if (isValid1 && actStep == 0) {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setFormValues1((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setFormValues2((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleNextButton = (e) => {
    e.preventDefault();
    console.log(formValues1);
    console.log(formValues2);
    
    handleNext(activeStep);
  };

  useEffect(() => {
    setFormData({
      ...formValues1,
      ...formValues2,
      // created_at: formattedDate,
    });
  }, [formValues1, formValues2]);

  const handleSubmit = async () => {
    console.log("Form Data",formData)
    if (validateForm(1)){
      console.log('submitteeedddd now');
      console.log(formData);
      try {
        console.log('form is submiting');
        const response = await fetch('https://autobidup.pythonanywhere.com/bidding/miniform', {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          // API call successful
          const responseData = await response.json();

          // if (typeof router.query.updateBidding === 'function') {
          //   router.query.updateBidding(responseData.automatic_generated_bid_id);
          // }
          console.log('response data', responseData);
          console.log('form submitted succesfully');
          router.push({
            pathname: '/travel/Auction/Auction/',
            query: { bidId: responseData.automatic_generated_bid_id }
          });
          // setOpen(true);
          //
        } else {
          // API call failed
          const errorData = await response.json();
          // Handle the error data as needed
        }
      } catch (error) {
        // Error occurred during the API call
        console.error(error);
      }
    }
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Step1 formValues={formValues1} handleInputChange={handleInputChange1} errors={errors} />
        );
      case 1:
        return (
          <Step2 formValues={formValues2} handleInputChange={handleInputChange2} errors={errors} />
        );
      default:
        return null;
    }
  };

  return (
    <Container sx={{ padding: '5%' }}>
      <Box
        sx={{
          width: '100%',
          p: { sm: 4 },
          pt: { xs: 2 },
          pb: { xs: 2 },
          borderRadius: '20px',
          background: 'rgba(254,254,254,0.93)',
        }}
      >
        <Typography variant="h2" textAlign="center" mb={4}>
          Sell Used Car Form
        </Typography>
        <form>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            sx={{
              display: {
                xs: 'none',
                sm: 'flex',
                md: 'flex',
              },
              color: '#CE9A00',
            }}
          >
            {steps.map((label, index) => (
              <Step
                key={label}
                sx={{
                  '& .MuiStepLabel-root .Mui-completed': {
                    color: '#CE9A00', // circle color (COMPLETED)
                  },
                  '& .MuiStepLabel-root .Mui-active': {
                    color: '#CE9A00', // circle color (ACTIVE)
                  },
                  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                    fill: 'white', // circle's number (ACTIVE)
                  },
                }}
              >
                <StepButton color="yellow">{label}</StepButton>
              </Step>
            ))}
          </Stepper>

          <div>
            {activeStep === steps.length ? (
              <div>
                <p>All steps completed!</p>
                <Button variant="contained" color="primary" onClick={() => setActiveStep(0)}>
                  Reset
                </Button>
              </div>
            ) : (
              <div>
                {getStepContent(activeStep)}
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length - 1 ? handleSubmit : handleNextButton}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </form>
      </Box>
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ textalign: 'center' }}
      >
        <DialogTitle id="alert-dialog-title" variant="h2" color="#CE9A00">
          {' '}
          <Icon icon="il:heart" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText variant="h3" id="alert-dialog-description" color="black">
            Thank You!
          </DialogContentText>
          <DialogContentText variant="h5" id="alert-dialog-description" color="black" mt={2}>
            Your Post has been submitted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            textAlign="center"
            onClick={handleClose}
            sx={{
              backgroundColor: '#212B36',
              color: 'white',
              '&:hover': { backgroundColor: '#FFBE00', color: 'white' },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog> */}
    </Container>
  );
}

// ----------------------------------------------------------------------
