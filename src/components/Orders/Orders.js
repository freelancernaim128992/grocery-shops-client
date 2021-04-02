import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import OrderList from '../OrderList/OrderList';

const Orders = () => {
    const [orderedProduct, setOrderedProduct] = useState([]);
    const [userInfo,setUserInfo] = useContext(UserContext);
    useEffect(() => {
        const url = 'https://blooming-beach-54836.herokuapp.com/orderList?email='+userInfo.email;
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