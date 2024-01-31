import React from 'react'
import Link from 'next/link'
import Marquee from "react-fast-marquee";

export default function News() {
    return (
        <Marquee className='m-3 gap-6 flex' pauseOnHover={true}>
        <Link href='https://wa.me/8060408546' target="_blank"   className="card w-60 bg-base-100 shadow-xl image-full mr-20">
            <figure><img src="/6ix1.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Desire Prints</h2>
            </div>
        </Link>
    
        <Link href='https://wa.me/8060408546' target="_blank"   className="card w-60 bg-base-100 shadow-xl image-full mr-20">
            <figure><img src="/6ix1.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Desire Prints</h2>
            </div>
        </Link>
    
        <Link href='https://wa.me/8060408546'  target="_blank"  className="card w-60 bg-base-100 shadow-xl image-full mr-20">
            <figure><img src="/6ix1.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Desire Prints</h2>
            </div>
        </Link>

        <Link href='https://wa.me/8060408546'target="_blank"   className="card w-60 bg-base-100 shadow-xl image-full mr-20">
            <figure><img src="/6ix1.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Desire Prints</h2>
            </div>
        </Link>

        <Link href='https://wa.me/8060408546' target="_blank"   className="card w-60 bg-base-100 shadow-xl image-full mr-20">
            <figure><img src="/6ix1.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Desire Prints</h2>
            </div>
        </Link>
    </Marquee>
    
    )
}
