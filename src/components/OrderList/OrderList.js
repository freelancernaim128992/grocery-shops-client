import React from 'react';

const OrderList = (props) => {
    const {name,photo,price,date,email,quantity,weight} = props.product;
    console.log(props.product)
    return (
        <>
            <div className="row border rounded mt-5">
                <div className="col-md-3 border rounded">
                    <img className="w-100" src={photo} alt=""/>
                </div>
                <div className="col-md-9 p-4">
                    <h3 className="text-warning">{name}</h3>
                    <h5 className="mt-3">Price: ${price}</h5>
                    <h5 className="mt-3">Email: {email}</h5>
                    <h5 className="mt-3">quantity: {quantity}</h5>
                    <h5 className="mt-3">weight: {weight}</h5>
                    <h5 className="mt-3">Date: {date}</h5>
                </div>
            </div>
        </>
    );
};

export default OrderList;