import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import RecommendationTable from "../components/recommendationTable"
import ReviewResult from "../components/reviewResult"
import Tags from "../components/tags"

const BlogPostTemplate = ({
  data: { site, markdownRemark: post, relatedPosts, fields },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const tags = post.frontmatter.tags
  const title = post.frontmatter.title
  const date = post.frontmatter.date
  console.log(relatedPosts)

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
                  <li key={key}>
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
      {relatedPosts?.edges?.length > 0 && (
        <>
          <h3>Related Content</h3>
          <ol className="related-content" style={{ listStyle: `none` }}>
            {relatedPosts.edges
              .slice(0, 3)
              .map(post => post.node)
              .map(post => {
                const title = post.frontmatter.title || post.fields.slug
                return (
                  <li key={post.fields.slug} className="list-item">
                    <article
                      className="post-list-item"
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <div>
                        {post.frontmatter.thumbnail && (
                          <img
                            src={
                              post.frontmatter.thumbnail.childImageSharp.resize
                                .src
                            }
                            alt={`Cover of ${title}`}
                          />
                        )}
                      </div>
                      <div>
                        <header>
                          <h4>
                            <Link to={post.fields.slug} itemProp="url">
                              <span itemProp="headline">{title}</span>
                            </Link>
                          </h4>
                          <small>{post.frontmatter.date}</small>
                        </header>
                      </div>
                    </article>
                  </li>
                )
              })}
          </ol>
        </>
      )}
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
  query BlogPostBySlug($id: String!, $relatedPosts: [String!]!) {
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

      fields {
        slug
      }
    }
    relatedPosts: allMarkdownRemark(
      filter: { fields: { slug: { in: $relatedPosts } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            thumbnail {
              childImageSharp {
                resize(width: 200, height: 200) {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
