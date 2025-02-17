"use client";

import React from "react";
import { BsCart4 } from "react-icons/bs";
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { Kaisei_HarunoUmi } from "next/font/google"; 
import Image from "next/image";

// Use Kaisei HarunoUmi font
const kaiseiHarunoUmi = Kaisei_HarunoUmi({ subsets: ["latin"], weight: "400" });

const ProductPage = () => {
  return (
    <div className="flex justify-center items-center  px-4">
      <div className="flex flex-col md:flex-row items-center w-full ">
        {/* Product Image */}
        <div className="w-full md:w-1/2 p-5">
          <Image
            alt="Kayhan Amplifier 4000 Watt Mono Block"
            className="w-full rounded-lg shadow-lg h-[30rem sm:h-[20rem]]"
            height="300"
            width="500"
            src="https://storage.googleapis.com/a1aa/image/QQeUmDJwZfNb8a6DVF4pyRnunck1XTHtn8GxsZS-JU8.jpg"
          />
        </div>

        {/* Product Details */}
        <div className={`${kaiseiHarunoUmi.className} font-light text-center md:text-left w-full md:w-1/2`}>
          <h1 className="text-3xl font-semibold">
            Kayhan Amplifier 4000 Watt Mono Block
          </h1>
          <p className="text-lg mt-2 text-gray-600">
            Price: <span className="text-green-600 font-bold">$550.00</span>
          </p>

          {/* Social Share */}
          <div className="flex items-center justify-center md:justify-start space-x-3 mt-4 text-gray-700">
            <span>Share On:</span>
            <FaWhatsapp className="text-2xl hover:text-green-500 cursor-pointer" />
            <FaFacebook className="text-2xl hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-blue-400 cursor-pointer" />
            <FaInstagramSquare className="text-2xl hover:text-pink-500 cursor-pointer" />
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <input
              type="number"
              placeholder="Quantity"
              className="border md:p-2 rounded-lg text-black text-center"
            />
            <button className="bg-blue-900 shadow-md hover:bg-green-700 transition text-white px-6 md:py-2 rounded-lg flex items-center">
              <BsCart4 className="text-lg mr-2" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
