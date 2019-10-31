// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import {
  format,
  differenceInCalendarYears,
  startOfToday,
  getYear,
} from 'date-fns';
import { enUS } from 'date-fns/locale';

require('typeface-merriweather');
require('typeface-poppins');
require('typeface-source-sans-pro');
import SocialSharing from 'vue-social-sharing';

import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/css/tailwind.css';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(SocialSharing);
  Vue.component('Layout', DefaultLayout);
  Vue.filter('formatDate', function(value, dateFormat = 'dd.MMM.yy') {
    if (value) {
      return format(new Date(String(value)), dateFormat, { enUS });
    }
  });
  /* head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/nyx7nxd.css',
  }); */
}
