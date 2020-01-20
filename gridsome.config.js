// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const purgecss = require('@fullhuman/postcss-purgecss');
const tailwind = require('tailwindcss');
const postcssNested = require('postcss-nested')
const postcssPlugins = [tailwind(), postcssNested];
if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss());

module.exports = {
  siteName: 'The Foreign Architect',
  siteUrl: 'https://theforeignarchitect.com',
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Guide', // Required
        baseDir: './content/guides', // Where .md files are located
        pathPrefix: '/guides', // Add route prefix. Optional
        template: './src/templates/Guide.vue',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          series: {
            typeName: 'Series',
            create: true,
          },
        },
        plugins: [
          [
            'remark-toc',
            {
              heading: 'Buildings',
              maxDepth: 2,
            },
          ],
        ],
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post', // Required
        baseDir: './content/blog', // Where .md files are located
        pathPrefix: '/blog', // Add route prefix. Optional
        template: './src/templates/Post.vue',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
        plugins: [
          [
            'remark-toc',
            {
              heading: 'Buildings',
              maxDepth: 2,
            },
          ],
        ],
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'SinglePage', // Required
        baseDir: './content/pages', // Where .md files are located
        pathPrefix: '/', // Add route prefix. Optional
        template: './src/templates/SinglePage.vue',
        plugins: [
          [
            'remark-toc',
            {
              heading: 'Buildings',
              maxDepth: 2,
            },
          ],
        ],
      },
    },

    // {
    //   use: '@gridsome/plugin-sitemap',
    //   options: {
    //     cacheTime: 600000, // default

    //   },
    // },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-W6CV7LX',
        enabled: true,
        debug: false,
      },
    },
  ],
};
