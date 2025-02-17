"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Kaisei_HarunoUmi } from "next/font/google";
import { GiShoppingCart } from "react-icons/gi";
const kaiseiHarunoUmi = Kaisei_HarunoUmi({ subsets: ["latin"], weight: "400" });
export const WeekHighlights = ({ products }) => {
  const [hoverState, setHoverState] = useState({
    first: false,
  });

  return (
    <div className="grid lg:grid-cols-2 gap-6 px-4">
      {/* Sub Products - Now on the Left Side */}
      <div className="grid grid-cols-2 gap-6">
        {/* First Sub-product Column */}
        <div className="flex flex-col gap-6">
          {products?.sub_products_one?.map((row, index) => (
            <Link
              key={index}
              href={"#"}
              className="bg-gray-100 rounded-xl p-3 shadow-md group relative"
            >
              {/* Label Badge with z-index */}
              
              <div className="relative">
                <Image
                  src="https://kayhanaudio.com.au/wp-content/uploads/2023/02/BMW-1er-2er-M2-2015-%E2%80%93-2017.jpg"
                  alt="Sub-product"
                  width={200}
                  height={250}
                  className="h-48 w-full object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className={` ${ kaiseiHarunoUmi.className} text-base font-bold  text-center dark:text-black`}>
                {row.name}
              </p>
              <button className="bg-black text-white w-full p-2 rounded-lg shadow-lg my-2 flex justify-center gap-2"> <GiShoppingCart className="text-2xl" />Buy now</button>
            </Link>
          ))}
        </div>

        {/* Second Sub-product Column */}
        <div className="flex flex-col gap-6">
          {products?.sub_products_twe?.map((row, index) => (
            <Link
              key={index}
              href={"#"}
              className="bg-gray-100 rounded-xl p-3 shadow-md group relative"
            >
              {/* Label Badge with z-index */}
             
              <div className="relative">
                <Image
                  src="https://kayhanaudio.com.au/wp-content/uploads/2023/02/BMW-1er-2er-M2-2015-%E2%80%93-2017.jpg"
                  alt="Sub-product"
                  width={200}
                  height={250}
                  className="h-48 w-full object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className={` ${ kaiseiHarunoUmi.className} text-base font-bold  text-center dark:text-black`}>
                {row.name}
              </p>
              <button className="bg-black text-white w-full p-2 rounded-lg shadow-lg my-2 flex justify-center gap-2"> <GiShoppingCart className="text-2xl" />Buy now</button>

            </Link>
          ))}
        </div>
      </div>

      {/* Main Product - Now on the Right Side */}
      <Link
  href={"#"}
  className="flex flex-col justify-center items-center bg-gray-100 rounded-xl p-6 group relative"
>
  {/* Label Badge with z-index */}
  

  {/* Image as Background */}
  <div
    className="relative h-[50vh] w-full  bg-cover bg-center rounded-xl"
    style={{
      backgroundImage: `url('https://kayhanaudio.com.au/wp-content/uploads/2023/02/BMW-1er-2er-M2-2015-%E2%80%93-2017.jpg')`,
    }}
  >
    {/* This div will overlay on top of the background image */}
    <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
  </div>

  <h1 className="text-xl font-bold mt-4 text-center dark:text-black">
    {products?.main?.name}
  </h1>
  
  <button className="bg-black text-white w-1/3 p-2 rounded-lg shadow-lg my-2 flex justify-center gap-2"> <GiShoppingCart className="text-2xl" />Buy now</button>

  
</Link>

    </div>
  );
};
