import PropTypes from 'prop-types';
// @mui
import { Box } from '@mui/material';
// utils
import { getAllPosts } from '../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../src/hooks';
// layouts
import Layout from '../src/layouts';
// components
import { Page, ErrorScreen } from '../src/components';
// sections
import { styled } from '@mui/material/styles';
import { TravelLandingHero, TravelLandingIntroduce } from '../src/sections/@travel';
import TravelLandingIntroduceOurServices from '../src/sections/@travel/landing/TravelLandingIntroduceOurServices';
import TravelLandingfull from '../src/sections/@travel/landing/TravelLandingfull';
import TravelLandingCars from '../src/sections/@travel/landing/TravelLandingCars';
import HBI from '../src/assets/images/HatchBackIcon.png';
import SEI from '../src/assets/images/SedanIcon.png';
import SUVI from '../src/assets/images/SUVIcon.png';
import COI from '../src/assets/images/CrossOverIcon.png';
import MVI from '../src/assets/images/MiniVanIcon.png';
import Loader from './travel/UsedCars/Loader';
import ChatButton from './travel/ChatButton';
import { useRouter } from 'next/router';
import Serviceclassdata from '../_data/mock/imagesos';
import LatestPosts2 from '../src/sections/@travel/landing/LatestPosts2';
import { useState, useEffect } from 'react';
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));
// ----------------------------------------------------------------------

export default function TravelLandingPage({ posts }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://autobidup.pythonanywhere.com/cars/all_cars/');
        const jsonData = await response.json();
        console.log('API Response:', jsonData);
        console.log('First car image URL:', jsonData[0]?.image);
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  var list = data;
  if (error) {
    return <ErrorScreen />;
  }
  const router = useRouter();
  const handleClick = () => {
    router.push('/travel/UsedCars/HatchBack');
  };
  const handleClick1 = () => {
    router.push('travel/UsedCars/Sedan');
  };
  const handleClick2 = () => {
    router.push('travel/UsedCars/Suv/');
  };
  const handleClick3 = () => {
    router.push('/travel/UsedCars/CrossOver/');
  };
  const handleClick4 = () => {
    router.push('/travel/UsedCars/MiniVan/');
  };
  return (
    <Page title="Home">
      <Loader />
      <Box sx={{ position: 'relative', overflowX: 'hidden' }}>
        <TravelLandingHero />
        <ChatButton />
      </Box>
      <TravelLandingIntroduceOurServices data={Serviceclassdata} />
      <TravelLandingIntroduce categories={vehicalType} />
      <LatestPosts2 data={data} />
      <TravelLandingfull />
      <TravelLandingCars />
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
    path: '/travel/UsedCars/Suv/',
    button: 'Shop Now',
  },
  {
    id: 4,
    name: 'CrossOver',
    img: COI,
    path: '/travel/UsedCars/CrossOver/',
    button: 'Shop Now',
  },
  {
    id: 5,
    name: 'MiniVan',
    img: MVI,
    path: '/travel/UsedCars/MiniVan/',
    button: 'Shop Now',
  },
];
// ----------------------------------------------------------------------
TravelLandingPage.getLayout = function getLayout(page) {
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
