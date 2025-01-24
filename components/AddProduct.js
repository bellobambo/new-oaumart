"use client";

import React from "react";
import dynamic from "next/dynamic";
import Check from "./Check.json";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { UploadButton } from "@/utils/uploadthing";

const AddProduct = () => {
  const [itemName, setItemName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [phone, setPhone] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productType, setProductType] = useState("");
  const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
  const UploadButton = dynamic(() => import("@/utils/uploadthing"), {
    ssr: false,
  });

  const router = useRouter();

  const { data, session } = useSession({
    required: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!itemName || !phone || !itemPrice || !image || !brandName) {
      alert("Please fill in all required fields, including Product Type.");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("itemName", itemName);
      formData.append("brandName", brandName);
      formData.append("itemDesc", itemDesc);
      formData.append("phone", phone);
      formData.append("itemPrice", itemPrice);
      formData.append("image", image);
      // formData.append('productType', productType);

      const res = await fetch("http://localhost:3001/api/items", {
        method: "POST",
        body: formData,
      });

      console.log(res);

      if (res.ok) {
        setIsModalOpen(true);

        console.log("Data saved successfully:", {
          itemName,
          brandName,
          itemDesc,
          phone,
          itemPrice,
          image,
          // productType
        });
        setTimeout(() => {
          setIsModalOpen(false);
          router.push("/");
        }, 2000);
      } else {
        throw new Error("Failed to Add Item");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-[50px]">
      <h1 className=" text-center my-4 text-[40px] font-semibold mt-4">
        Add Product
      </h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto text-[40px]">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            onChange={(e) => setItemName(e.target.value)}
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-yellow-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none dark:text-white dark:border-yellow-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-[30px]"
          >
            Product Name
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            onChange={(e) => setBrandName(e.target.value)}
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-yellow-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none dark:text-white dark:border-yellow-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-[30px]"
          >
            Brand Name
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              onChange={(e) => setItemPrice(e.target.value)}
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-yellow-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none dark:text-white dark:border-yellow-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Price
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              name="phone"
              id="phone"
              className="block py-2.5 px-0 w-full text-sm text-yellow-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none dark:text-white dark:border-yellow-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone Number
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-1 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setItemDesc(e.target.value)}
              type="text"
              name="desc"
              id="desc"
              className="block py-2.5 px-0 w-full text-sm text-yellow-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none dark:text-white dark:border-yellow-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="desc"
              className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Item Description
            </label>
          </div>
        </div>
        <div className="font-[12px] grid md:grid-cols-1 md:gap-6 text-[12px]">
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              console.log("Files: ", res);
              if (res && Array.isArray(res) && res.length > 0) {
                setImage(res[0].url);
              }
            }}
            onUploadError={(error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
        {image.length ? (
          <div>
            {" "}
            <img src={image} alt="my image" width={300} height={150} />{" "}
          </div>
        ) : null}
        {/* <div className="relative text-[15px] z-0 w-full mb-5 group">
          <label classNameName="block text-white mb-2">Product Type:</label>
          <div className="flex items-center">
            <label className="mr-3 flex items-center">
              <input
                type="radio"
                value="edible"
                checked={productType === 'edible'}
                onChange={() => setProductType('edible')}
                className="mr-1"
              />
              <span className="text-white">Edible</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="non-edible"
                checked={productType === 'non-edible'}
                onChange={() => setProductType('non-edible')}
                className="mr-1"
              />
              <span className="text-white">Non-edible</span>
            </label>
          </div>
        </div> */}

        <button
          className="btn btn-outline btn-accent"
          type="submit"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add"}
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="mt-[40px] p-8 rounded-md shadow-md">
              <div className="mb-4 z-40">
                <Lottie animationData={Check} />
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddProduct;
