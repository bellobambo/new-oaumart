'use client'


import React from 'react';
import Link from 'next/link'
import Lottie from 'lottie-react';
import Wait from '../components/wait.json'

const AddProduct = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <div className='w-[300px] h-[300px]'>
                    <Lottie animationData={Wait} />
                </div>
                <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
                <p className="text-lg text-yellow-400">We are working on something amazing!</p>
                <Link className='text-yellow-400 mt-6' href='/'>Back</Link>
            </div>
        </div>
    );
};

export default AddProduct;
