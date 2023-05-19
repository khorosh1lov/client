import './App.css';

import {Route, BrowserRouter as Router, Routes, BrowserRouter} from 'react-router-dom';

import AdminRoutes from './components/Admin/AdminRoutes';
import {CartProvider} from "./components/withCart";
import Header from "./components/Header/Header";
import React from "react";
import Restaurant from "./components/Restaurants/Restaurant";
import Restaurants from "./components/Restaurants/Restaurants";
import SignInRoute from "./routes/SignInRoute";
import SignUpRoute from "./routes/SignUpRoute";
import UserMenuRoute from "./routes/UserMenuRoute";
import Checkout from "./components/Cart/OrderSummary";
import OrderSummary from "./components/Cart/OrderSummary";
import Cart from "./components/Cart/Cart";

function App() {
    const isAdmin = true; // Add Redux states here

    return (
        <CartProvider>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/admin/*" element={<AdminRoutes isAdmin={isAdmin}/>}/>
                    <Route path="/" element={<Restaurants/>}/>
                    <Route path="/:id" element={<Restaurant/>}/>
                    <Route path="/login" element={<SignInRoute/>}/>
                    <Route path="/signup" element={<SignUpRoute/>}/>
                    <Route path="/user" element={<UserMenuRoute/>}/>
                    <Route path="/checkout" element={<OrderSummary/>}/>
                    {/* Other routes */}
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;
