import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faStar as StarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as StarSolid } from '@fortawesome/free-solid-svg-icons';

function StarRating({ rating }) {
	const stars = [];

	// Display filled stars
	for (let i = 0; i < rating; i++) {
		stars.push(<FontAwesomeIcon icon={StarSolid} style={{ color: '#e4d321' }} key={`filled-${i}`} aria-hidden="true" />);
		
	}
	// Display empty stars
	for (let i = rating; i < 5; i++) {
		stars.push(<FontAwesomeIcon icon={StarRegular} style={{ color: '#e4de95' }} key={`empty-${i}`} aria-hidden="true" />);
	}
	
	return <div className="star-rating">{stars}</div>;
}

export default StarRating;
