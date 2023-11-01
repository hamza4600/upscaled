import React, { useEffect } from "react";
import { graphql, navigate } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/SEO/SEO";
import LayoutContainer from "../containers/layout";
import { ThemeContext } from "../styles/themeContext";

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
    <LayoutContainer>
      <SEO
        title="Home Page"
        description={"Home Page"}
        lang={"en"}
        keywords={["hama"]}
      />
    </LayoutContainer>
  );
};

export default IndexPage;
