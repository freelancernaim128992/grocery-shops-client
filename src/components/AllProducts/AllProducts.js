import React from 'react';
import Product from '../Product/Product';

const AllProducts = () => {
    return (
        <div className="container mt-5 pt-5 p-4">
            <div className="row">
                <Product />
            </div>
        </div>
    );
};

export default AllProducts;