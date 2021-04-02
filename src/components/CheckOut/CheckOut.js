import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import Moment from "moment";
import Header from '../Header/Header';

const CheckOut = () => {
    const { id } = useParams();
    const history = useHistory();
    const [userInfo,setUserInfo] = useContext(UserContext);
    const [checkOutProduct, setCheckOutProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res => res. json())
        .then(data => setCheckOutProduct(data))
    }, [id])
    console.log(checkOutProduct)
    const handleOrder = () => {
        const email = userInfo.email;
        const date = Moment().format( "dddd h:mma D MMM YYYY" );
        const orderData = {...checkOutProduct}
        orderData.email = email;
        orderData.date = date;
        const url = 'http://localhost:5000/orders'
        fetch(url, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(orderData)
        })
        .then(res => res.json())
        .then(result => console.log(result))
        history.push('/');
    }
    return (
        <>
        <Header />
        <div className="container mt-5">
            <h1>Checkout</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{checkOutProduct.name}</td>
                        <td>{checkOutProduct.quantity}</td>
                        <td>$ {checkOutProduct.price}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Total</td>
                        <td>$ {checkOutProduct.price}</td>
                    </tr>
                </tbody>
            </Table>
            <button onClick={handleOrder} className="btn btn-success float-right">Checkout</button>
        </div>
        </>
    );
};

export default CheckOut;