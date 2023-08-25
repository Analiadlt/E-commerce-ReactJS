import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const productData = useSelector((state) => state.petShop.productData);
  const [totalAmount, setTotalAmount] = useState("");

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmount(price.toFixed(2));
  }, [productData]);

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="cartImage"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">cart totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal{" "}
              <span className="font-titleFont font-bold text-lg">$ {totalAmount}</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping{" "}
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">$ {totalAmount}</span>
          </p>
          <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
            proceed to chekout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
