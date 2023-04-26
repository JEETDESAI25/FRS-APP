/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useState } from "react";
import "./App.css";
import foodData from "./Data";

function FoodCard({
  name,
  calories,
  imageUrl,
  ingredients,
  price,
  foodCategory,
}) {
  return (
    <div className="food-card">
      <img src={imageUrl} alt={name} className="food-image" />
      <h2 className="food-title">{name}</h2>
      <p className="food-description">
        <strong>Calories:</strong> {calories}
      </p>
      <p className="food-description">
        <strong>Ingredients:</strong> {ingredients}
      </p>
      <p className="food-description">
        <strong>Price:</strong> ${price}
      </p>
      <p className="food-description">
        <strong>Food Category:</strong> {foodCategory}
      </p>
    </div>
  );
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="app">
      <h1 className="header">Food Recommendations</h1>
      <label htmlFor="category-selector" className="category-label">
        Select Food Category:{" "}
      </label>
      <select
        name="category"
        id="category-selector"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="category-selector"
      >
        <option value="All">All</option>
        <option value="Italian">Italian</option>
        <option value="Indian">Indian</option>
        <option value="Mexican">Mexican</option>
        <option value="Japanese">Japanese</option>
        <option value="Burger">Burger</option>
      </select>
      <div className="food-list">
        {foodData
          .filter(
            (food) =>
              selectedCategory === "All" ||
              food.FoodCategory === selectedCategory
          )
          .map((food) => (
            <FoodCard
              key={food.Id}
              name={food.Name}
              calories={food.Calories}
              imageUrl={food.Image_url}
              ingredients={food.Ingredients}
              price={food.Price}
              foodCategory={food.FoodCategory}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
