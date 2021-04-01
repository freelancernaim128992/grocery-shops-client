import React from 'react';
import { Card } from 'react-bootstrap';
import img from '../../rice.png'

const Product = () => {
    return (
        <div className="col-md-4 mb-5">
            <Card style={{ width: '18rem' }} className="border-0 shadow">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-center">rice</Card.Title>
                    <div className="d-flex justify-content-around">
                        <h5 className="text-success">$265</h5>
                        <button className="btn btn-success">Buy Now</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;