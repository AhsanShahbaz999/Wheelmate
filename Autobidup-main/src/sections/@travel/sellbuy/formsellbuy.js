import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import {
  Button,
  Typography,
  Box,
  Container,
  Stepper,
  Step,
  StepButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

import Step1 from '../sellbuy/carinformationstep1';
import Step2 from '../sellbuy/enterpricestep2';
import Step3 from '../sellbuy/featuresstep3';
import Step4 from '../sellbuy/imagesstep4';
import Step5 from '../sellbuy/finishstep5';

const steps = [
  'Car Information',
  'Enter Price',
  'Features & Specifications',
  'Upload Images',
  'Finish',
];

export default function Formsellbuy() {
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    router.push('/travel/buysellcar'); // redirect to car list or form page
  };

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const [formValues1, setFormValues1] = useState({
    reg_city: '', city: '', color: '', mileage: '', year: '', make: '', model: '', variant: '', bodytype: '',
  });
  const [formValues2, setFormValues2] = useState({ price: '' });
  const [formValues3, setFormValues3] = useState({ engine_type: '', engine_capacity: '', transmission: '', assembly: '' });
  const [formValues3p1, setFormValues3p1] = useState({
    airbags: false, airconditioner: false, alloywheels: false, antilockbreakingsystem: false,
    coolbox: false, cupholders: false, foldingrearseat: false, immobilizer: false, powerdoorlocks: false,
    powersteering: false, powerwindows: false, powermirrors: false, rearwiper: false, tractioncontrol: false,
    rearseatent: false, climatecontrol: false, rearacvents: false, frontspeaker: false, rearspeaker: false, armrests: false,
  });
  const [formValues4, setFormValues4] = useState({ images: '' });
  const [formValues5, setFormValues5] = useState({ seller_name: '', seller_phone: '', description: '' });

  const validateForm = (i) => {
    let isValid = true;
    const newErrors = {};
    if (i === 0) {
      ['reg_city', 'city', 'color', 'mileage', 'year', 'make', 'model', 'variant', 'bodytype'].forEach((field) => {
        if (!formValues1[field]) {
          newErrors[field] = `${field.replace('_', ' ')} is required`;
          isValid = false;
        }
      });
    } else if (i === 1 && !formValues2.price) {
      newErrors.price = 'Price is required';
      isValid = false;
    } else if (i === 2) {
      ['engine_type', 'engine_capacity', 'transmission', 'assembly'].forEach((field) => {
        if (!formValues3[field]) {
          newErrors[field] = `${field.replace('_', ' ')} is required`;
          isValid = false;
        }
      });
    } else if (i === 3 && !formValues4.images) {
      newErrors.images = 'Images are required';
      isValid = false;
    } else if (i === 4) {
      ['description', 'seller_name', 'seller_phone'].forEach((field) => {
        if (!formValues5[field]) {
          newErrors[field] = `${field.replace('_', ' ')} is required`;
          isValid = false;
        }
      });
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleNext = (step) => validateForm(step) && setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleInputChange = (setValues) => (e) => {
    const { name, value, checked, type } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleInputChange4 = (e) => {
    const files = Array.from(e.target.files);
    Promise.all(files.map(file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    }))).then((results) => {
      setFormValues4((prev) => ({ ...prev, images: [...(prev.images || []), ...results] }));
    });
  };

  const formattedDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    setFormData({
      ...formValues1,
      ...formValues2,
      ...formValues3,
      ...formValues3p1,
      ...formValues4,
      ...formValues5,
      created_at: formattedDate,
    });
  }, [formValues1, formValues2, formValues3, formValues3p1, formValues4, formValues5]);

  const handleSubmit = async () => {
    if (!validateForm(4)) return;
    try {
      const response = await fetch('http://localhost:4000/cars/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('✅ Submission successful');
        setOpen(true);
      } else {
        console.error('❌ Submission failed');
      }
    } catch (error) {
      console.error('❌ Error submitting form:', error);
    }
  };

  const getStepContent = (index) => {
    switch (index) {
      case 0: return <Step1 formValues={formValues1} handleInputChange={handleInputChange(setFormValues1)} errors={errors} />;
      case 1: return <Step2 formValues={formValues2} handleInputChange={handleInputChange(setFormValues2)} errors={errors} />;
      case 2: return <Step3 formValues={formValues3} formValues3p1={formValues3p1} handleInputChange={handleInputChange(setFormValues3)} handleInputChange3p1={handleInputChange(setFormValues3p1)} errors={errors} />;
      case 3: return <Step4 formValues={formValues4} handleInputChange={handleInputChange4} errors={errors} />;
      case 4: return <Step5 formValues={formValues5} handleInputChange={handleInputChange(setFormValues5)} errors={errors} />;
      default: return null;
    }
  };

  return (
    <Container sx={{ padding: '5%' }}>
      <Box sx={{ width: '100%', p: { sm: 4 }, pt: { xs: 2 }, pb: { xs: 2 }, borderRadius: '20px', background: 'rgba(254,254,254,0.93)' }}>
        <Typography variant="h2" textAlign="center" mb={4}>Sell Used Car Form</Typography>
        <form>
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton>{label}</StepButton>
              </Step>
            ))}
          </Stepper>
          <Box>
            {activeStep === steps.length ? (
              <Box>
                <p>All steps completed!</p>
                <Button variant="contained" onClick={() => setActiveStep(0)}>Reset</Button>
              </Box>
            ) : (
              <Box>
                {getStepContent(activeStep)}
                <Box>
                  <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                  <Button variant="contained" onClick={activeStep === steps.length - 1 ? handleSubmit : (e) => { e.preventDefault(); handleNext(activeStep); }}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </form>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle><Icon icon="il:heart" /></DialogTitle>
        <DialogContent>
          <DialogContentText variant="h4">Thank You!</DialogContentText>
          <DialogContentText variant="h6" mt={2}>Your post has been submitted successfully.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ backgroundColor: '#212B36', color: 'white', '&:hover': { backgroundColor: '#FFBE00', color: 'white' } }}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}