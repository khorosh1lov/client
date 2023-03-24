import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

const Restaurant = () => {
	const [restaurant, setRestaurant] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchRestaurant = async () => {
			try {
				const response = await axios.get(`http://localhost:2200/restaurants/${id}`); // замените match.params.id на id
				setRestaurant(response.data);
			} catch (error) {
				console.error('Error fetching restaurant:', error);
			}
		};

		fetchRestaurant();
	}, [id]);

	if (!restaurant) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h2>{restaurant.name}</h2>
			<div className="card">
				<div className="card-body">
					<h4 className="card-title">Information</h4>
					<p className="card-text">
						<span>Cuisine: </span>
						{restaurant.cuisine}
						<br />
						<span>Address: </span>
						{restaurant.address.street}, {restaurant.address.city}, {restaurant.address.state}, {restaurant.address.zip}
					</p>
					<p className="card-text">Rating: {restaurant.rating}</p>
				</div>
			</div>

			<h3 className="mt-4">Dishes</h3>
			<div className="row">
				{restaurant.dishes.map((dish) => (
					<div key={dish._id} className="col-md-4">
						<div className="card mt-3">
							<div className="card-body">
								<h5 className="card-title">{dish.name}</h5>
								<p className="card-text">
									<span>Price: </span>${dish.price}
									<br />
									<span>Description: </span>
									{dish.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Restaurant;
