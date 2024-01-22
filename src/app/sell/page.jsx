'use client'

import Link from 'next/link'
import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react'
import { PaystackButton } from 'react-paystack'
import toast, { Toaster } from 'react-hot-toast';

export default function page() {



    const router = useRouter()

    const { status, data: session } = useSession();

    const publicKey = 'pk_test_6b3fd973a0a596ad9e6d951d1fa0bb437276f457';

    const amount = 150000

    const email = session?.user?.email || 'bello@gmail.com';
    const name = session?.user?.name || 'bambo';


    const month = {
        email,
        amount,
        metadata: {
            name,
        },
        publicKey,
        text: "Select",
        onSuccess: () => {
            useEffect(() => {
                toast('Subscription Successful✓.', {
                    style: {
                        background: '#bee0ff',
                        color: '#000',
                    },
                    
                    position: 'top-right',
                });
            })

            setTimeout(() => {
                router.push('/additem');
            }, 2000);
        },
        onClose: () => alert("Wait! Don't leave :("),
    }
    const year = {

        email,

        amount: 600000,

        metadata: {

            name,


        },

        publicKey,

        text: "Select",

        onSuccess: () => {
            useEffect(() => {
                toast('Subscription Successful✓.', {
                    style: {
                        background: '#bee0ff',
                        color: '#000',
                    },
                    
                    position: 'top-right',
                });
            })

            setTimeout(() => {
                router.push('/additem');
            }, 2000);
        },



        onClose: () => alert("Wait! Don't leave :("),

    }
    const life = {

        email,

        amount: 2300000,

        metadata: {

            name,


        },

        publicKey,

        text: "Select",

        onSuccess: () => {
            useEffect(() => {
                toast('Subscription Successful✓.', {
                    style: {
                        background: '#bee0ff',
                        color: '#000',
                    },
                    
                    position: 'top-right',
                });
            })

            setTimeout(() => {
                router.push('/additem');
            }, 2000);
        },



        onClose: () => alert("Wait! Don't leave :("),

    }



    const [isSignInButtonDisabled, setIsSignInButtonDisabled] = useState(false);

    const handleSignIn = async () => {

        setIsSignInButtonDisabled(true);

        await signIn('google');

        setIsSignInButtonDisabled(false);
    };



    return (


        <>

            <div className='flex justify-end mx-5 gap-2'>
                <button className="btn">
                    ADS
                    <div className="badge">₦300/Post/Day</div>
                </button>
                <Link className='btn btn-accent' href='https://wa.me/message/2EU7DKQNESR5K1'>Bargain </Link>

            </div>


            <div className='sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 p-5 md:gap-4  justify-center flex-col flex items-center gap-4 mb-[200px] mx-auto '>

                <div className="card w-full bg-base-100 shadow-xl border-2 border-slate-700 h-fit min-h-[20rem]">
                    <figure className="px-10 pt-10">

                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Free Offer</h2>
                        <p> Free</p>
                        <p> Upload Your Product on OAUmart for the span of a week</p>
                        <div className="card-actions">
                            <Link className='btn btn-accent' href='https://wa.me/message/2EU7DKQNESR5K1' target="_blank">Select </Link>

                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl border-2 border-slate-700 h-fit min-h-[20rem]">
                    <figure className="px-10 pt-10">

                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Monthly Offer</h2>
                        <p> ₦1,500</p>
                        <p> Upload Your Product on OAUmart for the span of a month</p>
                        <div className="card-actions">
                            {status === 'authenticated' ? (
                                <PaystackButton className="btn btn-active btn-accent my-3" {...month} />
                            ) : (
                                <button
                                    className="btn btn-active btn-accent my-3"
                                    onClick={handleSignIn}
                                    disabled={isSignInButtonDisabled}
                                >
                                    {isSignInButtonDisabled ? 'Signing In...' : 'Sign In'}
                                </button>
                            )}

                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl border-2 border-slate-700 h-fit min-h-[20rem]">
                    <figure className="px-10 pt-10">

                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Yearly Offer</h2>
                        <p> ₦6,000</p>
                        <p> Upload Your Product on OAUmart for the span of a year</p>
                        <div className="card-actions">
                            {status === 'authenticated' ? (
                                <PaystackButton className="btn btn-active btn-accent my-3" {...year} />
                            ) : (
                                <button
                                    className="btn btn-active btn-accent my-3"
                                    onClick={handleSignIn}
                                    disabled={isSignInButtonDisabled}
                                >
                                    {isSignInButtonDisabled ? 'Signing In...' : 'Sign In'}
                                </button>
                            )}

                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl border-2 border-slate-700 h-fit min-h-[20rem]">
                    <figure className="px-10 pt-10">

                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">LifeTime Offer</h2>
                        <p>₦23,000</p>
                        <p> Upload Your Product on OAUmart </p>
                        <div className="card-actions">

                            {status === 'authenticated' ? (
                                <PaystackButton className="btn btn-active btn-accent my-3" {...life} />

                            ) : (
                                <button
                                    className="btn btn-active btn-accent my-3"
                                    onClick={handleSignIn}
                                    disabled={isSignInButtonDisabled}
                                >
                                    {isSignInButtonDisabled ? 'Signing In...' : 'Sign In'}
                                </button>
                            )}



                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
