import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";
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
    {
      href: '/',
      title: 'Homepage',
    },
    {
      href: '/about',
      title: 'About',
    },
    {
      href: '/contact',
      title: 'Contact',
    },
  ];

  return (
    <section className="shadow-xl bg-white sticky top-0">
      <div className="container mx-auto py-2 text-[24px] flex justify-between items-center">
        <div className="cursor-pointer">
          <Link href="/">Logo</Link>
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
          className={`bg-gray-200 w-64 h-screen fixed top-0 right-0 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >

          <ul className="p-6">
            {menuItems.map((menuItem, index) => (
              <li key={index}>
                <Link href={menuItem.href}>{menuItem.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
