'use client'

import Link from 'next/link'
import { signOut, useSession } from "next-auth/react";
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function page() {

    const { status } = useSession();

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
                            <Link href='https://wa.link/0xzlj7' className="btn btn-active btn-accent my-3" >
                                Select Offer </Link>
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
                                <button className="btn btn-active btn-accent my-3" disabled>
                                    Select Offer
                                </button>
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
                                <button className="btn btn-active btn-accent my-3" disabled>
                                    Select Offer
                                </button>
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
                                <button className="btn btn-active btn-accent my-3" disabled>
                                    Select Offer
                                </button>
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
