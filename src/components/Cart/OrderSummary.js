import React, { useContext, useState } from 'react';
import { CartContext } from '../withCart';
import CartItem from "./CartItem";
import signInForm from "../auth/SignInForm";
import {Link} from "react-router-dom";

const Checkout = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const [deliveryInfo, setDeliveryInfo] = useState({
        name: '',
        address: '',
        phone: '',
    });
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userName = localStorage.getItem('userName');

    const handleInputChange = (e) => {
        setDeliveryInfo((prevInfo) => ({
            ...prevInfo,
            [e.target.name]: e.target.value,
        }));
    };

   // Here goes PlaceOrderButton function
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the order and clear the cart
        console.log('Order submitted:', deliveryInfo);
        clearCart();
    };
    if (isLoggedIn) {
    return (
        <div className="container mt-5">
            <h2>Checkout</h2>
            <div className="row">

                <div className="col-md-6">
                    <h4>Account Information</h4>
                    <p>Hello, {userName}!</p>
                    <p>Some information</p>
                    <h4>Delivery Information</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={deliveryInfo.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Address:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                value={deliveryInfo.address}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                value={deliveryInfo.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <h3>Payment Details</h3>
                        <div className="mb-3">
                            <label className="form-label">Payment Method:</label>
                            <input type="text" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-warning">
                            Submit Order
                        </button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h3>Order Summary</h3>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                            {cartItems.map((item, index)=> (
                                <CartItem key={index} item={item} id={index}/>
                            ))}
                            <div>
                                <b>Total:</b>{' $'}{
                                cartItems.reduce((total, cartItem) => {
                                    return total + (cartItem?.dish.price || 0)* cartItem.quantity
                                }, 0)
                            }
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
    } else {
        return (
            <div className="container mt-5">
                <h2>Checkout</h2>
                {' '}
                <div className="row">

                    <div className="col-md-6">
                        <h4>Account Information</h4>
                        <div className="btn-group" role="group">
                            <Link type="button" className="btn btn-outline-warning" to="/login">
                                Log In
                            </Link>
                            <Link type="button" className="btn btn-outline-warning" to="/signup">
                                Sign Up
                            </Link>
                            {" "}
                        </div>
                        <h4>Delivery Information</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={deliveryInfo.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={deliveryInfo.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={deliveryInfo.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <h4>Payment Details</h4>
                            <div className="mb-3">
                                <label className="form-label">Payment Method:</label>
                                <input type="text" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-warning">
                                Submit Order
                            </button>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <h4>Order Summary</h4>
                        {cartItems.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <>
                                {cartItems.map((item, index)=> (
                                    <CartItem key={index} item={item} id={index}/>
                                ))}
                                <div>
                                    <b>Total:</b>{' $'}{
                                    cartItems.reduce((total, cartItem) => {
                                        return total + (cartItem?.dish.price || 0)* cartItem.quantity
                                    }, 0)
                                }
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    }
};

export default Checkout;