import Link from "next/link";
import React, { Suspense } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Skeleton from "./Skeleton";
import { Emailjs } from "./Emailjs";


const getItems = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/items', {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error('failed to fetch items');
    }

    return res.json();
  } catch (error) {
    console.log("Error Loading Items", error);
  }
}


const Product = async ({ product }) => {

  const { items } = await getItems()

  return (
    <>
      <div className="flex justify-center mb-20">
      <div className="flex justify-center mb-20">
          {items.map((t) => (
            <div key={t._id}>
              {t.itemName}
            </div>
          ))}
        </div>
        <div className="mx-auto">
          <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div className="carousel-item min-w-[100px]">

              <Suspense fallback={<Skeleton />}>
                <LazyLoadImage
                  alt="img"
                  placeholderSrc={product.image}
                  effect="blur"
                  src={product.image}
                  className="max-w-[150px] h-56"
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
                  className="h-56 max-w-[200px]"
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
