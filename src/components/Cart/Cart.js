import React, {useEffect, useState} from 'react';
import {useCart} from "../withCart";
import {Offcanvas, Stack} from "react-bootstrap";
import CartItem from "./CartItem";
import Button from "react-bootstrap/Button";
import {Link, useNavigate} from "react-router-dom";


const Cart = ({isOpen}) => {

    const {closeCart, cartItems} = useCart();

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <h2>Shopping Cart</h2>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map((item, index) => (
                        <CartItem key={index} item={item} id={index}/>
                    ))}
                    <div>
                        <b>Total:</b>{' $'}{
                        cartItems.reduce((total, cartItem) => {
                            return total + (cartItem?.dish.price || 0) * cartItem.quantity
                        }, 0)
                    }

                    </div>
                    <div>
                        <a href="/checkout"  className="btn btn-warning" role="button">Checkout</a>
                    </div>

                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );

};

export default Cart;