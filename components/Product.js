import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Skeleton from "./Skeleton";
import { Emailjs } from "./Emailjs";

const getItems = async () => {
  try {
    const res = await fetch('http://localhost:3001/api/items', {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error('failed to fetch items');
    }

    return res.json();
  } catch (error) {
    console.log("Error Loading Items", error);
    return [];
  }
}

const Product = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { items } = await getItems();
      setItems(items);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center mb-20">
        {items.map((t) => (
          <div key={t._id}>
            {t.itemName}
            <LazyLoadImage
              alt="img"
              placeholderSrc={t.image}
              effect="blur"
              src={`/uploads/${t.image}`}
              className="max-w-[150px] h-56"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
