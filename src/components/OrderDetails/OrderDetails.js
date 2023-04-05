import React, {useEffect, useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderDetails = () => {

    let orderId = '642a2e2d96c5157f84550443';
    let userId = '642a2e2c96c5157f8455043d';

    const[order, setOrder] = useState({})

    const getOrder = () => {
        axios.get('https://deliveryapp-sever.herokuapp.com/user/642a2e2c96c5157f8455043d/orders/642a2e2d96c5157f84550443')
            .then(res=>{
                console.log(res.data)
                setOrder(res.data)}
            ).catch(err =>
            console.log(err)
        )
    }
    useEffect(() => {
        getOrder()
    }, [])

    console.log("order:", order);
    return (
        <div className="App">
            <h2>Order Details</h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Restaurant</th>
                    <th scope="col">Dish</th>
                    <th scope="col">Price</th>
                </tr>
                </thead>
                {order.items.map(item=>
                    item.restaurant.dishes.map((el,index)=>
                        <tbody>

                        <tr key={el.index}>
                            <td>{item.restaurant.name}</td>
                            <td>{el.name}</td>
                            <td>{el.price}</td>
                        </tr>
                        </tbody>
                    ))
                }
                <tfoot>
                <tr>
                    <td><b>Total Price:</b></td>
                    <td><b>${order.totalPrice}</b></td>
                </tr>
                </tfoot>
            </table>
            <h5>Shipping Details</h5>
            <p>Delivery address: {`${order.deliveryAddress.street}, ${order.deliveryAddress.city}, 
            ${order.deliveryAddress.state}, ${order.deliveryAddress.zip}`}</p>
            <h5>Payment Details</h5>
            <p>Master Card : *7890</p>
        </div>
    );
}

export default OrderDetails;