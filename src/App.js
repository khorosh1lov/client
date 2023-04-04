import './App.css';

import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AdminRoutes from './components/Admin/AdminRoutes';
import Header from './components/Header/Header';
import Restaurant from './components/Restaurants/Restaurant';
import Restaurants from './components/Restaurants/Restaurants';
import SignInRoute from './routes/SignInRoute';
import SignUpRoute from './routes/SignUpRoute';
import UserMenuRoute from './routes/UserMenuRoute';

function App() {
	const [isAdmin, setIsAdmin] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
		const role = localStorage.getItem('role');
		setIsLoggedIn(loggedIn);
		setIsAdmin(loggedIn && role === 'admin');
	}, []);

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/admin/*" element={<AdminRoutes isAdmin={isAdmin} />} />

				<Route path="/" element={<Restaurants />} />
				<Route path="/:id" element={<Restaurant />} />
				<Route path="/login" element={<SignInRoute />} />
				<Route path="/signup" element={<SignUpRoute />} />
				<Route path="/user" element={<UserMenuRoute />} />
				{/* Other routes */}
			</Routes>
		</Router>
	);
}

export default App;