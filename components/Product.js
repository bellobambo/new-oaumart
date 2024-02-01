import Link from "next/link";
import React, { useEffect, useState } from "react";
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
    return [];
  }
}

const Product = () => {
  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { items } = await getItems();
      setItems(items);
    };

    fetchData();
  }, []);

  const itemsPerPage = 6;
  const pagesVisited = pageNumber * itemsPerPage;

  const filteredItems = items.filter((item) =>
    item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  const changePage = (newPage) => {
    setPageNumber(newPage);
  };

  const formattedDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Adjust options as needed
  };
  

  const displayItems = filteredItems
  .slice()
  .sort((a, b) => b.createdAt - a.createdAt) 
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) 
  .slice(pagesVisited, pagesVisited + itemsPerPage)
  .map((t) => (
    <div key={t._id} className="card w-96 bg-base-100 shadow-xl my-10">
      <div className=" items-center border-2 border-yellow-400 rounded-md p-4">
        <figure>
          <LazyLoadImage
            alt="img"
            placeholderSrc={t.image}
            effect="blur"
            src={`/uploads/${t.image}`}
            className="h-56 transform hover:scale-125 transition-transform duration-300 ease-in-out"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{t.itemName}</h2>
          <p>{t.itemDesc}</p>
          <small><strong>{formattedDate(t.createdAt)}</strong></small>
          <div className="card-actions justify-end">
            <Link href={`https://wa.me/${t.phone}`} className='btn btn-accent' >
              Bargain
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));


  return (
    <>
      <div className="flex flex-col justify-center">
      <h1 className=" text-center my-4 text-[40px] font-semibold">Our Products</h1>

        <div className="flex justify-center text-center">
          <input
            className="p-3 rounded-md"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="card-container grid grid-cols-2 place-items-center">
          {displayItems}
        </div>

        <div className="flex space-x-2 justify-center text-center">
          <button
            className='btn btn-accent' 
            onClick={() => changePage(pageNumber - 1)}
            disabled={pageNumber === 0}
          >
            Previous
          </button>
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              className={`pagination__link ${pageNumber === index ? 'pagination__link--active' : ''}`}
              onClick={() => changePage(index)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className='btn btn-accent' 
            onClick={() => changePage(pageNumber + 1)}
            disabled={pageNumber === pageCount - 1}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
