/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { Link } from "gatsby"

const Bio = () => {
  return (
    <div className="nav">
      <div>
        <h4>
          <Link to="/" itemProp="url">
            <span>Home</span>
          </Link>
        </h4>
      </div>
      <div>
        <h4>
          <Link to="/tags/review/" itemProp="url">
            <span>Reviews</span>
          </Link>
        </h4>
      </div>
      <div>
        <h4>
          <Link to="/tags/opinion/" itemProp="url">
            <span>Opinion</span>
          </Link>
        </h4>
      </div>
      <div>
        <h4>
          <Link to="/search/" itemProp="url">
            <span>Search</span>
          </Link>
        </h4>
      </div>
    </div>
  )
}

export default Bio
