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
import VueDisqus from 'vue-disqus';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faPinterest,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowLeft,
  faArrowRight,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faGithub,
  faTwitter,
  faLinkedin,
  faPinterest,
  faInstagram
);

import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/css/tailwind.css';

import VueMasonry from 'vue-masonry-css';
import SeriesNavigation from '~/components/SeriesNavigation';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(SocialSharing);
  Vue.use(VueMasonry);
  Vue.use(VueDisqus);
  Vue.component('font-awesome', FontAwesomeIcon);
  Vue.component('series-navigation', SeriesNavigation);
  Vue.component('Layout', DefaultLayout);
  Vue.filter('formatDate', function(value, dateFormat = 'dd.MMM.yy') {
    if (value) {
      return format(new Date(String(value)), dateFormat, { enUS });
    }
  });

}
