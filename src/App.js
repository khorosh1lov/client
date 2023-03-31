import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AddDish from './components/Admin/AddDish';
import AddRestaurant from './components/Admin/AddRestaurant';
import AdminDashboard from './components/Admin/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import React from 'react';
import Restaurant from './components/Restaurant';
import Restaurants from './components/Restaurants';

function App() {
  const isAdmin = true; // Add Redux states here

  return (
		<Router>
			<div className="bg-light p-5 mb-5 rounded">
				<Link className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none" to="/">
					<h1 className="fs-1">Delivery app - Front</h1>
				</Link>
			</div>
			<main className="container">
				<Routes>
					<Route path="/admin/*" element={<ProtectedRoute isAdmin={isAdmin} />}>
						<Route index element={<AdminDashboard />} />
						<Route path="add-restaurant" element={<AddRestaurant />} />
						<Route path="add-dish" element={<AddDish />} />
					</Route>
					<Route path="/" element={<Restaurants />} />
					<Route path="/:id" element={<Restaurant />} />
				</Routes>
			</main>
		</Router>
  );
}

export default App;
