import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const AllProducts = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const url = 'https://blooming-beach-54836.herokuapp.com/product';
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <div className="container mt-5 pt-5 p-4">
            <div className="row">
                {
                    product.map(pd => <Product product={pd} key={pd._id}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;