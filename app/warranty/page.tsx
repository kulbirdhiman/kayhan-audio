"use client"
import React, { useEffect } from "react";
import { useState } from "react";
import WarrantyForm from "@/components/warrantyForm";
import { h1 } from "motion/react-client";
const Contact = () => {
  const [isopen,setIsopen] = useState(true)
  // useEffect(()=>{
  //   setIsopen(true)
  // })
  return (
    <>
      <section className="flex flex-col md:flex-row w-[100%] md:w-[80%] mx-auto mt-8">
        {/* Left Section - Form Inputs */}
{  isopen ?   <div className="md:w-1/2 md:p-5 flex flex-col space-y-4">
          <h1 className="text-3xl text-center my-5">Warranty</h1>

          <div className="flex justify-between">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              className="w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
              placeholder="Enter your address"
            />
          </div>

          <div className="flex justify-between my-2">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number
              </label>
              <input
                type="text"
                id="phone"
                className="w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="vehicle"
              className="block text-sm font-medium text-gray-700"
            >
              Vehicle Details (Make) *
            </label>
            <input
              type="text"
              id="vehicle"
              className="w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
              placeholder="Enter vehicle details"
            />
          </div>

          <button onClick={()=> setIsopen(!isopen)} className="bg-green-400 shadow-black shadow rounded-lg p-2 w-1/3 mx-auto">
            Next
          </button>
        </div>
        :<WarrantyForm />
        }

        {/* Right Section (Map & Address) */}
        <div className="md:w-1/2 w-full my-2 p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.3751271482897!2d144.783392!3d-37.828103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6601ed1aeaaad%3A0x831cc45842b873c3!2sKayhan%20Audio!5e0!3m2!1sen!2sin!4v1738925488884!5m2!1sen!2sin"
            className="w-full h-[17rem]"
            loading="lazy"
          ></iframe>

          <h1 className="text-2xl text-center md:text-start my-3">
            Our Address
          </h1>
          <div className="border border-blue-500 mx-auto md:ml-0 w-[130px]"></div>

          <div className="text-xs text-center md:text-start text-gray-600 my-4">
            <p>Unit 3, 151 Dohertys Rd, Laverton North 3026, VIC</p>
            <p>Support: 1300 696 488</p>
            <p>Email: info@kayhanaudio.com.au</p>
          </div>

          <h5 className="py-4 text-center md:text-start">Opening Hours</h5>
          <p className="text-xs text-center md:text-start">
            Mon – Sat / 9:00AM – 6:00PM
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
