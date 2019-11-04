// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const purgecss = require('@fullhuman/postcss-purgecss');
const tailwind = require('tailwindcss');
const postcssPlugins = [tailwind()];
if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss());

module.exports = {
  siteName: 'The Foreign Architect',
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  plugins: [
    // {
    //   use: '@gridsome/source-graphql',
    //   options: {
    //     url: 'https://api.theforeignarchitect.com/graphql',
    //     fieldName: 'buildings',
    //     typeName: 'buildingType',

    //     /* headers: {
    //       Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    //     }, */
    //   },
    // },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Guide', // Required
        baseDir: './content/guides', // Where .md files are located
        pathPrefix: '/guides', // Add route prefix. Optional
        template: './src/templates/Guide.vue',
        //plugins: ['remark-toc'],
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Blog', // Required
        baseDir: './content/blog', // Where .md files are located
        pathPrefix: '/blog', // Add route prefix. Optional
        template: './src/templates/Blog.vue',
        //plugins: ['remark-toc'],
      },
    },


  ],
  transformers: {
    remark: {
      plugins: ['remark-toc'],
    },
  },
};
