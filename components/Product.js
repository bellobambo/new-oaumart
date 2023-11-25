
import Link from "next/link";
import React from "react";


const Product = ({ product }) => {


  return (

    <>

      <div className="flex justify-center ">

        <div>

          <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box ">
            <div className="carousel-item">

              <img src={product.image} className=" max-w-[200px] h-56" />
            </div>
            <div className="carousel-item">
              <img src={product.image2} className=" h-56 max-w-[200px]" />
            </div>
          </div>
          <h1>{product.name}</h1>
          <h3>₦{product.price}</h3>
          <h3>{product.desc}</h3>

          <div className="text-center">
            {product.link && (
              <Link className="btn btn-active btn-accent my-3" href={product.link}>
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
