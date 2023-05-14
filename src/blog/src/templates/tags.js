import React from "react"
import PropTypes from "prop-types"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"
import { filterVisiblePosts } from "../utilities"

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark

  return (
    <Layout location={location} title={tag}>
      <Bio />
      <div>
        <h2>{tag}</h2>
        <ol style={{ listStyle: `none` }}>
          {filterVisiblePosts(edges.map(edge => edge.node)).map(post => {
            const { slug } = post.fields
            const { title } = post.frontmatter
            return (
              <li key={slug} className="list-item">
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <div>
                    {post.frontmatter.thumbnail && (
                      <img
                        src={
                          post.frontmatter.thumbnail.childImageSharp.resize.src
                        }
                        alt={`Cover of ${title}`}
                      />
                    )}
                  </div>
                  <div>
                    <header>
                      <h2>
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h2>
                      <small>{post.frontmatter.date}</small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </div>
                </article>
              </li>
            )
          })}
        </ol>
        <Link to="/">Back home</Link>
      </div>
    </Layout>
  )
}

export const Head = ({ pageContext, data }) => {
  return (
    <Seo
      title={pageContext.tag}
      description={`All posts for the tag ${pageContext.tag}`}
    />
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                resize(width: 100, height: 100) {
                  src
                }
              }
            }
            hidden
          }
        }
      }
    }
  }
`
