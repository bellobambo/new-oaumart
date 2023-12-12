'use client'

import data from "/data.json";

import Product from "../../components/Product";
import { Suspense, useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const productsPerPage = 5;

  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === "All" || product.item.toLowerCase() === selectedCategory.toLowerCase())
  );

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

  return (
    <div>
      <div className="flex flex-col items-center text-center m-5">
        <h1 className="">Our Products</h1>
        <br />
        <input
          className="p-2 border-2 border-white max-w-[400px] rounded-md"
          type="text"
          placeholder="Search by product name"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <details className="dropdown my-3">
          <summary className="m-1 btn">Filter Product</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li><a onClick={() => setSelectedCategory("All")}>All</a></li>
            <li><a onClick={() => setSelectedCategory("Edibles")}>Edibles</a></li>
            <li><a onClick={() => setSelectedCategory("Non-Edibles")}>Non-Edibles</a></li>
          </ul>
        </details>
      </div>

      <section className="m-5">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {productsToDisplay.map((product) => (
              <Product key={product.id} product={product} />
          ))}
        </div>
      </section>

      <div className="flex justify-center gap-5 text-center m-5">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-outline btn-accent"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= filteredProducts.length}
          className="btn btn-outline btn-accent"
        >
          Next
        </button>
      </div>
    </div>
  );
}
