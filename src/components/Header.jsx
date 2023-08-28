import React from "react";
import { useSelector } from "react-redux";
import { logoPets, cart, bag } from "../assets/index";
import { Link } from "react-router-dom";

const Header = () => {
  const productData = useSelector((state) => state.petShop.productData);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-20" src={logoPets} alt="logo" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline under-line-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </Link>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline under-line-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline under-line-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline under-line-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline under-line-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>

          <Link to="/cart" title="Cart">
            <div className="relative">
              <img className="w-6 h-8" src={bag} alt="bag image" />
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login" title="Login">
            <img className="w-8 h-8" src={cart} alt="cart image" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
