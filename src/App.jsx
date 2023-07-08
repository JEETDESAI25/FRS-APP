import React from 'react';
import { useState } from 'react';
import './App.css';
import foodData from './Data';
import FoodCard from './components/FoodCard';
import '/Users/jd/Developer/FRS/FRS APP/src/assets/bgImage.jpg';

function App() {
	const [selectedCategory, setSelectedCategory] = useState('All');

	function handleCategoryChange(event) {
		setSelectedCategory(event.target.value);
	}

	return (
		<div className='app'>
			<div className='banner'>
				<h1 className='header'>Coco Food Recommender</h1>
				<p>
					Trust Coco to deliver personalized food recommendations tailored to
					your unique tastes and preferences!
				</p>
			</div>
			<div className='category-container'>
				<label htmlFor='category-selector' className='category-label'>
					Select Your Desired Meal:{' '}
				</label>
				<select
					name='category'
					id='category-selector'
					value={selectedCategory}
					onChange={handleCategoryChange}
					className='category-selector'
				>
					<option value='All'>All</option>
					<option value='Italian'>Italian</option>
					<option value='Indian'>Indian</option>
					<option value='Mexican'>Mexican</option>
					<option value='Japanese'>Japanese</option>
					<option value='Burger'>Burger</option>
				</select>
			</div>
			<div className='food-list'>
				{foodData
					.filter(
						food =>
							selectedCategory === 'All' ||
							food.FoodCategory === selectedCategory
					)
					.map(food => (
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
			<footer className='app-footer'>
				<p>© 2023 Coco Food Recommender. All rights reserved.</p>
			</footer>
		</div>
	);
}

export default App;
