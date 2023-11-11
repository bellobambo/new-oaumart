import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { PiStorefrontDuotone } from "react-icons/pi";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";

const Navbar = () => {
  const [cartItem] = useRecoilState(cartState);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Add event listener to close the sidebar when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSidebarOpen]);


  const menuItems = [
    // {
    //   href: '/',
    //   title: 'Homepage',
    // },
    {
      href: '/about',
      title: 'About',
    },

  ];

  return (
    <section className="shadow-xl bg-white sticky top-0 z-10">
      <div className="container mx-auto py-2 text-[24px] flex justify-between items-center">
        <div className="cursor-pointer flex items-center">
          <PiStorefrontDuotone />
          <Link href="/"> Market²</Link>
        </div>

        <div className="relative cursor-pointer">
          <Link href="/cart">
            <div>
              <FiShoppingCart />
              <span className="absolute -top-2 -right-2 text-[13px] bg-red-600 h-[18px] w-[18px] rounded-full grid place-items-center text-white">
                {cartItem.length}
              </span>
            </div>
          </Link>
        </div>

        <button
          onClick={toggleSidebar}
          className="cursor-pointer text-[24px] ml-4"
        >
          &#9776;
        </button>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          ref={sidebarRef}
          className={`bg-gray-200 w-64 h-screen max-h-[150px] fixed top-0 right-0 transform transition-transform duration-300 ease-in-out z-50 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >

          <div className=" p-3 ">
            <div className="flex items-center mb-2">
              <PiStorefrontDuotone />
              <h2 className="font-bold text-lg">Market²</h2>
            </div>

            <Link href="/contact" className="hover:scale-105 mb-2">About</Link>
            <br />
            <Link href="mailto:bambobello5@gmail.com" className="hover:scale-[105px]">Contact</Link>

          </div>

        </div>
      )}
    </section>
  );
};

export default Navbar;
