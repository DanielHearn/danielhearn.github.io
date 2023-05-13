import React from "react"
import PropTypes from "prop-types"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Search from "../components/search"

const SearchPage = ({
  data: {
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => {
  const siteTitle = title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <h1>Search</h1>
        <Search />
      </div>
    </Layout>
  )
}

SearchPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default SearchPage

export const Head = () => <Seo title="Search" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
