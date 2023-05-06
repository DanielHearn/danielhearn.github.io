import * as React from "react"

const ReviewResult = ({ game, review, conclusion }) => {
  return (
    <div className={`ReviewResult ReviewResult--${review.toLowerCase()}`}>
      {review.toUpperCase().replace(/_/g, " ")}: {conclusion}
    </div>
  )
}

export default ReviewResult
