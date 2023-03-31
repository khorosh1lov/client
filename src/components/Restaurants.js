import React, { useEffect, useState } from 'react';

import { API_BASE_URL } from '../config';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Restaurants = () => {
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		const fetchRestaurants = async () => {
			try {
				const response = await axios.get(`${API_BASE_URL}`);
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
			<div className="row">
				{restaurants.map((restaurant) => (
					<div key={restaurant._id} className="col-md-4">
						<div className="card mb-4">
							<img src={restaurant.logo} alt={`${restaurant.name} logo`} className="card-img-top" />
							<div className="card-body">
								<Link to={`${restaurant._id}`} className="card-title">
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
					</div>
				))}
			</div>
		</div>
	);
};

export default Restaurants;
