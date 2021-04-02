import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';

const Header = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);
    const profileImageStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%'
    }
    return (
        <div className="container">
            <Navbar variant="light">
                <Navbar.Brand className="w-25" href="/"><b>Grocery Shops</b></Navbar.Brand>
                <Nav className="w-100 d-flex justify-content-end">
                    <Nav.Link className="text-dark mr-4" href="/home">Home</Nav.Link>
                    <Nav.Link className="text-dark mr-4" href="/orders">Orders</Nav.Link>
                    <Nav.Link className="text-dark mr-4" href="/admin/manageProduct">Admin</Nav.Link>
                    <Nav.Link className="text-dark mr-4" href="/deals">Deals</Nav.Link>
                    {userInfo.isSigned ? <img src={userInfo.photoURL} style={profileImageStyle} alt=""/> : 
                    <Nav.Link className="text-white bg-success rounded" href="/login">LogIn</Nav.Link>
                    }
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;