import * as React from "react"

const ReviewResult = ({ game, review, conclusion }) => {
  return (
    <div
      className={`ReviewResult ReviewResult--${review
        .toLowerCase()
        .replace(/ /g, "_")}`}
    >
      <div className="ReviewResult__header">Verdict: {review}</div>
      <div className="ReviewResult__content">{conclusion}</div>
    </div>
  )
}

export default ReviewResult
