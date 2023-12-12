import React from 'react'
import Marquee from "react-fast-marquee";

export default function News() {
    return (
        <Marquee className='m-3' pauseOnHover={true}>
            <div className="card w-96 bg-base-100 shadow-xl image-full m-3">
                {/* <figure><img src="/images.png" alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">ADS</h2>
                    <p>Sell your Products</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" disabled>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full m-3">
                {/* <figure><img src="/images.png" alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">ADS</h2>
                    <p>Sell your Products</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary " disabled>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full m-3">
                {/* <figure><img src="/images.png" alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">ADS</h2>
                    <p>Sell your Products</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary " disabled>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full m-3">
                {/* <figure><img src="/images.png" alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">ADS</h2>
                    <p>Sell your Products</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary " disabled>Buy Now</button>
                    </div>
                </div>
            </div>
        </Marquee>
    )
}
