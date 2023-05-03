import * as React from "react"

const RecommendationTable = ({ pros, cons }) => {
  return (
    <div className="RecommendationTable">
      <div className="RecommendationTable__column RecommendationTable__column--left">
        <div className="RecommendationTable__header">Pros</div>
        <ul className="RecommendationTable__content">
          {pros.map(pro => (
            <li>+ {pro}</li>
          ))}
        </ul>
      </div>
      <div className="RecommendationTable__column RecommendationTable__column--right">
        <div className="RecommendationTable__header">Cons</div>
        <ul className="RecommendationTable__content">
          {cons.map(con => (
            <li>- {con}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RecommendationTable
