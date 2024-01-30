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

      const res = await fetch('https://www.oaumart.com/api/items', {
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
      <h1 className=" text-center my-4 text-[40px] font-semibold mt-4">Add Product</h1>

      <form onSubmit={handleSubmit}  class="max-w-md mx-auto text-[40px]">
        <div class="relative z-0 w-full mb-5 group">
          <input type="text"    onChange={(e) => setItemName(e.target.value)} name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-yellow-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none dark:text-white dark:border-yellow-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
          <label for="name" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-[30px]">Product Name</label>
        </div>
    
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input type="number" onChange={(e) => setItemPrice(e.target.value)} name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-yellow-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none dark:text-white dark:border-yellow-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Price</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input onChange={(e) => setPhone(e.target.value)} type="number" name="phone" id="phone" class="block py-2.5 px-0 w-full text-sm text-yellow-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none dark:text-white dark:border-yellow-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
            <label for="phone" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input onChange={(e) => setItemDesc(e.target.value)} type="text" name="desc" id="desc" class="block py-2.5 px-0 w-full text-sm text-yellow-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none dark:text-white dark:border-yellow-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " />
            <label for="desc" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Description</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input onChange={(e) => setImage(e.target.files[0])} type="file" name="file" id="file" class="block py-2.5 px-0 w-full text-sm text-yellow-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none dark:text-white dark:border-yellow-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer " placeholder=" " required />
            <label for="file" class="peer-focus:font-medium absolute text-sm text dark:text duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text peer-focus:dark:text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Image</label>
          </div>
        </div>
        <button className='btn btn-outline btn-accent' type="submit">Add</button>

      </form>


    </div>
  );
};

export default AddProduct;