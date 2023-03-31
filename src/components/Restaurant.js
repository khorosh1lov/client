import React, { useEffect, useState } from 'react';

import { API_BASE_URL } from '../config';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Restaurant = () => {
	const [restaurant, setRestaurant] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchRestaurant = async () => {
			try {
				const response = await axios.get(`${API_BASE_URL}/${id}`);
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
			<h1 className="mt-4 mb-4">{restaurant.name}</h1>
			<img src={restaurant.headerImage} alt={`${restaurant.name} header`} className="img-fluid mb-3" />
			<div className="card">
				<div className="card-body">
					<h3 className="card-title">Information</h3>
					<p className="card-text">
						<span>Cuisine: </span>
						{restaurant.cuisine}
						<br />
						<span>Address: </span>
						{restaurant.address.street}, {restaurant.address.city}, {restaurant.address.state}, {restaurant.address.zip}
						<br />
						<span>Working Days: </span>
						{restaurant.workingDays.join(', ')}
						<br />
						<span>Working Hours: </span>
						{restaurant.workingHours.from} - {restaurant.workingHours.to}
						<br />
						<span>Phone: </span>
						{restaurant.contactInfo.phone}
						<br />
						<span>Email: </span>
						{restaurant.contactInfo.email}
					</p>
					<p className="card-text">Rating: {restaurant.rating}</p>
				</div>
			</div>

			<h2 className="mt-4">Dishes</h2>
			<div className="row mb-4">
				{restaurant.dishes.map((dish) => (
					<div key={dish._id} className="col-md-4">
						<div className="card mt-3">
							<img src={dish.image} alt={dish.name} className="card-img-top" />
							<div className="card-body">
								<h4 className="card-title">{dish.name}</h4>
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
