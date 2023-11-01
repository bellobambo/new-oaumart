import Head from "next/head";
import data from "/data.json";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section className="container mx-auto ">
        <h1 className="text-4xl mt-4 text-center">Our Products</h1>
        <div className="mt-4 flex justify-center rounded-md">
          <input
            className="p-2 outline-none rounded-md"
            type="text"
            placeholder="Search by product name"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="mt-4  md:grid-cols-3 gap-4  flex justify-center  ">
          {productsToDisplay.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Pagination controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 bg-gray-300 rounded-lg"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= filteredProducts.length}
          className="px-4 py-2 ml-2 bg-gray-300 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}
