import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
  const productData = useSelector((state) => state.petShop.productData);
  const userInfo = useSelector((state) => state.petShop.userInfo);
  const [totalAmount, setTotalAmount] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmount(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout.");
    }
  };

  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      // amount: totalAmount * 100,
      total: totalAmount * 100,
      token: token,
    });
  };

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
              <span className="font-titleFont font-bold text-lg">
                $ {totalAmount}
              </span>
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
          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            proceed to chekout
          </button>
          {payNow && (
            <div className="w-full mt-6 flex items-center justify-center">
              {/* plataforma de pago stripe.com con credenciales de prueba por unas horas */}
              <StripeCheckout
                stripeKey="pk_test_51NkYksHo1zX0x7aqM3ji4PUNysuP1s8T36cL7eJTUYrRCOE7vdaLqiZpfVHLE3Z7nTBcHwMLE7ZGnqpvMdVEcxg500OZimNmOI"
                name="PetShop online Shopping"
                amount={totalAmount * 100}
                label="Pay to petShop"
                description={`Your Payment amount is $ ${totalAmount}`}
                token={payment}
                email={userInfo.email}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
