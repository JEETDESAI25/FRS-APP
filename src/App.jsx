/* eslint-disable react/prop-types */
/* eslint-disable camelcase */

import './App.css';
import foodData from './Data';

function FoodCard({
  name, calories, imageUrl, ingredients, price, foodCategory,
}) {
  return (
    <div className="food-card">
      <img src={imageUrl} alt={name} className="food-image" />
      <h2 className="food-title">{name}</h2>
      <p className="food-description">
        <strong>Calories:</strong>
        {' '}
        {calories}
      </p>
      <p className="food-description">
        <strong>Ingredients:</strong>
        {' '}
        {ingredients}
      </p>
      <p className="food-description">
        <strong>Price:</strong>
        {' '}
        $
        {price}
      </p>
      <p className="food-description">
        <strong>Food Category:</strong>
        {' '}
        {foodCategory}
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1 className="header">Food Recommendations</h1>
      <div className="food-list">
        {foodData.map((food) => (
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
