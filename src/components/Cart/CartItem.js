import React from 'react';
import {useCart} from "../withCart";
import {Stack} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import BinIcon from "./delete.svg";


const CartItem = ({item, id}) => {
    const{removeFromCart, increaseItemQuantity, decreaseItemQuantity} = useCart();

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.dish.image} style={{width: "150px", height: "75px", objectFit: "cover"}}/>
            <div className={"me-auto"}>
                <div>{item.dish.name}{" "}
                    {item.quantity > 1 &&(
                        <span className="text-muted" style={{fontSize: ".5rem"}}>x{item.quantity}</span>

                    )}</div>
                <div className="text-muted" style={{fontSize: ".7rem"}}>${item.dish.price}</div>
                <div>${item.dish.price * item.quantity}</div>
                <Button onClick={()=>removeFromCart(id)} variant="outline-warning" size="xl">
                    <img src={BinIcon} style={{width: "15px"}}/>
                </Button>
                <Button onClick={()=>decreaseItemQuantity(id)} variant="outline-warning" size="xl">
                    -
                </Button>
                {item.quantity}
                <Button onClick={()=>increaseItemQuantity(id)} variant="outline-warning" size="xl">
                    +
                </Button>
            </div>
        </Stack>
    );
};

export default CartItem;