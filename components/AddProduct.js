'use client'


import React from 'react';
import Lottie from 'lottie-react';
import { useRouter } from "next/navigation";
import { useState } from 'react';


const AddProduct = () => {
    
        const [itemName, setItemName] = useState("");
        const [itemDesc, setItemDesc] = useState("");
        const [phone, setPhone] = useState("");
        const [itemPrice, setItemPrice] = useState("");
        const [image, setImage] = useState("");
      
        const router = useRouter();
      
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          if (!itemName || !phone || !itemPrice || !image ) {
            alert("Item Name, Phone Number and Item Price are required.");
            return;
          }
      
          try {
            const res = await fetch("http://localhost:3000/api/items", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({ itemName, phone, itemPrice, itemDesc, image }),
            });
      
            console.log(res);


            if (res.ok) {
              router.push("/");
            } else {
              throw new Error("Failed to Add Item");
            }
          } catch (error) {
            console.log(error);
          } a
        };
    return (
        <div className="flex flex-col items-center justify-center h-screen mt-[-200px]">
            <form   onSubmit={handleSubmit} className=' text-black p-10 '>
                <div className='bg-white border-2 border-gray-400 p-10 flex flex-col '>
                    <h1 className='text-center'>Add Product </h1>
                    <label>Product Name:</label>
                    <input 
                        onChange={(e) => setItemName(e.target.value)}
                        value={itemName}
                    className='bg-white border-2 border-gray-400' type="text" />


                    <label>Product Price:</label>
                    <input className='bg-white border-2 border-gray-400' 
                     onChange={(e) => setItemPrice(e.target.value)}
                     value={itemPrice}
                    type="number" />


                    <label>Phone Number:</label>
                    <input 
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    className='bg-white border-2 border-gray-400' type="text" />

                    <label>Item Image:</label>
                    <input 
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                    className='bg-white border-2 border-gray-400' type="file" />


                    <button type='submit' >Add</button>



                </div>


            </form>
        </div>
    );
};

export default AddProduct;
