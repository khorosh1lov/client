import React, { useEffect, useState } from 'react';

import { API_BASE_URL } from '../../../config';
import LineChart from '../Stats/LineChart';
import axios from 'axios';

const AdminAppStats = () => {
	const [totalRestaurants, setTotalRestaurants] = useState(0);
	const [chartData, setChartData] = useState({ data: [], labels: [] });

	useEffect(() => {
		const fetchRestaurants = async () => {
			try {
				const response = await axios.get(`${API_BASE_URL}/count`);
				setTotalRestaurants(response.data);

				// Replace the following line with the actual API request to fetch the data per day
				const dailyDataResponse = await axios.get(`${API_BASE_URL}/dailyData`);

				const data = dailyDataResponse.data.map((item) => item.total);
				const labels = dailyDataResponse.data.map((item) => item.date);
				setChartData({ data, labels });
			} catch (error) {
				console.error('Error fetching Total restaurants:', error);
			}
		};

		fetchRestaurants();
	}, []);

	return (
		<div className="statistic">
			<h2>Basic Statistic</h2>
			<p>Total Restaurants: {totalRestaurants}</p>
			{chartData.data.length > 0 && chartData.labels.length > 0 ? <LineChart data={chartData.data} labels={chartData.labels} /> : <p>Loading chart data...</p>}
		</div>
	);
};

export default AdminAppStats;