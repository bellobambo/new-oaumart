'use client'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Check from './Check.json'
import Lottie from 'lottie-react';
import { useRouter } from 'next/navigation';

export const Emailjs = () => {
    const form = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter(); 
    
    
    const sendEmail = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            const result = await emailjs.sendForm('service_7c1wrpi', 'template_s0jiftp', form.current, '-7jPGBadb99B_dGco');
            console.log(result.text);
            form.current.reset();
            setIsModalOpen(true);

            setTimeout(() => {
                setIsModalOpen(false);
                router.push('/'); // Navigate to the home page
            }, 4500);
        } catch (error) {
            setIsSubmitting(false);
            alert('Unable to Send Email. Try again later.');
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen mt-[-150px] text-black text-center ">

            <div className='flex flex-col'>
            <h1 className='font-bold text-[30px] text-white py-4'>Quick Survey</h1>
                <form
                    ref={form}
                    className="w-full max-w-md p-4 bg-white rounded-md shadow-md border-blue-400 border"
                    onSubmit={sendEmail}
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            What Level are You?
                        </label>
                        <input
                            className="appearance-none  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white border-2 border-blue-300"
                            placeholder='100,200,300...'
                            type="text"
                            name="user_name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Your Email:
                        </label>
                        <input
                            className="appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white border-2 border-blue-300"
                            type="email"
                            name="user_email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Whats Your Take on OAUmart and How Do you feel we can improve OAUmart?
                        </label>
                        <textarea
                            className="appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white border-2  border-blue-300"
                            name="message"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="btn btn-active btn-accent text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Send'}
                        </button>
                    </div>
                </form>
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-8 rounded-md shadow-md">
                            <div className='mb-4'>
                                <Lottie animationData={Check} />
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};