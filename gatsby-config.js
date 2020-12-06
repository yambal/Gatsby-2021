module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
    authors: [
      { name: 'Tori', slug: 'tori' },
      { name: 'Neko', slug: 'neko' },
      { name: 'Inu', slug: 'inu' }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
          {
            resolve: 'gatsby-source-filesystem',
            options: {
              path: `${__dirname}/src/pages`,
              name: 'pages',
            },
          },      
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`
      }
    },
    `gatsby-plugin-styled-components`
  ]
}
