import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <button>
      <a href="/">Go Home</a>
    </button>
  </>
);

export default NotFoundPage;
