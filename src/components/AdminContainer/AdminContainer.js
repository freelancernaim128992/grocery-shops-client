import React from 'react';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const AdminContainer = () => {
    return (
        <div className="row overflow-hidden m-0">
            <div className="col-md-2 pl-0">
                <AdminSideBar />
            </div>
            <div className="col-md-10">
                <AdminDashboard />
            </div>
        </div>
    );
};

export default AdminContainer;