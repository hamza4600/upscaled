import React, { useEffect } from "react";
import { navigate } from "gatsby";
import SEO from "../components/SEO/SEO";

const IndexPage = (props) => {
  console.log("props", props);
  // const { data, errors } = props

  // if (errors) {
  //   return (
  //     <Layout>
  //       <GraphQLErrorList errors={errors} />
  //     </Layout>
  //   )
  // }

  // const site = (data || {}).site

  // if (!site) {
  //   throw new Error(
  //     'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
  //   )
  // }

  useEffect(() => {
    navigate("/collection");
  }, []);

  return (
    <>
      <SEO
        title="Home Page"
        description={"Home Page"}
        lang={"en"}
        keywords={["hama"]}
      />
    </>
  );
};

export default IndexPage;
