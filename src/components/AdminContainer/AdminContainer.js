import React from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import ManageProduct from '../ManageProduct/ManageProduct';

const AdminContainer = () => {
    return (
        <div className="row overflow-hidden m-0">
            <div className="col-md-2 pl-0">
                <AdminSideBar />
            </div>
            <div className="col-md-10">
                <ManageProduct />
            </div>
        </div>
    );
};

export default AdminContainer;