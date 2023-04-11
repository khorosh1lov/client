import "./Restaurants.css";

import React, { useEffect, useState } from "react";

import { API_BASE_URL } from '../../config';
import DishList from "../Dishes/DishList";
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Restaurant = () => {
	const [restaurant, setRestaurant] = useState(null);
	const [averageRating, setAverageRating] = useState(null);
	const [userRating, setUserRating] = useState(0);
	const { id } = useParams();

	const loggedInUserId = localStorage.getItem('userId');

	useEffect(() => {
		const fetchRestaurant = async () => {
			try {
				const response = await axios.get(`${API_BASE_URL}/${id}`);
				const fetchedRestaurant = response.data;
				setRestaurant(fetchedRestaurant);
				setAverageRating(calculateAverageRating(fetchedRestaurant.ratings));
			} catch (error) {
				console.error('Error fetching restaurant:', error);
			}
		};

		fetchRestaurant();
	}, [id]);
	
	const calculateAverageRating = (ratings) => {
		if (ratings.length === 0) return 0;
		const sum = ratings.reduce((total, ratingObj) => total + ratingObj.rating, 0);
		return sum / ratings.length;
	};

  if (!restaurant) {
    return <div>Loading...</div>;
  }

	const handleUserRatingChange = (newRating) => {
		setUserRating(newRating);
	};

	const submitRating = async (rating) => {
		try {
			const response = await axios.post(`${API_BASE_URL}/user/${loggedInUserId}/restaurant/${id}/rating/submit`, { rating });

			if (response.status === 200) {
				// Update the restaurant's average rating
				const newAverageRating = calculateAverageRating(response.data.ratings);
				setAverageRating(newAverageRating);
				alert('Rating submitted successfully');
			} else {
				alert('Error submitting rating');
			}
		} catch (error) {
			console.error('Error submitting rating:', error);
			alert('Error submitting rating');
		}
	};


	return (
		<div>
			<div className="container mt-4 mb-4">
				<div
					className="col-sm-12 shadow p-5 px-4 mb-4 rounded restaurant-bg"
					style={{
						backgroundImage: `url(${restaurant.headerImage})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}>
					<div className="col-12 mt-5 mb-5">
						<div className="mb-3">
							<Link to="/" className="nav-link fw-bold text-white" aria-current="page">
								&larr;&nbsp;back to all Restaurants
							</Link>
						</div>

						<h1 className="display-5 mb-3 fw-bold text-white">{restaurant.name}</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 col-sm-12">
						<div className="card">
							<div className="card-body">
								<h3 className="card-title">Information</h3>
								<div className="card-text">
									<p className="mb-2">
										<span className="fw-bold">Cuisine: </span>
										{restaurant.cuisine}
									</p>
									<p className="mb-2">
										<span className="fw-bold">Address: </span>
										{restaurant.address.street}, {restaurant.address.city}, {restaurant.address.state}, {restaurant.address.zip}
									</p>
									<p className="mb-2">
										<span className="fw-bold">Working Days: </span>
										{restaurant.workingDays.join(', ')}
									</p>
									<p className="mb-2">
										<span className="fw-bold">Working Hours: </span>
										{restaurant.workingHours.from} - {restaurant.workingHours.to}
									</p>
									<p className="mb-2">
										<span className="fw-bold">Phone: </span>
										{restaurant.contactInfo.phone}
									</p>
									<p className="mb-2">
										<span className="fw-bold">Email: </span>
										{restaurant.contactInfo.email}
									</p>
									<div className="mb-2">
										<span className="fw-bold">Average Rating: </span>
										<StarRating rating={averageRating} />
									</div>

									<div className="mb-2 d-flex gap-2 align-items-center">
										<span className="fw-bold">Your Rating: </span>
										<StarRating rating={userRating} interactive onRatingChange={handleUserRatingChange} />

										<button className="btn btn-sm btn-success" onClick={() => submitRating(userRating)}>
											Submit Rating
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
      
      		<DishList restaurant={restaurant} />
      
			<Footer />
		</div>
	);
};

export default Restaurant;
