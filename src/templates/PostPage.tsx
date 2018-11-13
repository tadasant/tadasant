import { graphql } from 'gatsby'
import * as React from 'react'
import { SFC } from 'react'
import { GetPostData } from '../typings/graphql'

interface IProps {
  data: GetPostData.Query
}

export const BLOG_QUERY = graphql`
    query GetPostData($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`

const PostPage: SFC<IProps> = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <div>
        <h1>{post ? post.frontmatter ? post.frontmatter.title : null : null}</h1>
      </div>
    </div>
  )
}

export default PostPage;
