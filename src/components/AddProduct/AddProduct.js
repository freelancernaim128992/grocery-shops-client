import axios from 'axios';
import React, { useState } from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const AddProduct = () => {
    const [imageUrl, setImageUrl] = useState(null);
    let displayLoadImage = false;
    const handleImage = (event) => {
        const imageData = new FormData();
        imageData.set('key', '97e094938ac70815786a7149e170c33d')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
            displayLoadImage = true;
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const handleSubmit = (event) => {
        const name = document.getElementById('name').value;
        const weight = document.getElementById('weight').value;
        const price = document.getElementById('price').value;
        const photo = imageUrl;
        const productData = {
            name: `${name}`,
            weight: `${weight}`,
            price: `${price}`,
            photo: `${photo}`
        }
        console.log(productData)
        const url = 'https://blooming-beach-54836.herokuapp.com/products';
        console.log(url)
        fetch(url,{
            method:'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(productData)
        })
        .then(res => console.log('data come'))
        .then(result => {
            console.log('data create successfully')
            console.log(productData)
        })
        event.preventDefault();
    }
    return (
        <div className="row overflow-hidden m-0">
            <div className="col-md-2 pl-0">
                <AdminSideBar />
            </div>
            <div className="col-md-10">
            <form onSubmit={handleSubmit}>
                <div className="bg-white p-4 m-4 w-50 shadow rounded">
                    <p>Product Name</p>
                    <input className="form-control" type="text" placeholder="Enter Name" id="name" />
                    <p>Weight</p>
                    <input className="form-control" type="text" placeholder="Enter weight" id="weight" />
                    <p>Product Price</p>
                    <input className="form-control" type="text" placeholder="product price" id="price" />
                    <p>Add product Photo</p>
                    <input type="file" name="" onChange={handleImage} id="photo"/>
                    {displayLoadImage && <p>Image Selected</p>}
                </div>
                <input type="submit" value="Save" className="btn btn-success"/>
            </form>
            </div>
        </div>
    );
};

export default AddProduct;