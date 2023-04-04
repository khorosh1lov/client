import './AdminAppStats.css';

import React, { useEffect, useState } from 'react';

import { API_BASE_URL } from '../../../config';
import LineChart from '../Stats/LineChart';
import axios from 'axios';

const AdminAppStats = () => {
	const [totalRestaurants, setTotalRestaurants] = useState(0);
	const [chartData, setChartData] = useState({ data: [], labels: [] });

	const fillMissingDates = (data, numDays) => {
		const today = new Date();
		today.setHours(0, 0, 0, 0); // Set the time to the start of the day

		const startDate = new Date(today);
		startDate.setDate(startDate.getDate() - (numDays - 1)); // Set startDate to 9 days ago

		const filledData = [];

		for (let i = 0; i < numDays; i++) {
			const dateStr = `${startDate.getMonth() + 1}/${startDate.getDate()}/${startDate.getFullYear()}`;
			const found = data.find((item) => item.date === dateStr);

			if (found) {
				filledData.push(found);
			} else {
				filledData.push({ date: dateStr, total: 0 });
			}

			startDate.setDate(startDate.getDate() + 1);
		}

		return filledData;
	};



	useEffect(() => {
		const fetchRestaurants = async () => {
			try {
				const response = await axios.get(`${API_BASE_URL}/count`);
				setTotalRestaurants(response.data);

				const dailyDataResponse = await axios.get(`${API_BASE_URL}/dailyData`);
				const filledData = fillMissingDates(dailyDataResponse.data, 10);

				const data = filledData.map((item) => item.total);
				const labels = filledData.map((item) => item.date);
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
			<div className="total-chart">{chartData.data.length > 0 && chartData.labels.length > 0 ? <LineChart data={chartData.data} labels={chartData.labels} /> : <p>Loading chart data...</p>}</div>
		</div>
	);
};

export default AdminAppStats;