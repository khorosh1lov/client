import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AddRestaurant from "./components/Admin/AddRestaurant";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import React from "react";
import Restaurant from "./components/Restaurants/Restaurant";
import Restaurants from "./components/Restaurants/Restaurants";
import SignInRoute from "./routes/SignInRoute";
import SignUpRoute from "./routes/SignUpRoute";
import UserMenuRoute from "./routes/UserMenuRoute";
import { CartProvider } from "./components/withCart";

function App() {
	const isAdmin = true; // Add Redux states here

  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/admin/*" element={<ProtectedRoute isAdmin={isAdmin} />}>
            <Route index element={<AdminDashboard />} />
            <Route path="add-restaurant" element={<AddRestaurant />} />
          </Route>
          <Route path="/" element={<Restaurants />} />
          <Route path="/:id" element={<Restaurant />} />
          <Route path="/login" element={<SignInRoute />} />
          <Route path="/signup" element={<SignUpRoute />} />
          <Route path="/user" element={<UserMenuRoute />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
