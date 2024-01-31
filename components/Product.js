import Link from "next/link";
import React, { Suspense } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Skeleton from "./Skeleton";
import { Emailjs } from "./Emailjs";

const Product = ({ product }) => {
  return (
    <>
      <div className="flex justify-center mb-20">
        <div className="mx-auto">
          <div className="carousel carousel-center max-w-md p-8 space-x-4 bg-neutral rounded-box">
            <div className="carousel-item min-w-[100px]">

              <Suspense fallback={<Skeleton />}>
                <LazyLoadImage
                  alt="img"
                  placeholderSrc={product.image}
                  effect="blur"
                  src={product.image}
                  className="max-w-[150px] h-56 hover:scale-125 transition-transform ease-in-out duration-300"
                />
              </Suspense>
            </div>
            <div className="carousel-item min-w-[100px]">
              <Suspense fallback={<Skeleton />}>
                <LazyLoadImage
                  alt="img"
                  placeholderSrc={product.image}
                  effect="blur"
                  src={product.image2}
                  className="h-56 max-w-[200px] hover:scale-125 transition-transform ease-in-out duration-300"
                />
              </Suspense>
            </div>
          </div>
          <div className="flex justify-between">
            <span>
              <h1>{product.name}</h1>
              <h3>₦{product.price}</h3>
              <h3>{product.desc}</h3>
              <h3>{product.date}</h3>
            </span>
            <span className="justify-self-end my-12">
              <br></br>
              <div className="badge badge-outline mx-2">{product.item}</div>
            </span>
          </div>
          <div className="text-center">
            {product.link && (
              <Link className="btn btn-active btn-accent my-3" target="_blanck" href={product.link}>
                Bargain
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
