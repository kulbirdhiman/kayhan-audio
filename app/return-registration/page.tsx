import React from "react";
import Image from "next/image";

const SellWithUS = () => {
  return (
    <section className="flex flex-col md:flex-row w-[100%] md:w-[84%] mx-auto mt-8">
      {/* Left Section - Form Inputs */}
      <div className="md:w-1/2 md:p-5 flex flex-col space-y-6">
        <h1 className="text-3xl text-center my-5">Return Registration</h1>

        <div className="flex justify-between">
          <div className="relative w-[48%]">
            <input
              type="text"
              id="firstName"
              className="peer w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
              placeholder=" "
            />
            <label
              htmlFor="firstName"
              className="absolute left-0 top-1 text-gray-700 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
            >
              Name
            </label>
          </div>

          <div className="relative w-[48%]">
            <input
              type="text"
              id="lastName"
              className="peer w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
              placeholder=" "
            />
            <label
              htmlFor="lastName"
              className="absolute left-0 top-1 text-gray-700 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
            >
              Kayhan Audio Contact Person
            </label>
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            id="productName"
            className="peer w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
            placeholder=" "
          />
          <label
            htmlFor="productName"
            className="absolute left-0 top-1 text-gray-700 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
          >
            Product Name(s)
          </label>
        </div>

        <div className="flex justify-between">
          <div className="relative w-[48%]">
            <input
              type="text"
              id="make"
              className="peer w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
              placeholder=" "
            />
            <label
              htmlFor="make"
              className="absolute left-0 top-1 text-gray-700 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
            >
              Make
            </label>
          </div>

          <div className="relative w-[48%]">
            <input
              type="text"
              id="model"
              className="peer w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
              placeholder=" "
            />
            <label
              htmlFor="model"
              className="absolute left-0 top-1 text-gray-700 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
            >
              Model
            </label>
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            id="address"
            className="peer w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
            placeholder=" "
          />
          <label
            htmlFor="address"
            className="absolute left-0 top-1 text-gray-700 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
          >
            Address
          </label>
        </div>

        <div className="flex justify-between">
          <div className="relative w-[48%]">
            <input
              type="text"
              id="email"
              className="peer w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-1 text-gray-700 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
            >
              Email
            </label>
          </div>

          <div className="relative w-[48%]">
            <input
              type="text"
              id="phone"
              className="peer w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className="absolute left-0 top-1 text-gray-700 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
            >
              Phone/Mobile
            </label>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="relative w-[48%]">
            <input
              type="text"
              id="year"
              className="peer w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
              placeholder=" "
            />
            <label
              htmlFor="year"
              className="absolute left-0 top-1 text-gray-700 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
            >
              Year
            </label>
          </div>

          <div className="relative w-[48%]">
            <input
              type="text"
              id="date"
              className="peer w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
              placeholder=" "
            />
            <label
              htmlFor="date"
              className="absolute left-0 top-1 text-gray-700 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
            >
              Current Date
            </label>
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            id="reason"
            className="peer w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
            placeholder=" "
          />
          <label
            htmlFor="reason"
            className="absolute left-0 top-1 text-gray-900 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
          >
            Please explain your reason for returning
          </label>
        </div>

        <button className="bg-green-400 shadow-black shadow rounded-lg p-2 w-1/3 mx-auto">
          Submit
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2 w-full my-2 p-2">
        <Image
          className="w-full h-full rounded-md"
          src="https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg?auto=compress&cs=tinysrgb&w=600"
          height={200}
          width={400}
          alt="this is image"
        />
      </div>
    </section>
  );
};

export default SellWithUS;
