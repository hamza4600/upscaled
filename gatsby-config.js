// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        // token: process.env.SANITY_READ_TOKEN,
        token: "sksgYm8FP8rN9KiMFN6fTNmXAUNnJL4iPy8KGEvpKurKe913SFdcIdVYWtRhDghT8b5Z499hbfnbeQTS9YZIVcfssQw0j3GUgfAkF3pvlmHeQkfbKlIrvseeWTikZLjj8C5yg213L1eRNbU2CFUpCt5e4flrzAFlvLAGURJrHJ8TCBaapKo1",
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
  ],
};
