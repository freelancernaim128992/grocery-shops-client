import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
    return (
        <div style={{backgroundColor: '#150761',height: '825px',fontSize: '20px'}} className="pl-0 text-white">
            <ul className="list-unstyled p-5">
                <Link to="/manageProduct" className="text-white">
                    <li style={{cursor: 'pointer'}} className="pb-3">Manage Product</li>
                </Link>
                <Link to="/addProduct" className="text-white">
                    <li style={{cursor: 'pointer'}} className="pb-3">Add Product</li>
                </Link>
                <li style={{cursor: 'pointer'}} className="pb-3">Edit Product</li>
            </ul>
        </div>
    );
};

export default AdminSideBar;