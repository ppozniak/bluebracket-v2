const path = require("path");
require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "bluebracket",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src/assets"),
        components: path.join(__dirname, "src/components"),
        pages: path.join(__dirname, "src/pages"),
        styles: path.join(__dirname, "src/styles"),
        type: path.join(__dirname, "src/types"),
      },
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        icon: true, // @TODO: Make it only for icomoon folder.
      },
    },
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
        icon: "src/assets/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
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
