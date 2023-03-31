import React, { useEffect, useState } from 'react';

import { API_BASE_URL } from '../config';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
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

	const featuredRestaurants = restaurants.slice(0, 4);
	const otherRestaurants = restaurants.slice(4);

	return (
		<div>
			<h1 className="mt-4 mb-4 fw-bolder">Restaurants</h1>
			<div className="p-4 mb-4 bg-light rounded-2">
				<div className="row">
					<h2 className="mt-2 mb-4">Our the Best</h2>
					{featuredRestaurants.map((restaurant) => (
						<div key={restaurant._id} className="col-lg-6 col-md-12">
							<div class="row g-0 border bg-white rounded-2 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
								<div class="col-md-7 col-sm-12 p-4 d-flex flex-column position-static">
									{/* <strong class="d-inline-block mb-2 text-success">Design</strong> */}
									<Link to={`${restaurant._id}`} className="card-title text-success text-decoration-none">
										<h4 className="fw-bold">{restaurant.name}</h4>
									</Link>
									<p class="mb-4">
										<span className="fw-bold">Cuisine: </span>
										{restaurant.cuisine}
									</p>
									<p className="mb-4">
										<span className="fw-bold">Rating: </span> <StarRating rating={restaurant.rating} />
									</p>
									<Link to={`${restaurant._id}`} className="stretched-link text-decoration-none">
										Order here now!
									</Link>
								</div>
								<div class="col-md-5 col-sm-12 d-md-block">
									<img src={restaurant.logo} alt={`${restaurant.name} logo`} className="card-img-top" />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Render other restaurants in the card layout */}
			<div className="row mb-4">
				<h2 className="mt-4 mb-4">More good places</h2>
				{otherRestaurants.map((restaurant) => (
					<div key={restaurant._id} className="col-md-4">
						<div className="card mb-4 shadow-sm">
							<Link to={`${restaurant._id}`}>
								<img src={restaurant.logo} alt={`${restaurant.name} logo`} className="card-img-top" />
							</Link>
							<div className="card-body">
								<Link to={`${restaurant._id}`} className="card-title text-success text-decoration-none">
									<h4 className="fw-bold">{restaurant.name}</h4>
								</Link>
								<p className="card-text">
									<span className="fw-bold">Cuisine: </span>
									{restaurant.cuisine} <br />
									<span className="fw-bold">Address: </span>
									{restaurant.address.street}, {restaurant.address.city}, {restaurant.address.state}, {restaurant.address.zip}
								</p>
								<p className="card-text">
									Rating: <StarRating rating={restaurant.rating} />
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Restaurants;
