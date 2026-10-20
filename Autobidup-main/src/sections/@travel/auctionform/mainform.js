import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Button, Typography, Box, Container, Stepper, Step, StepButton } from '@mui/material';

import Step3 from '../auctionform/featuresstep3';
import Step4 from '../auctionform/imagesstep4';
import Step5 from '../auctionform/finishstep5';

//--------------------------------------------------------------
const steps = ['Features & Specifications', 'Upload Images', 'Finish'];

export default function Mainform() {
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  console.log('hello');

  const router = useRouter();
  const { id } = router.query;
  const item = id;
  console.log(item);

  const [formValues1, setFormValues1] = useState({
    engine_typex: '',
    engine_capacityx: '',
    transmissionx: '',
    assemblyx: '',
  });
  const [formValues1p1, setFormValues1p1] = useState({
    airbagsx: 'False',
    acx: 'False',
    alloy_wheelsx: 'False',
    antibrakingsystemx: 'False',
    cool_boxx: 'False',
    folding_seatsx: 'False',
    immoblizerx: 'False',
    power_door_locksx: 'False',
  });
  const [formValues2, setFormValues2] = useState({
    images: [],
  });
  const [formValues3, setFormValues3] = useState({
    ad_titlex: '',
    staring_bid: '',
    bid_datx: '',
    bid_timex: '',
    ad_descriptionx: '',
  });

  const validateForm = (i) => {
    let isValid = true;
    const newErrors = {};
    if (i == 0) {
      // Validate each field
      if (!formValues1.engine_typex) {
        newErrors.engine_typex = 'Engine Type is required';
        isValid = false;
      }

      if (!formValues1.engine_capacityx) {
        newErrors.engine_capacityx = 'Engine Capacity is required';
        isValid = false;
      }
      if (!formValues1.transmissionx) {
        newErrors.transmissionx = 'Transmission is required';
        isValid = false;
      }
      if (!formValues1.assemblyx) {
        newErrors.assemblyx = 'Assembly is required';
        isValid = false;
      }
    } else if (i == 1) {
      if (!formValues2.images) {
        newErrors.images = 'Images are required';
        isValid = false;
      }
    } else if (i == 2) {
      if (!formValues3.ad_titlex) {
        newErrors.ad_titlex = 'AD Title is required';
        isValid = false;
      }
      if (!formValues3.staring_bid) {
        newErrors.staring_bid = 'Starting Bid is required';
        isValid = false;
      }
      if (!formValues3.bid_datx) {
        newErrors.bid_datx = 'Date is required';
        isValid = false;
      }
      if (!formValues3.bid_timex) {
        newErrors.bid_timex = 'Time is required';
        isValid = false;
      }
      if (!formValues3.ad_descriptionx) {
        newErrors.ad_descriptionx = 'Discription is required';
        isValid = False;
      }
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleNext = (actStep) => {
    const isValid1 = validateForm(actStep);
    const isValid2 = validateForm(actStep);
    if (isValid1 && actStep == 0) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (isValid2 && actStep == 1) {
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

  const handleInputChange1p1 = (e) => {
    const value = e.target.checked;
    const name = e.target.name;
    const capitalizedValue = value ? 'True' : 'False'
    setFormValues1p1((prevValues) => ({
      ...prevValues,
      [name]: capitalizedValue,
    }));
  };

  const handleInputChange2 = (e) => {
    const files = e.target.files;
    const imageArray = Array.from(files);
    Promise.all(
      imageArray.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            resolve(event.target.result);
          };
          reader.onerror = (error) => {
            reject(error);
          };
          reader.readAsDataURL(file);
        });
      })
    )
      .then((results) => {
        // results is an array of base64 encoded images
        setFormValues2((prevValues) => ({
          ...prevValues,
          images: [...prevValues.images, ...results],
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleInputChange3 = (e) => {
    const { name, value } = e.target;
    setFormValues3((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleNextButton = (e) => {
    e.preventDefault();
    console.log(formValues1);
    console.log(formValues1p1);
    console.log(formValues2);
    console.log(formValues3);

    handleNext(activeStep);
  };

  useEffect(() => {
    setFormData({
      ...formValues1,
      ...formValues1p1,
      ...formValues2,
      ...formValues3,
      bids: item,
      // created_at: formattedDate,
    });
  }, [formValues1, formValues1p1, formValues2,formValues3]);

  
  const handleSubmit = async () => {
    console.log('Form Data', formData);
    if (validateForm(2)) {
      console.log('submitteeedddd now');
      console.log(formData);
      try {
        console.log('form is submitting');
        const form = new FormData();

        for (const key in formData) {
          if (key === 'images') {
            // Append each image file separately
            for (let i = 0; i < formData.images.length; i++) {
              form.append('images', formData.images[i]);
            }
          } else {
            form.append(key, formData[key]);
          }
        }

        const response = await fetch('https://autobidup.pythonanywhere.com/bidding/mainform', {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          body: form,
        });

        if (response.ok) {
          // API call successful
          const responseData = await response.json();
          console.log('response data', responseData);
          console.log('form submitted successfully');
          setOpen(true);
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
          <Step3
            formValues={formValues1}
            handleInputChange={handleInputChange1}
            formValues1p1={formValues1p1}
            handleInputChange1p1={handleInputChange1p1}
            errors={errors}
          />
        );
      case 1:
        return (
          <Step4 formValues={formValues2} handleInputChange={handleInputChange2} errors={errors} />
        );
      case 2:
        return (
          <Step5 formValues={formValues3} handleInputChange={handleInputChange3} errors={errors} />
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
