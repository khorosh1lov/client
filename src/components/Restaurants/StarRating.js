import React from 'react';

function StarRating({ rating }) {
	const stars = [];

	// Display filled stars
	for (let i = 0; i < rating; i++) {
		stars.push(<i key={`filled-${i}`} className="fa fa-star" style={{ color: '#e4d321' }} aria-hidden="true"></i>);
	}
	// Display empty stars
	for (let i = rating; i < 5; i++) {
		stars.push(<i key={`empty-${i}`} className="fa fa-star-o" style={{ color: '#e4de95' }} aria-hidden="true"></i>);
	}

	return <div className="star-rating">{stars}</div>;
}

export default StarRating;
