import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AddRestaurant from './components/Admin/AddRestaurant';
import AdminDashboard from './components/Admin/AdminDashboard';
import Header from "./components/Header";
import ProtectedRoute from './components/ProtectedRoute';
import React from 'react';
import Restaurant from "./components/Restaurant";
import Restaurants from "./components/Restaurants";
import SignUpRoute from "./routes/SignUpRoute";
import UserMenuRoute from "./routes/UserMenuRoute";

//import SignInRoute from "./routes/SignInRoute";


//import AddDish from './components/Admin/AddDish';

function App() {
	const isAdmin = true; // Add Redux states here

	return (
		<Router>
			<Header />
			<main className="container">
				<Routes>
					<Route path="/admin/*" element={<ProtectedRoute isAdmin={isAdmin} />}>
						<Route index element={<AdminDashboard />} />
						<Route path="add-restaurant" element={<AddRestaurant />} />
					</Route>

					<Route path="/" element={<Restaurants />} />
					<Route path="/:id" element={<Restaurant />} />
					{/*<Route path="/auth/login" element={<SignInRoute />} />*/}
					<Route path="/signup" element={<SignUpRoute />} />
					<Route path="/usermenu" element={<UserMenuRoute />} />
				</Routes>
			</main>
		</Router>
	);
}


export default App;
