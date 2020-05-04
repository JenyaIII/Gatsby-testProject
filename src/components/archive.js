import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const Archive = () => {
  const data = useStaticQuery(graphql`
    query BlogPostArchive {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <aside>
        <h3>Archive</h3>
        {data.allMarkdownRemark.edges.map(item => (
          <li key={item.node.frontmatter.slug}>
            <Link to={`/posts/${item.node.frontmatter.slug}`}>
              {item.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </aside>
    </>
  );
};

export default Archive;
