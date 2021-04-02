import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {photo, name, weight, price, _id} = props.product;
    return (
        <div className="col-md-4 mb-5">
            <Card style={{ width: '18rem' }} className="border-0 shadow">
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title className="text-center">{name} - {weight}</Card.Title>
                    <div className="d-flex justify-content-around">
                        <h5 className="text-success">$ {price}</h5>
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-success">Buy Now</button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;