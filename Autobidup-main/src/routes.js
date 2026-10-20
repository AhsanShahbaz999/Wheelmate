// ----------------------------------------------------------------------
const Routes = {
  // Travel
  travel: {
    landing: '/travel/travelDuplicateCopy',
    tours: '/travel/tours',
    tour: (id) => `/travel/tours/${id}`,
    checkout: '/travel/checkout',
    checkoutComplete: '/travel/checkout/complete',
    posts: '/travel/blog',
    post: (slug) => `/travel/blog/${slug}`,
    about: '/travel/about-us',
    contact: '/travel/contact-us',
  },
  // Common
  loginCover: '/auth/login-cover',
  registerCover: '/auth/register-cover',
  page404: '/404',
  page500: '/500',
  // Others
  pages: '/pages',
  componentsUI: '/components-ui',
  componentUI: (slug) => `/components-ui/${slug}`,
  muiComponents: 'https://mui.com/components',
  docs: 'https://zone-docs.vercel.app',
  license: 'https://material-ui.com/store/license/#i-standard-license',
  minimalDashboard: 'https://material-ui.com/store/items/minimal-dashboard',
  buyNow: 'https://material-ui.com/store/items/zone-landing-page',
  figmaPreview:
    'https://www.figma.com/file/iAnp6x4J6YNvbVzdBnGM8P/%5BPreview%5D-Zone-Web?node-id=0%3A1',
};

export default Routes;
