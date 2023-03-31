import { Link } from 'react-router-dom';
import React from 'react';

const AdminDashboard = () => {
	return (
		<div>
			<h1>Admin Dashboard</h1>
			<Link to="/admin/add-restaurant">Add a new restaurant</Link>
			<Link to="/admin/add-dish">Add a new dish</Link>
		</div>
	);
};

export default AdminDashboard;
