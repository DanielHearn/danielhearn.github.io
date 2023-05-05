import * as React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const hiddenTags = ["Board Games"]

const Tags = ({ tags }) => {
  return (
    <div className="tag-list">
      {tags
        ?.filter(tag => !hiddenTags.includes(tag))
        .map((tag, i) => (
          <div key={tag} className="tag">
            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
            {i !== tags.length - 1 && tags.length > 1 ? <span>,</span> : ""}
          </div>
        ))}
    </div>
  )
}

export default Tags
