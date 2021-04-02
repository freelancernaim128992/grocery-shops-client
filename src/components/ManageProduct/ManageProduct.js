import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import ManageProductList from '../ManageProductList/ManageProductList';

const ManageProduct = () => {
    const [allProducts,setAllProducts] = useState([]);
    useEffect(() => {
        const url = 'https://blooming-beach-54836.herokuapp.com/product'
        fetch(url)
        .then(res => res.json())
        .then(data => setAllProducts(data))
    }, [])
    return (
        <div className="row overflow-hidden m-0">
            <div className="col-md-2 pl-0">
                <AdminSideBar />
            </div>
            <div className="col-md-10">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>weight</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProducts.map(pd => <ManageProductList productInfo={pd}></ManageProductList>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageProduct;