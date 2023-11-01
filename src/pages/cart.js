import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRecoilState } from "recoil";
import CartList from "../../components/CartList";
import Navbar from "../../components/Navbar";
import { cartState } from "../../atoms/cartState";


const Cart = () => {
  const [cartItem, setCartItem] = useRecoilState(cartState);

  const totalPrice = () => {
    let total = 0;
    cartItem.forEach((item) => (total += item.price * item.quantity));
    return total;
  };

  const createCheckoutSession = async () => {
    axios
      .post("api/checkout_sessions", { cartItem })
      .then((res) => {
        console.log(res);
        window.location = res.data.sessionURL;
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />

      <div className="container mx-auto">
        {cartItem.length <= 0 ? (
          <h1 className="text-center text-4xl mt-32">Your Cart Is Empty</h1>
        ) : (
          cartItem.map((item) => <CartList key={item.id} data={item} />)
        )}

        {cartItem.length > 0 && (
          <div className="max-w-[800px] mx-auto mt-4">
            <h2 className="text-right text-3xl font-bold">
              Total: ₦{totalPrice()}
            </h2>
            <button
              className="text-right bg-red-600 text-white py-4 px-12 mt-4 block mx-auto hover:bg-red-800"
              onClick={createCheckoutSession}
            >
              Checkout
            </button>
            <Link
              className="text-center bg-red-600 text-white p-4 max-w-sm mt-4 block mx-auto hover:bg-red-800"
              href="https://wa.me/message/2EU7DKQNESR5K1" target="_blank"
            >
              Bargain

            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

