'use client';

import data from '/data.json';

import Product from '../../components/Product';
import { Suspense, useEffect, useState } from 'react';
import { Emailjs } from '../../components/Emailjs';
import Toast from '../../components/Toast';
// import { connectMongodb } from '../../lib/mongodb';


export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortByDate, setSortByDate] = useState(true); // Added state for sorting by date
  const [showModal, setShowModal] = useState(false);
  const productsPerPage = 6;


  const sortProductsByDate = (products) => {
    return products.sort((a, b) => new Date(b.date) - new Date(a.date));
  };


  const filteredProducts = sortProductsByDate(
    data.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory === 'All' || product.item.toLowerCase() === selectedCategory.toLowerCase())
    )
  );





  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount


  }, []);

  const closeModal = () => {
    setShowModal(false);
  };


  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

//  const db =  connectMongodb()

  return (
    <div>
      <div className="flex flex-col items-center text-center m-5">
      <Toast />

        <br />
        {/* <details className="dropdown my-3">
          <summary className="m-1 btn">Filter Product</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={() => setSelectedCategory('All')}>All</a>
            </li>
            <li>
              <a onClick={() => setSelectedCategory('Edibles')}>Edibles</a>
            </li>
            <li>
              <a onClick={() => setSelectedCategory('Non-Edibles')}>Non-Edibles</a>
            </li>
          </ul>
        </details> */}
      </div>


      <section className="m-5">
        <div>


            <Product  />

        </div>
      </section>

  
    </div>
  );
}
