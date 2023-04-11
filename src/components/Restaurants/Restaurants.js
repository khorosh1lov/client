import React, { useEffect, useState } from "react";

import { API_BASE_URL } from '../../config';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Skeleton from './Skeleton/Skeleton';
import SortRestaurants from './SortRestaurants';
import StarRating from './StarRating';
import axios from 'axios';
import { useCart } from '../withCart';

const Restaurants = () => {
  const [loading, setLoading] = useState(true);
	const [restaurants, setRestaurants] = useState([]);
	const [sortType, setSortType] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');
	const [searchQuery, setSearchQuery] = useState('');
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();


  const handleSort = (type, order) => {
    setSortType(type);
    setSortOrder(order);
  };


	const handleSearch = (e) => {
		setSearchQuery(e.target.value);
	};

	useEffect(() => {
		const fetchRestaurants = async () => {
			try {
				const response = await axios.get(`${API_BASE_URL}`);
				setRestaurants(response.data);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching restaurants:', error);
			}
		};

    fetchRestaurants();
  }, []);

  const sortedRestaurants = restaurants.sort((a, b) => {
    let comparison = 0;

    if (sortType === "alphabet") {
      comparison = a.name.localeCompare(b.name);
    } else if (sortType === "rating") {
      comparison = a.rating - b.rating;
    }

    return sortOrder === "asc" ? comparison : -comparison;
  });

	const filteredRestaurants = sortedRestaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()));

	const featuredRestaurants = [];
	const otherRestaurants = [];

	filteredRestaurants.forEach((restaurant) => {
		if (featuredRestaurants.length < 4 && restaurant.rating === 5) {
			featuredRestaurants.push(restaurant);
		} else {
			otherRestaurants.push(restaurant);
		}
	});

	return (
		<div>
			<div className="container">
				<div className="d-flex gap-4 justify-content-left flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
					<div className="d-flex mt-4 mb-4">
						<h1 className="fw-bolder">Restaurants</h1>
					</div>
					<div className="input-group w-50">
						<input type="search" className="form-control" placeholder="Search..." value={searchQuery} onChange={handleSearch} />
					</div>
					<div className="btn-toolbar mb-2 mb-md-0">
						<SortRestaurants className="btn-group me-2" handleSort={handleSort} sortOrder={sortOrder} sortType={sortType} />
					</div>
				</div>
			</div>

			<div className="pt-4 pb-5 bg-light">
				<div className="container">
					<h2 className="mt-2 mb-4">Our the Best</h2>
					<div className="row">
						{loading
							? Array(2)
									.fill(null)
									.map((_, index) => <Skeleton key={index} />)
							: featuredRestaurants.map((restaurant) => (
									<div key={restaurant._id} className="col-lg-6 col-md-12">
										<div className="row g-0 border bg-white rounded-2 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
											<div className="col-md-7 col-sm-12 p-4 d-flex flex-column position-static">
												<Link to={`${restaurant._id}`} className="card-title text-success text-decoration-none">
													<h4 className="fw-bold">{restaurant.name}</h4>
												</Link>
												<p className="mb-4">
													<span className="fw-bold">Cuisine: </span>
													{restaurant.cuisine}
												</p>
												<div className="mb-4">
													<span className="fw-bold">Rating: </span> <StarRating rating={restaurant.rating} />
												</div>
												<Link to={`${restaurant._id}`} className="stretched-link text-decoration-none">
													Order here now!
												</Link>
											</div>
											<div className="col-md-5 col-sm-12 d-md-block">
												<img src={restaurant.logo} alt={`${restaurant.name} logo`} className="card-img-top" />
											</div>
										</div>
									</div>
							  ))}
					</div>
				</div>
			</div>

			<div className="pt-4 pb-4">
				<div className="container">
					<h2 className="mt-4 mb-4">More good places</h2>
					<div className="row">
						{loading
							? Array(4)
									.fill(null)
									.map((_, index) => <Skeleton key={index} />)
							: otherRestaurants.map((restaurant) => (
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
												<div className="card-text">
													Rating: <StarRating rating={restaurant.rating} />
												</div>
											</div>
										</div>
									</div>
							  ))}
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Restaurants;
