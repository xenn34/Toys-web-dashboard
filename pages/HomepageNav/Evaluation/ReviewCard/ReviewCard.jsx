import React, { useState } from "react";
import "./ReviewCard.scss";

// Component ReviewCard sẽ giả lập dữ liệu đánh giá
const ReviewCard = () => {
  // Dữ liệu giả lập đánh giá
  const [reviews] = useState([
    { name: "Nguyễn Văn A", comment: "Sản phẩm rất tốt!", rating: 5 },
    { name: "Trần Thị B", comment: "Mình rất thích laptop này.", rating: 4 },
    {
      name: "Lê Văn C",
      comment: "Chất lượng tốt, giao hàng nhanh.",
      rating: 5,
    },
  ]);

  return (
    <div className="review-card-container">
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <h5 className="review-card__name">{review.name}</h5>
          <p className="review-card__comment">{review.comment}</p>
          <div className="review-card__rating">
            {"★".repeat(review.rating)} {"☆".repeat(5 - review.rating)}
            {/* Hiển thị xếp hạng sao */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
