import React, { useEffect, useState } from "react";
import ReviewItem from "./ReviewItem";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://still-garden-76565.herokuapp.com/userReviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="">
      <h1 className="text-xl font-semibold text-center my-8">
        Customers Review
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        {reviews.map((item) => (
          <ReviewItem key={item.name} reviews={item} />
        ))}
      </div>
    </div>
  );
};

export default Review;
