import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import '/Users/jd/Developer/FRS/FRS APP/src/styles/FoodCard.css';

function FoodCard({
	name,
	calories,
	imageUrl,
	price,
	foodCategory,
	ingredients,
}) {
	const [isSelected, setIsSelected] = useState(false);

	const handleSelect = () => {
		setIsSelected(!isSelected);
	};

	return (
		<div className={`food-card ${isSelected ? 'selected' : ''}`}>
			<img className='food-image' src={imageUrl} alt={`${name}`} />
			<h2 className='food-title'>{name}</h2>
			<p className='food-description'>
				Calories: {calories} <br />
				Ingredients: {ingredients} <br />
				Price: ${price} <br />
				Category: {foodCategory}
			</p>
			<button onClick={handleSelect}>
				{isSelected ? 'Deselect' : 'Select'}
			</button>
		</div>
	);
}

FoodCard.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	calories: PropTypes.number.isRequired,
	imageUrl: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	foodCategory: PropTypes.string.isRequired,
	ingredients: PropTypes.string.isRequired,
};

export default FoodCard;
