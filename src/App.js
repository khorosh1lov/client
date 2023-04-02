import './styles/App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AdminRoutes from './components/Admin/AdminRoutes';
import Header from './components/Header/Header';
import React from 'react';
import Restaurant from './components/Restaurants/Restaurant';
import Restaurants from './components/Restaurants/Restaurants';
import SignInRoute from './routes/SignInRoute';
import SignUpRoute from './routes/SignUpRoute';
import UserMenuRoute from './routes/UserMenuRoute';

function App() {
	const isAdmin = true; // Add Redux states here

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/admin/*" element={<AdminRoutes isAdmin={isAdmin} />} />
				{/* Other routes */}
				<Route path="/" element={<Restaurants />} />
				<Route path="/:id" element={<Restaurant />} />
				<Route path="/login" element={<SignInRoute />} />
				<Route path="/signup" element={<SignUpRoute />} />
				<Route path="/user" element={<UserMenuRoute />} />
			</Routes>
		</Router>
	);
}

export default App;
