"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ForgetModel from "@/components/forgetModel";

const Signup = () => {
  // State to control modal visibility
  const [isForgetOpen, setIsForgetOpen] = useState(false);

  return (
    <>
      {/* Forget Password Modal (Only visible when isForgetOpen is true) */}
      {isForgetOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-xl">
            <ForgetModel />
            <button
              onClick={() => setIsForgetOpen(false)}
              className="absolute top-2 right-2 bg-gray-500 text-white p-2 rounded-full text-xs hover:bg-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Signup Section */}
      <section className="flex flex-col md:flex-row w-[100%] md:w-[75%] mx-auto mt-10 bg-white text-black p-8 shadow-xl rounded-lg">
        {/* Image Section */}
        <div className="md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              className="object-cover w-full h-full"
              src="https://kayhanaudio.com.au/wp-content/uploads/2024/04/BMW-5-Series-2004-%E2%80%93-2010-11.jpg"
              width={500}
              height={400}
              alt="BMW Car"
              priority
            />
          </div>
        </div>

        {/* Signup Form */}
        <div className="md:w-1/2 flex flex-col justify-center p-6">
          <h1 className="text-4xl font-semibold text-center md:text-left mb-6">Welcome Back</h1>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <button
                type="button"
                onClick={() => setIsForgetOpen(true)}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Forgot Password?
              </button>
            </div>

            <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-5 rounded-lg w-full transition-all">
              Sign In
            </button>

            {/* Signup Link */}
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href="/signup" className="text-gray-800 font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
