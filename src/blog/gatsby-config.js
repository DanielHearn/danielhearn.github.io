const filterVisiblePosts = posts =>
  posts.filter(post => !post.frontmatter?.hidden)

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const siteUrl = `https://danielhearn.co.uk/blog`
module.exports = {
  siteMetadata: {
    title: `Gaming with Dan`,
    author: {
      name: `Daniel Hearn`,
      summary: `, I develop software and play board games.`,
    },
    description: `Board game reviews and opinion.`,
    siteUrl: `https://danielhearn.co.uk`,
    bggUrl: `https://boardgamegeek.com/user/Averkon`,
  },
  pathPrefix: `/blog`,
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
              backgroundColor: "transparent",
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return filterVisiblePosts(allMarkdownRemark.nodes).map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Gaming With Dan RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gaming with Dan`,
        short_name: `Gaming with Dan`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-json-output`,
      options: {
        siteUrl: siteUrl, // defined on top of plugins
        graphQLQuery: `
        {
          allMarkdownRemark(limit: 1000, filter: { frontmatter: { hidden: { eq: false } } } ) {
            edges {
              node {
                excerpt
                html
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                  date(formatString: "MMMM DD, YYYY")
                  updated_date(formatString: "MMMM DD, YYYY")
                  tags
                  thumbnail {
                    childImageSharp {
                      resize(width: 200, height: 200) {
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
      `,
        serialize: results =>
          results.data.allMarkdownRemark.edges.map(({ node }) => ({
            path: node.fields.slug, // MUST contain a path
            title: node.frontmatter.title,
            description: node.frontmatter.description,
            thumbnail: node.frontmatter.thumbnail,
            tags: node.frontmatter.tags,
            html: node.html,
            hidden: node.frontmatter.hidden,
          })),
        feedMeta: {
          favicon: `${siteUrl}/icons/icon-48x48.png`,
          title: "Gaming With Dan",
        },
        serializeFeed: results =>
          results.data.allMarkdownRemark.edges.map(({ node }) => ({
            id: node.fields.slug,
            url: siteUrl + node.fields.slug,
            title: node.frontmatter.title,
            description: node.frontmatter.description,
            thumbnail: node.frontmatter.thumbnail,
            tags: node.frontmatter.tags,
            hidden: node.frontmatter.hidden,
          })),
        feedFilename: "post_feed",
        nodesPerFeedFile: 10000,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-RFX31BT9CH"],
      },
    },
  ],
}
