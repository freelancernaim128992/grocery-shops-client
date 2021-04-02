import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import deleteImg from '../../image/Group 33150.png';
import updateImg from '../../image/Group 307.png'

const ManageProduct = () => {
    const [allProducts,setAllProducts] = useState([]);
    useEffect(() => {
        const url = 'https://blooming-beach-54836.herokuapp.com/product'
        fetch(url)
        .then(res => res.json())
        .then(data => setAllProducts(data))
    }, [])
    const handleDelete = () => {
        const id = allProducts.map(pd => console.log(pd._id))
        console.log(id)
        // const url = `https://blooming-beach-54836.herokuapp.com/delete/${}`
    }
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
                            allProducts.map(pd => 
                            <tr>
                                <td>{pd.name}</td>
                                <td>{pd.weight}</td>
                                <td>{pd.price}</td>
                                <td>
                                    <img className="mr-2" style={{width: '30px'}} src={updateImg} alt="" />
                                    <img onClick={handleDelete} style={{width: '30px'}} src={deleteImg} alt="" />
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageProduct;