import { graphql } from 'gatsby'
import * as React from 'react'
import { SFC } from 'react'
import { GetBlogData } from '../typings/graphql'

interface IProps {
  data: GetBlogData.Query
}

export const BLOG_QUERY = graphql`
    query GetBlogData($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`

const BlogPost: SFC<IProps> = ({ data }) => {
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

export default BlogPost;