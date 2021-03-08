module.exports = {
  siteMetadata: {
    title: 'Hello // I\'m Lilia',
    author: 'Lilia Qian',
    description: 'Welcome to Lilia Qian\'s Portfolio Website',
    url: 'https://liliaqian.com',
    image: '/src/assets/home.png',
    keywords: 'lilia qian blog art about',
    twitterUsername: '@liliayqian',
  },

  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
          extensions: [`.mdx`, `.md`],
      },
    },
    
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/art/`
      }
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false
            } 
          }
        ]
      }
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/icon.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-offline`,
  ],
}
