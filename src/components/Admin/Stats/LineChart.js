import { CategoryScale, Chart, LineController, LineElement, LinearScale, PointElement } from 'chart.js';
import React, { useEffect, useRef } from 'react';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

const LineChart = ({ data, labels }) => {
	const chartRef = useRef();

	useEffect(() => {
		if (chartRef.current) {
			const chart = new Chart(chartRef.current, {
				type: 'line',
				data: {
					labels,
					datasets: [
						{
							label: 'Total Restaurants',
							data,
							backgroundColor: 'rgba(75, 192, 192, 0.2)',
							borderColor: 'rgba(75, 192, 192, 1)',
							borderWidth: 1,
						},
					],
				},
				options: {
					scales: {
						y: {
							beginAtZero: true,
						},
					},
				},
			});

			return () => {
				chart.destroy();
			};
		}
	}, [data, labels]);

	return <canvas ref={chartRef} />;
};

export default LineChart;
