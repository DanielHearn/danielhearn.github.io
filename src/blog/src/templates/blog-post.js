import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import RecommendationTable from "../components/recommendationTable"
import ReviewResult from "../components/reviewResult"
import Tags from "../components/tags"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const tags = post.frontmatter.tags
  const title = post.frontmatter.title
  const date = post.frontmatter.date

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{title}</h1>
          <p>{date}</p>
          {tags?.length && <Tags tags={tags} />}
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        {post.frontmatter.pros?.length && (
          <RecommendationTable
            pros={post.frontmatter.pros}
            cons={post.frontmatter.cons}
          />
        )}
        {post.frontmatter.review && (
          <ReviewResult
            game={post.frontmatter.title}
            review={post.frontmatter.review}
            conclusion={post.frontmatter.conclusion}
          />
        )}
        {post.frontmatter.buy_links && (
          <>
            <h4>Available to Buy At</h4>{" "}
            <ul>
              {Object.keys(post.frontmatter.buy_links).map(key => {
                const parts = post.frontmatter.buy_links[key].split(": ")
                return (
                  <li>
                    {parts[0]}: <a href={parts[1]}>{parts[1]}</a>
                  </li>
                )
              })}
            </ul>
          </>
        )}
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        pros
        cons
        review
        buy_links
        conclusion
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
