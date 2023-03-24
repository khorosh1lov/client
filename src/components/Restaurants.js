import React, { useEffect, useState } from 'react';

import { API_BASE_URL } from '../config';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Restaurants = () => {
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		const fetchRestaurants = async () => {
			try {
				// It is Your Local Express Server for Now
				const response = await axios.get(`${API_BASE_URL}/restaurants`);
				setRestaurants(response.data);
			} catch (error) {
				console.error('Error fetching restaurants:', error);
			}
		};

		fetchRestaurants();
	}, []);

	return (
		<div>
			<h2>Restaurants</h2>
			{restaurants.map((restaurant) => (
				<div key={restaurant._id} className="card">
					<div className="card-body">
						<Link to={`/restaurants/${restaurant._id}`} className="card-title">
							<h4>{restaurant.name}</h4>
						</Link>
						<p className="card-text">
							<span>Cuisine: </span>
							{restaurant.cuisine} <br />
							<span>Address: </span>
							{restaurant.address.street}, {restaurant.address.city}, {restaurant.address.state}, {restaurant.address.zip}
						</p>
						<p className="card-text">Rating: {restaurant.rating}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Restaurants;
