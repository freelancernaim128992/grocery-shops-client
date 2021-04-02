import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const AllProducts = () => {
    const [product, setProduct] = useState([]);
    let displaySpinner;
    useEffect(() => {
        const url = 'https://blooming-beach-54836.herokuapp.com/product';
        displaySpinner = true;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    displaySpinner = false;
    return (
        <div className="container mt-5 pt-5 p-4">
            <div className="d-flex justify-content-center"> 
                {displaySpinner && <Spinner animation="border" />}
            </div>
            <div className="row">
                {
                    product.map(pd => <Product product={pd} key={pd._id}></Product>)
                }
                
            </div>
        </div>
    );
};

export default AllProducts;