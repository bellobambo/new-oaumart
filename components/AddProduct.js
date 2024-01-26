'use client'


import React from 'react';
// import Link from 'next/link'
import Lottie from 'lottie-react';
// import Wait from '../components/wait.json'

const AddProduct = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen mt-[-200px]">
            <form className=' text-black p-10 '>
                <div className='bg-white border-2 border-gray-400 p-10 flex flex-col '>
<h1 className='text-center'>Add Product </h1>
                    <label>Product Name:</label>
                    <input className='bg-white border-2 border-gray-400' type="text" />

                 
                    <label>Product Price:</label>
                    <input  className='bg-white border-2 border-gray-400' type="text" />

                 
                    <label>Phone Number:</label>
                    <input  className='bg-white border-2 border-gray-400' type="text" />


<button type='submit' >Add</button>

                 

                </div>
               

            </form>
        </div>
    );
};

export default AddProduct;
