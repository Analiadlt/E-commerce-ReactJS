import React from "react";
import { logoPets, mercado_pago_logo } from "../assets/index.js";
import { FaWhatsapp, FaInstagram, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img className="w-20" src={logoPets} alt="logoPets" />
          <img
            className="w-20"
            src={mercado_pago_logo}
            alt="mercado_pago_logo"
          />
          <div className="flex gap-5 text-lg text-gray-400">
            <FaWhatsapp className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaMailBulk className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2x1 font-semibold text-white mb-4">
            Encontranos en
          </h2>
          <div className="text-base flex flex-col gap-2">
            <p>9 de Julio 913 (Este)</p>
            <p>San Juan</p>
            <p>264-4193271</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
