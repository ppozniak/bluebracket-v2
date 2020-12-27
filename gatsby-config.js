module.exports = {
  siteMetadata: {
    title: "bluebracket",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-scss-typescript",
      options: {
        sassLoaderOptions: {
          includePaths: ["src/styles"],
          cssLoaderOptions: {
            camelCase: true,
          },
        },
      },
    },
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-96379415-2",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
