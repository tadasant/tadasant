import { SFC } from 'react';
import * as React from 'react';

const Blog: SFC = () => {
  return (
    <div />
  );
};

export default Blog;


// Get cover-photos within each sub-blog component
//
// graphql`
//   query {
//       allFile(filter: {
//           relativeDirectory: {eq: "theres-a-human-on-the-other-side-of-your-code-review"},
//           name: {eq: "_cover-photo"}
//       }) {
//           edges {
//               node {
//                   name
//               }
//           }
//       }
//   }
// `
