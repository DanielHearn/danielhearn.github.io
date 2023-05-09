import * as React from "react"

const RecommendationTable = ({ pros, cons }) => {
  return (
    <div className="RecommendationTable">
      {pros?.length && (
        <div className="RecommendationTable__column RecommendationTable__column--left">
          <div className="RecommendationTable__header">Pros</div>
          <ul className="RecommendationTable__content">
            {pros.map((pro, i) => (
              <li key={i}>+ {pro}</li>
            ))}
          </ul>
        </div>
      )}
      {cons?.length && (
        <div className="RecommendationTable__column RecommendationTable__column--right">
          <div className="RecommendationTable__header">Cons</div>
          <ul className="RecommendationTable__content">
            {cons.map((con, i) => (
              <li key={i}>- {con}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default RecommendationTable
