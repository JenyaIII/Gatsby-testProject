import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

// Static Query
// Used anywhere, doesn`t accept variable, can`t use context

// Page Query
// Must be used on pages

const PostLayout = () => {
  return (
    <Layout>
      <h1>Post Layout</h1>
    </Layout>
  );
};

export default PostLayout;

export const query = graphql`
  query PostQuery {
    markdownRemark(frontmatter: { slug: { eq: "/third-post" } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;
