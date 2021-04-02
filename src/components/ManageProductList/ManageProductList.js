import React from 'react';
import deleteImg from '../../image/Group 33150.png';
import updateImg from '../../image/Group 307.png'

const ManageProductList = (props) => {
    const {name,price,weight,_id} = props.productInfo;
    const handleDelete = (event) => {
        const url = `https://blooming-beach-54836.herokuapp.com/delete/${_id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                event.target.parentNode.style.display = 'none';
            }
        })
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{weight}</td>
            <td>${price}</td>
            <td>
                <img className="mr-2" style={{width: '30px',cursor: 'pointer'}} src={updateImg} alt="" />
                <img onClick={handleDelete} style={{width: '30px',cursor: 'pointer'}} src={deleteImg} alt="" />
            </td>
        </tr>
    );
};

export default ManageProductList;