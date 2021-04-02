import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import OrderList from '../OrderList/OrderList';

const Orders = () => {
    const [orderedProduct, setOrderedProduct] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/orderList';
        fetch(url)
        .then(res => res.json())
        .then(data => setOrderedProduct(data))
    }, [])
    return (
        <>
        <Header />
        <div className="container">
            <h1 className="text-center text-primary my-5">Your Latest Ordered Product </h1>
            {
                orderedProduct.map(pd => <OrderList product={pd}></OrderList>)
            }
        </div>
        </>
    );
};

export default Orders;