import { graphql } from 'gatsby'
import React from 'react'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}/>
      </div>
    </div>
  )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`