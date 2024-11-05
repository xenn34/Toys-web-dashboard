// ReviewCard.js
import React from "react";
import "./ReviewCard.scss";

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <h5 className="review-card__name">{review.name}</h5>
      <p className="review-card__comment">{review.comment}</p>
      <div className="review-card__rating">
        {"★".repeat(review.rating)} {"☆".repeat(5 - review.rating)}{" "}
        {/* Hiển thị xếp hạng */}
      </div>
    </div>
  );
};

export default ReviewCard;
