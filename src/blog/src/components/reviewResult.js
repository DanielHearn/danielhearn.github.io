import * as React from "react"

const reviewDescription = {
  HIGHLY_RECOMMENDED:
    "is a game I would highly recommend to nearly everyone regardless of price.",
  RECOMMENDED:
    "is a game I would recommend buying once you are satisfied with the highly recommended games.",
  PICK_UP_ON_SALE:
    "is a game I would recommend picking up only on sale as they can be good experiences, but don't offer as good value or fun as recommended or highly recommended games.",
  DO_NOT_RECOMMEND:
    "is a game I would not recommend regardless of price, due to unfun or broken gameplay.",
}

const ReviewResult = ({ game, review }) => {
  return (
    <div className={`ReviewResult ReviewResult--${review.toLowerCase()}`}>
      {review.toUpperCase().replace(/_/g, " ")}: {game}{" "}
      {reviewDescription[review.toUpperCase().replace(/ /g, "_")]}
    </div>
  )
}

export default ReviewResult
