/* eslint-disable react/prop-types */
/* eslint-disable camelcase */

import './App.css';
import foodData from './Data';

// const foodData = [
//   {
//     Name: 'Pizza',
//     Calories: 500,
//     Image_url: '',
//     Ingredients: 'cheese',
//     Price: 30,
//     'Food Category': 'Italian',
//     Id: 1,
//   },
//   {
//     Name: 'Pasta',
//     Calories: 590,
//     Image_url: '',
//     Ingredients: 'pasta',
//     Price: 20,
//     'Food Category': 'Italian',
//     Id: 2,
//   },
//   {
//     Name: 'Butter Chicken',
//     Calories: 800,
//     Image_url: '',
//     Ingredients: 'butter',
//     Price: 10,
//     'Food Category': 'Indian',
//     Id: 3,
//   },
//   {
//     Name: 'Burrito',
//     Calories: 700,
//     Image_url: '',
//     Ingredients: 'avocado',
//     Price: 14,
//     'Food Category': 'Mexican',
//     Id: 4,
//   },
//   {
//     Name: 'Chicken Bowl',
//     Calories: 890,
//     Image_url: '',
//     Ingredients: 'beans',
//     Price: 12,
//     'Food Category': 'Mexican',
//     Id: 5,
//   },
//   {
//     Name: 'Afghani Chicken',
//     Calories: 790,
//     Image_url: '',
//     Ingredients: 'chicken',
//     Price: 14,
//     'Food Category': 'Indian',
//     Id: 6,
//   },
//   {
//     Name: 'Sushi',
//     Calories: 670,
//     Image_url: '',
//     Ingredients: 'fish',
//     Price: 22,
//     'Food Category': 'Japanese',
//     Id: 7,
//   },
//   {
//     Name: 'Hamburger',
//     Calories: 980,
//     Image_url: '',
//     Ingredients: 'Pork',
//     Price: 13,
//     'Food Category': 'Burger',
//     Id: 8,
//   },
//   {
//     Name: 'Chicken Sandwich ',
//     Calories: 800,
//     Image_url: '',
//     Ingredients: 'chicken',
//     Price: 16,
//     'Food Category': 'Burger',
//     Id: 9,
//   },
// ];

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
