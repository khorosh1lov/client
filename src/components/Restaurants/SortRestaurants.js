import React, { memo, useState } from 'react';

const SortRestaurants = memo(({ handleSort }) => {
	const [ratingOrder, setRatingOrder] = useState('desc');
	const [alphabetOrder, setAlphabetOrder] = useState('asc');

	const handleRatingSort = () => {
		const newRatingOrder = ratingOrder === 'asc' ? 'desc' : 'asc';
		setRatingOrder(newRatingOrder);
		handleSort('rating', newRatingOrder);
	};

	const handleAlphabetSort = () => {
		const newAlphabetOrder = alphabetOrder === 'asc' ? 'desc' : 'asc';
		setAlphabetOrder(newAlphabetOrder);
		handleSort('alphabet', newAlphabetOrder);
	};

	const ratingLabel = ratingOrder === 'asc' ? 'lowest first' : 'highest first';
	const alphabetLabel = alphabetOrder === 'asc' ? 'A to Z' : 'Z to A';

	return (
		<div className="d-flex">
			<div className="me-2">
				<button className="btn btn-outline-secondary" onClick={handleRatingSort}>
					{ratingLabel}
				</button>
			</div>
			<div>
				<button className="btn btn-outline-secondary" onClick={handleAlphabetSort}>
					{alphabetLabel}
				</button>
			</div>
		</div>
	);
});

export default SortRestaurants;
