module.exports = {
  siteMetadata: {
    title: "Louisiana Game Developers"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-115444521-1"
      }
    }
  ]
};
