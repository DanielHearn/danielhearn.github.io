import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const recentReviews = data.allMarkdownRemark.nodes.filter(post =>
    post.frontmatter?.tags?.includes("Review")
  )
  const recentNews = data.allMarkdownRemark.nodes.filter(
    post =>
      post.frontmatter?.tags?.includes("News") ||
      post.frontmatter?.tags?.includes("Opinion")
  )

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <h2>Reviews</h2>
      <div className="table table--collection table--2">
        <div>
          <h4>
            <Link to="/tags/highly-recommend/" itemProp="url">
              <span itemProp="headline">Highly Recommended</span>
            </Link>
          </h4>
        </div>
        <div>
          <h4>
            <Link to="/tags/recommend/" itemProp="url">
              <span itemProp="headline">Recommended</span>
            </Link>
          </h4>
        </div>
        <div>
          <h4>
            <Link to="/tags/pick-up-on-sale/" itemProp="url">
              <span itemProp="headline">Pick up on Sale</span>
            </Link>
          </h4>
        </div>
        <div>
          <h4>
            <Link to="/tags/print-and-play/" itemProp="url">
              <span itemProp="headline">Print and Play</span>
            </Link>
          </h4>
        </div>
        {/*<div>
          <h3>
            <Link to="/tags/do-not-recommend/" itemProp="url">
              <span itemProp="headline">Do Not Recommend</span>
            </Link>
          </h3>
        </div>*/}
      </div>
      <h2>Recent Reviews</h2>
      <ol style={{ listStyle: `none` }}>
        {recentReviews.slice(0, 5).map(post => {
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
      <h2>Recent News & Opinion</h2>
      <ol style={{ listStyle: `none` }}>
        {recentNews.slice(0, 3).map(post => {
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
      <div className="column-wrap">
        <div>
          <h2>Upcoming Reviews</h2>
          <ul>
            <li>Tussie Mussie (Solo)</li>
            <li>Skulls of Sedlec (Solo)</li>
            <li>Galdor's Grip (Solo)</li>
          </ul>
        </div>
        <div>
          <h2>Interested Games</h2>
          <ul>
            <li>Imperium: Horizons</li>
            <li>One Deck Galaxy</li>
            <li>Resist!</li>
          </ul>
        </div>
      </div>

      <h2>My Review Methodology</h2>
      <p>
        While I use a an x out of 10 review system on BoardGameGeek, here I
        instead classify games as: Highly Recommended, Recommended, Pick up on
        Sale, Do Not Recommend. I also print and play games so for games that I
        have printed I will not review the quality of the components other than
        the art.
      </p>
      <ul>
        <li>
          <b>Highly Recommended:</b> These are games I would recommend to nearly
          everyone regardless of price. Closest number rating would be 8-10/10.
        </li>
        <li>
          <b>Recommended:</b> These are games I would recommend buying once you
          are satisfied with the highly recommended games. This may include
          games that I think are good but slightly overpriced. Closest number
          rating would be 7-8/10.
        </li>
        <li>
          <b>Pick up on Sale:</b> These are games I would recommend picking up
          only on sale as they can be good experiences, but don't offer as good
          value or fun as recommended or highly recommended games. Closest
          number rating would be 6-7/10.
        </li>
        <li>
          <b>Do Not Recommend:</b> These are games I would not recommend
          regardless of price, due to unfun or broken gameplay. Closest number
          rating would be 0-6/10.
        </li>
      </ul>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          thumbnail {
            childImageSharp {
              resize(width: 100, height: 100) {
                src
              }
            }
          }
        }
      }
    }
  }
`
