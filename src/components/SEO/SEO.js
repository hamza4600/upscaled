import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

function SEO({ description, lang, meta, keywords, title, image, siteAuthor }) {
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      // titleTemplate={title}
      // meta={[
      //     {
      //         name: "description",
      //         content: description,
      //     },
      //     {
      //         property: "og:title",
      //         content: title,
      //     },
      //     {
      //         property: "og:description",
      //         content: description,
      //     },
      //     {
      //         property: "og:type",
      //         content: "website",
      //     },
      //     {
      //         property: "og:image",
      //         content: image,
      //     },
      //     {
      //         name: "twitter:card",
      //         content: "summary",
      //     },
      //     {
      //         name: "twitter:creator",
      //         content: siteAuthor,
      //     },
      //     {
      //         name: "twitter:title",
      //         content: title,
      //     },
      //     {
      //         name: "twitter:description",
      //         content: description,
      //     },
      // ]
      //     .concat(
      //         keywords && keywords.length > 0
      //             ? {
      //                   name: "keywords",
      //                   content: keywords.join(", "),
      //               }
      //             : []
      //     )
      //     .concat(meta)}
    >
      {/* import fonts from Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
