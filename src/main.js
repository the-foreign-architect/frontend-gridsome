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
  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: `Contemporary architecture city guides. Travel for architecture.`,
  });

  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: `Contemporary architecture city guides. Travel for architecture.`,
  });
  head.meta.push({ key: 'author', name: 'author', content: 'Daniel da Rocha' });
  head.meta.push({
    key: 'description',
    name: 'description',
    content: 'Contemporary architecture city guides. Travel for architecture.',
  });
  head.meta.push({ name: 'twitter:title', content: 'The Foreign Architect' });
  head.meta.push({ name: 'twitter:site', content: '@theforeignarch' });
  head.meta.push({ name: 'twitter:creator', content: '@danrocc' });
  head.meta.push({
    name: 'twitter:image',
    key: 'twitter:image',
    content: `${process.env.GRIDSOME_IMGIX_URL}the-foreign-architect.jpg`,
  });
  head.meta.push({
    name: 'og:image',
    key: 'og:image',
    content: `${process.env.GRIDSOME_IMGIX_URL}the-foreign-architect.jpg`,
  });
  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    });
    next();
  });
}
