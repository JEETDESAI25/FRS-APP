/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
// import React from "react";

// function FoodCard({
//   name,
//   calories,
//   imageUrl,
//   ingredients,
//   price,
//   foodCategory,
// }) {
//   return (
//     <div className="food-card">
//       <img src={imageUrl} alt={name} className="food-image" />
//       <h2 className="food-title">{name}</h2>
//       <p className="food-description">
//         <strong>Calories:</strong> {calories}
//       </p>
//       <p className="food-description">
//         <strong>Ingredients:</strong> {ingredients}
//       </p>
//       <p className="food-description">
//         <strong>Price:</strong> ${price}
//       </p>
//       <p className="food-description">
//         <strong>Food Category:</strong> {foodCategory}
//       </p>
//     </div>
//   );
// }

// export default FoodCard;
// src/FoodCard.js
import { useState } from "react";
import "/Users/jd/Developer/FRS/FRS APP/src/styles/FoodCard.css";

function FoodCard({
  name,
  calories,
  imageUrl,
  ingredients,
  price,
  foodCategory,
}) {
  const [rating, setRating] = useState("");
  const [hoverRating, setHoverRating] = useState(0);

  function handleRatingChange(value) {
    setRating(value);
    setHoverRating(value);
  }

  return (
    <div className="food-card">
      <img className="food-image" src={imageUrl} alt={`${name}`} />
      <h2 className="food-title">{name}</h2>
      <p className="food-description">
        Calories: {calories} <br />
        Ingredients: {ingredients} <br />
        Price: ${price} <br />
        Category: {foodCategory}
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(`Rating for ${name}: ${rating}`);
          setRating("");
        }}
      >
        <label htmlFor={`rating-${name}`}>Rate this food:</label>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((starValue) => (
            <span
              key={starValue}
              className={`star${
                (hoverRating || rating) >= starValue ? " active" : ""
              }`}
              onClick={() => handleRatingChange(starValue)}
              onMouseOver={() => setHoverRating(starValue)}
            >
              &#9733;
            </span>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FoodCard;
