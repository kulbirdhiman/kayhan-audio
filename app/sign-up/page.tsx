import React from "react";
import Image from "next/image";
const Signup = () => {
  return (
    <section className="flex flex-col md:flex-row w-[100%] md:w-[80%] h-auto mx-auto mt-8 bg-white text-black p-6 shadow-lg rounded-lg">
      {/* Left Section - Signup Form */}
      <div className="md:w-1/2 p-5">
        <h1 className="text-3xl text-center mb-5">Sign Up</h1>

        <form className="space-y-6">
          <div className="flex justify-between space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:border-gray-500"
                placeholder="Enter First Name"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:border-gray-500"
                placeholder="Enter Last Name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded focus:outline-none focus:border-gray-500"
              placeholder="Enter Email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              className="w-full p-2 border rounded focus:outline-none focus:border-gray-500"
              placeholder="Enter Phone Number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded focus:outline-none focus:border-gray-500"
              placeholder="Enter Password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded focus:outline-none focus:border-gray-500"
              placeholder="Confirm Password"
            />
          </div>

          <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full">
            Sign Up
          </button>
        </form>
      </div>

      {/* Right Section - Info & Map */}
      <div className="md:w-1/2 p-5">
<Image className="w-full h-full" src="https://kayhanaudio.com.au/wp-content/uploads/2024/04/BMW-5-Series-2004-%E2%80%93-2010-11.jpg" width={100} height={200} alt="this is image" />
        </div >
    </section>
  );
};

export default Signup;
