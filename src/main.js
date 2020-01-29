// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import {
  format
} from 'date-fns';
import { enUS } from 'date-fns/locale';

//require('typeface-merriweather');
require('typeface-poppins');
require('typeface-source-sans-pro');
require('typeface-cookie');
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
  faFacebook
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
  faInstagram,
  faFacebook
);

import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/css/tailwind.css';

import VueMasonry from 'vue-masonry-css';
import SeriesNavigation from '~/components/SeriesNavigation';
import * as VueGoogleMaps from "vue2-google-maps";


export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(SocialSharing);
  Vue.use(VueMasonry);
  Vue.use(VueDisqus);
  Vue.use(VueGoogleMaps, {
    load: {
      key: process.env.GRIDSOME_GOOGLE_API_KEY,
    },
    installComponents: false
  });
  Vue.component('font-awesome', FontAwesomeIcon);
  Vue.component('series-navigation', SeriesNavigation);
  Vue.component('Layout', DefaultLayout);
  Vue.filter('formatDate', function(value, dateFormat = 'dd.MMM.yy') {
    if (value) {
      return format(new Date(String(value)), dateFormat, { enUS });
    }
  });
  // Add a meta tag
  head.meta.push({
    name: 'google-site-verification',
    content: 'hVDv5JzvYipaM6TqMePoqKROGa7nNbX-oi5A8yzwoxY'
  });

}


