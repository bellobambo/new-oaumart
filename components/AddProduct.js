'use client'


import React from 'react';
import Lottie from 'lottie-react';
import { useRouter } from "next/navigation";
import { useState } from 'react';

const AddProduct = () => {
    const [itemName, setItemName] = useState('');
    const [itemDesc, setItemDesc] = useState('');
    const [phone, setPhone] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [image, setImage] = useState(null);  // Use null as initial state for a File object
  
    const router = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!itemName || !phone || !itemPrice || !image) {
        alert('Item Name, Phone Number, and Item Price are required.');
        return;
      }
  
      try {
        const formData = new FormData();
        formData.append('itemName', itemName);
        formData.append('itemDesc', itemDesc);
        formData.append('phone', phone);
        formData.append('itemPrice', itemPrice);
        formData.append('image', image);
  
        const res = await fetch('http://localhost:3000/api/items', {
          method: 'POST',
          body: formData,
        });
  
        console.log(res);
  
        if (res.ok) {

            console.log('Data saved successfully:', {
                itemName,
                itemDesc,
                phone,
                itemPrice,
                image,
              });
          router.push('/');
        } else {
          throw new Error('Failed to Add Item');
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen mt-[-200px]">
        <form onSubmit={handleSubmit} className="text-black p-10">
          <div className="bg-white border-2 border-gray-400 p-10 flex flex-col">
            <h1 className="text-center">Add Product</h1>
            <label>Product Name:</label>
            <input
              onChange={(e) => setItemName(e.target.value)}
              value={itemName}
              className="bg-white border-2 border-gray-400"
              type="text"
            />
  
            <label>Product Price:</label>
            <input
              className="bg-white border-2 border-gray-400"
              onChange={(e) => setItemPrice(e.target.value)}
              value={itemPrice}
              type="number"
            />
  
            <label>Phone Number:</label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className="bg-white border-2 border-gray-400"
              type="text"
            />
  
            <label>Item Image:</label>
            <input
              onChange={(e) => setImage(e.target.files[0])}  // Use e.target.files[0] to get the File object
              className="bg-white border-2 border-gray-400"
              type="file"
            />
  
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AddProduct;