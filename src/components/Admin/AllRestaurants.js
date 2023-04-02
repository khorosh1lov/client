import React, { useEffect, useState } from 'react';

import { API_BASE_URL } from '../../config';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AllRestaurants() {
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

  const handleDelete = async (id) => {
		try {
			await axios.delete(`${API_BASE_URL}/${id}`);
			setRestaurants(restaurants.filter((restaurant) => restaurant._id !== id));
		} catch (error) {
			console.error(`Error deleting restaurant with ID ${id}:`, error);
		}
  };

  return (
		<div>
			{restaurants.map((restaurant) => (
				<div key={restaurant._id} className="p-2 mb-3 border border rounded-2 d-flex justify-content-between align-content-center align-items-center">
					<div className="d-flex ">
						<Link to={`/${restaurant._id}`} target="_blank">
							{restaurant.name}
						</Link>
					</div>
					<div className="d-flex">
						<button className="btn btn-outline-danger" onClick={() => handleDelete(restaurant._id)}>
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
  );
}

export default AllRestaurants;