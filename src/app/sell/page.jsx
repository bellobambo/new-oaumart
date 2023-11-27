import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className='grid grid-cols-1  gap-4 mx-10  md:flex md:justify-between'>
            <div className="card w-96 bg-base-100 shadow-xl border-2 border-slate-700">
                <figure className="px-10 pt-10">

                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Monthly Offer</h2>
                    <p> ₦1,500</p>
                    <p> Upload Your Product on OAU Market² for the span of a month</p>
                    <div className="card-actions">
                    <Link className="btn btn-outline" href='https://wa.me/message/2EU7DKQNESR5K1' target="_blank">
                            Select Offer </Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl border-2 border-slate-700">
                <figure className="px-10 pt-10">

                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Yearly Offer</h2>
                    <p> ₦6,000</p>
                    <p> Upload Your Product on OAU Market² for the span of a year</p>
                    <div className="card-actions">
                    <Link className="btn btn-outline" href='https://wa.me/message/2EU7DKQNESR5K1' target="_blank">
                            Select Offer </Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl border-2 border-slate-700">
                <figure className="px-10 pt-10">

                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">LifeTime Offer</h2>
                    <p>₦23,000</p>
                    <p> Upload Your Product on OAUMarket² </p>
                    <div className="card-actions">
                        <Link className="btn btn-outline" href='https://wa.me/message/2EU7DKQNESR5K1' target="_blank">
                            Select Offer </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
