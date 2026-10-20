import PropTypes from 'prop-types';

// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// _data
// import { _testimonials, _jobsByCategories, _jobsByCompanies } from '../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, ErrorScreen, Image } from '../../../src/components';
// sections
import { styled } from '@mui/material/styles';
import { BusinessStrategies, TravelLandingFavoriteDestinations, TravelLandingHero, TravelLandingIntroduce } from '../../../src/sections/@travel';
//images
import Pageimage from '../../../src/sections/@travel/landing/pageimage';
import TravelLandingCars from '../../../src/sections/@travel/landing/TravelLandingCars';
import Categories from '../../../src/sections/@travel/accessories/categories';
import Galviston from '../../../src/assets/images/bentley8.jpg';
import Houston from '../../../src/assets/images/BMW3Series.jpg';
import Dallas from '../../../src/assets/images/FordMustang.jpg';
import Austin from '../../../src/assets/images/FordMinivan.jpg';
import HBI from '../../../src/assets/images/steering.png';
import SEI from '../../../src/assets/images/seat.png';
import SUVI from '../../../src/assets/images/light.png';
import COI from '../../../src/assets/images/lightning.png';
import MVI from '../../../src/assets/images/washing.png';
import used from '../../../src/assets/images/storelanding.jpg';
import gadget from '../../../src/assets/images/cargadget.jpg';
import interior from '../../../src/assets/images/carinterior.jpg';
import performance from '../../../src/assets/images/carperformance.jpg';
import care from '../../../src/assets/images/carcare.jpg';
import Loader from '../UsedCars/Loader';
import ChatButton from '../ChatButton';


const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 0),
  },
}));
// ----------------------------------------------------------------------
// Storelanding.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

export default function Storelanding() {
  // const [data, setData] = useState("");
  // setData('https://autobidup.pythonanywhere.com/store/all_products/')
  return (
    <Page title="Store | AutoBidUp">
      <Loader />

      <ChatButton />
      <Pageimage images={usedimage}/>
      {/* <TravelLandingIntroduceOurServices /> */}
      <Categories categories={vehicalType}/>
      <BusinessStrategies icons={summary} />

      <TravelLandingCars />
      
      <TravelLandingFavoriteDestinations tours={car.slice(0,4)}/>

    </Page>
  );
}

//-------------------------------------------------------------------------------
const bestcities = [
  {
    id: 1,
    name: 'Honda City',
    dis: '2019',
    price: 'Rs 3,000,000',
    img: Houston,
  },
  {
    id: 2,
    name: 'Crola Atlas',
    dis: '2020',
    price: 'Rs 3,000,000',
    img: Dallas,
  },
  {
    id: 3,
    name: 'Mehran',
    dis: '2016',
    price: 'Rs 3,000,000',

    img: Austin,
  },
  {
    id: 4,
    price: 'Rs 3,000,000',
    name: 'Jeep',
    dis: '2018',
    img: Galviston,
  },
  {
    id: 5,
    price: 'Rs 3,000,000',
    name: 'Honda City',
    dis: '2019',
    img: Houston,
  },
  {
    id: 6,
    price: 'Rs 3,000,000',
    name: 'Crola Atlas',
    dis: '2020',
    img: Dallas,
  },
  {
    id: 7,
    name: 'Mehran',
    price: 'Rs 3,000,000',
    dis: '2016',
    img: Austin,
  },
  {
    id: 8,
    name: 'Jeep',
    price: 'Rs 3,000,000',
    dis: '2018',
    img: Galviston,
  },
  {
    id: 9,
    name: 'Honda City',
    dis: '2019',
    price: 'Rs 3,000,000',
    img: Houston,
  },
  {
    id: 10,
    name: 'Crola Atlas',
    price: 'Rs 3,000,000',
    dis: '2020',
    img: Dallas,
  },
  {
    id: 11,
    price: 'Rs 3,000,000',
    name: 'Mehran',
    dis: '2016',
    img: Austin,
  },
  {
    id: 12,
    name: 'Jeep',
    price: 'Rs 3,000,000',
    dis: '2018',
    img: Galviston,
  },
];
const car = [
  {
    id: 1,
    name: 'Car Gadgets',
    img: gadget,
    button:"Shop Now"
  },
  {
    id: 2,
    name: 'Car Interior',
    img: interior,
    button:"Shop Now"
  },
  {
    id: 3,
    name: 'Car Performance',
    img: performance,
    button:"Shop Now"  },
  {
    id: 4,
    name: 'Car Care',
    img: care,
    button:"Shop Now"  },
];
const vehicalType = [
  {
    id: 1,
    name: 'Gadgets',
    img: HBI,
    path:'/travel/carRentals/Gadgets',
    button:"Shop Now"
  },
  {
    id: 2,
    name: 'Interior',
    img: SEI,
    path:'/travel/carRentals/Interior',
    button:"Shop Now"
  },
  {
    id: 3,
    name: 'Lights',
    img: SUVI,
    path:'/travel/carRentals/Lightning',
    button:"Shop Now"  },
  {
    id: 4,
    name: 'Performance',
    img: COI,
    path:'/travel/carRentals/Performance',
    button:"Shop Now"  },
  {
    id: 5,
    name: 'Car Care',
    img: MVI,
    path:'/travel/carRentals/carcare',
    button:"Shop Now"  },
];
const usedimage = [
  {
    image: used,
  },
];
const summary = [
  {
    title: 'Successful Shipping',
    description: 'Secure shipping all around Lahore within 3 days ',
    icon: 'fa-solid:shipping-fast',
  },
  {
    title: 'Customer Satisfaction',
    description: 'Customer satisfaction is number 1 priority',
    icon: 'fa6-solid:thumbs-up',
  },
  {
    title: 'Secure Payment',
    description: `Payment method is COD all around Lahore`,
    icon: 'gala:secure',
  },
];
// ----------------------------------------------------------------------

Storelanding.getLayout = function getLayout(page) {
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
