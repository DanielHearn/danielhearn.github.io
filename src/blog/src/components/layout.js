import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ location, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
              summary
            }
            bggUrl
            siteUrl
          }
        }
      }
    `
  )

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const author = site.siteMetadata.author.name
  const siteUrl = site.siteMetadata.siteUrl
  const bggUrl = site.siteMetadata.bggUrl
  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <div>
          By <a href={siteUrl}>{author}</a>
        </div>
        <div>
          <a href={bggUrl}>BoardGameGeek</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
