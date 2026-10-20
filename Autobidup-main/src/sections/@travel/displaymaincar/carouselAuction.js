import PropTypes from 'prop-types';
import * as React from 'react';
import { Button, Grid, Box, Container, Stepper, Step, StepButton } from '@mui/material';
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import { CarouselArrows, CarouselDots, Image } from '../../../components';
import { styled } from '@mui/material/styles';
import ContactinfoAuction from './contactinfoAuction';
//---------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

export default function Carousel({post}) {
    // console.log('post', post);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
      const imageNames = [];
      for (let i = 1; i <= 36; i++) {
          const imageName = `car-${i}.PNG`;
          imageNames.push(imageName);
      }
      const importedImages = imageNames.map(async (imageName) => {
          const {default: image} = await import(`/public/car-images/${imageName}`);
          return image;
      });

      Promise.all(importedImages).then((images) => setImages(images));
  }, []);

  useEffect(() => {
      console.clear()
      console.log(images)

      const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
      }, 300);
      return () => clearInterval(interval);
  }, [images]);

  return (
      <Grid container spacing={2} >
          <Grid item xs={12} sm={7}>
        <div style={{ marginTop: '200px' }}>
        {images && images.length !== 0 &&
                  <div className={"animate-card"}>
                      <img
                          key={currentImageIndex}
                          src={images[currentImageIndex]?.src}
                          alt={`Image ${currentImageIndex}`}
                          style={{
                              opacity: currentImageIndex === 0 ? 1 : 0,
                          }}
                      />
                      <img
                          key={currentImageIndex + 1}
                          src={images[(currentImageIndex + 1) % images.length].src}
                          alt={`Image ${(currentImageIndex + 1) % images.length}`}
                          style={{
                              opacity: currentImageIndex === 0 ? 0 : 1,
                          }}
                      />
                  </div>
              }

        </div>
          </Grid>
          <Grid item xs={12} sm={5}>
              <ContactinfoAuction post={post}/>
          </Grid>
      </Grid>
  );
}