const config = {
  siteTitle: `Acasune's Portfolio`,
  siteTitleAlt: `Acasune's Portfolio`,
  siteHeadline: `Acasune's Portfolio made by gatsby.`,
  siteUrl: `https://acasune-portfolio.com`,
  siteDescription: `Acasune is a Japanese web developer. This website will be used not only for displaying my works but also for introduce my favorites.`,
  author: `@acasune`,
  siteLanguage: `ja`,
  author: `@acasune`,
  basePath: `/`,
};

module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: `acasune`,
        start_url: `/`,
        background_color: `#090909`,
        theme_color: `#090909`,
        display: `standalone`,
        icon: `src/images/acasune.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: "gatsby-remark-external-links",
      options: {
        target: "_self",
        rel: "noopener noreferer"
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
