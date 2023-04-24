import React, {useEffect, useState} from 'react';

const Cart = ({cartItems, setCartItems}) => {
 //   console.log('basket is', cartItems);
    const [totalPrice, setTotalPrice] = useState(0)
    const totalPrices = () => {
        let total = 0;
        cartItems.map(el =>
            (total += el.price * el.count))
        setTotalPrice(total)
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        totalPrices()
    })

    const plusCount = (id) => {
        setCartItems(cartItems.map(el => {
            if (el.id === id) {
                el.count++;
            }
            return el;
        }))
    }
    const minusCount = (id, count) => {
        if (count < 2) {
            removeProduct(id);
        } else {
            setCartItems(
                cartItems.map(el => {
                    if (el.id === id) {
                        el.count--;
                    }
                    return el
                })
            )
        }
    }
    const removeProduct = (id) => {
        setCartItems(cartItems.filter(el =>
            el.id !== id))
    }
    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length > 0 &&
                <table className="table">
                    <thead style={{border: "2px solid yellow"}}>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total Price</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map(el=>
                        <tr key={el.id}>
                            <th scope="row">{el.name}</th>
                            <td>{el.price}</td>
                            <td>
                                <button onClick={() => minusCount(el.id, el.count)}>-</button>
                                {el.count}
                                <button onClick={() => plusCount(el.id)}>+</button>

                            </td>
                            <td>{el.price * el.count}</td>
                            <td>
                                <button onClick={() => removeProduct(el.id)}>X</button>
                            </td>
                        </tr>

                    )}
                    <div className='total'>
                        <h3>Total order $ {totalPrice}</h3>
                    </div>
                    </tbody>
                </table>
            }
            <h2>Delivery address</h2>
            <h2>Payment details</h2>
        </div>
    );

};

export default Cart;