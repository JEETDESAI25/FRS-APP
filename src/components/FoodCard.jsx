// import react from 'react';
// import PropTypes from 'prop-types';
// import '/Users/jd/Developer/FRS/FRS APP/src/styles/FoodCard.css';

// function FoodCard({
// 	name,
// 	calories,
// 	imageUrl,
// 	price,
// 	foodCategory,
// 	ingredients,
// }) {
// 	const [rating, setRating] = react.useState('');
// 	const [hoverRating, setHoverRating] = react.useState(0);

// 	function handleRatingChange(value) {
// 		setRating(value);
// 		setHoverRating(value);
// 	}

// 	return (
// 		<div className='food-card'>
// 			<img className='food-image' src={imageUrl} alt={`${name}`} />
// 			<h2 className='food-title'>{name}</h2>
// 			<p className='food-description'>
// 				Calories: {calories} <br />
// 				Ingredients: {ingredients} <br />
// 				Price: ${price} <br />
// 				Category: {foodCategory}
// 			</p>
// 			<form
// 				onSubmit={e => {
// 					e.preventDefault();
// 					console.log(`Rating for ${name}: ${rating}`);
// 					setRating('');
// 				}}
// 			>
// 				<label htmlFor={`rating-${name}`}>Rate this food:</label>
// 				<div className='star-rating'>
// 					{[1, 2, 3, 4, 5].map(starValue => (
// 						<span
// 							key={starValue}
// 							className={`star${
// 								(hoverRating || rating) >= starValue ? ' active' : ''
// 							}`}
// 							onClick={() => handleRatingChange(starValue)}
// 							onMouseOver={() => setHoverRating(starValue)}
// 						>
// 							&#9733;
// 						</span>
// 					))}
// 				</div>
// 				<button type='submit'>Submit</button>
// 			</form>
// 		</div>
// 	);
// }

// FoodCard.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	name: PropTypes.string.isRequired,
// 	calories: PropTypes.number.isRequired,
// 	imageUrl: PropTypes.string.isRequired,
// 	price: PropTypes.number.isRequired,
// 	foodCategory: PropTypes.string.isRequired,
// 	ingredients: PropTypes.string.isRequired,
// };

// export default FoodCard;
import react from 'react';
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
	return (
		<div className='food-card'>
			<img className='food-image' src={imageUrl} alt={`${name}`} />
			<h2 className='food-title'>{name}</h2>
			<p className='food-description'>
				Calories: {calories} <br />
				Ingredients: {ingredients} <br />
				Price: ${price} <br />
				Category: {foodCategory}
			</p>
			<button>Select</button>
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
