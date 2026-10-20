import PropTypes from 'prop-types';
import React, {  useEffect, useState } from 'react';

// @mui
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import {  TravelLandingIntroduce } from '../../../src/sections/@travel';
import Pageimage from '../../../src/sections/@travel/landing/pageimage';
import TravelLandingfull from '../../../src/sections/@travel/landing/TravelLandingfull';
import HBI from '../../../src/assets/images/HatchBackIcon.png';
import SEI from '../../../src/assets/images/SedanIcon.png';
import SUVI from '../../../src/assets/images/SUVIcon.png';
import COI from '../../../src/assets/images/CrossOverIcon.png';
import MVI from '../../../src/assets/images/MiniVanIcon.png';
import used from '../../../src/assets/images/landing.jpg';
import Loader from '../UsedCars/Loader';
import ChatButton from '../ChatButton';
import LatestPosts2 from '../../../src/sections/@travel/landing/LatestPosts2';
import { useRouter } from 'next/router';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));
// ----------------------------------------------------------------------
Usedcars.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function Usedcars({ posts }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/cars'); // 🔴 Use your backend API
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        console.log("Fetched Cars Data:", jsonData);
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  console.log(data)
  var list = data
  return (
    <Page title="Used Cars | AutoBidUp">


    
      <Loader />
      <Pageimage images={usedimage} />
      <ChatButton /> 
      <TravelLandingIntroduce categories={vehicalType}  />
      <TravelLandingfull />
      <LatestPosts2 data={data} />
    </Page>
  );
}

//-------------------------------------------------------------------------------
const vehicalType = [
  {
    id: 1,
    name: 'HatchBack',
    img: HBI,
    path: '/travel/UsedCars/HatchBack',
    button: 'Shop Now',
  },
  {
    id: 2,
    name: 'Sedan',
    img: SEI,
    path: '/travel/UsedCars/Sedan',
    button: 'Shop Now',
  },
  {
    id: 3,
    name: 'SUV',
    img: SUVI,
    path: '/travel/UsedCars/Suv',
    button: 'Shop Now',
  },
  {
    id: 4,
    name: 'CrossOver',
    img: COI,
    path: '/travel/UsedCars/CrossOver',
    button: 'Shop Now',
  },
  {
    id: 5,
    name: 'MiniVan',
    img: MVI,
    path: '/travel/UsedCars/MiniVan',
    button: 'Shop Now',
  },
];
const usedimage = [
  {
    image: used,
  },
];

// ----------------------------------------------------------------------

Usedcars.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
