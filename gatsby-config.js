module.exports = {
  siteMetadata: {
    title: 'react-hybris',
    description: 'Proof of concept that react is compatible with hybris.',
    author: 'Daniel Radezky',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@styles': 'src/styles',
          '@api': 'src/api',
          '@app': 'src',
        },
        extensions: [
          'js',
        ],
      }
    }
  ],
}
