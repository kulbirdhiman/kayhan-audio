"use client";
import React, { useState } from "react";
import { FaPaypal } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import CheckoutForm from "@/components/CheckoutForm";
import { FaShippingFast, FaTruck } from "react-icons/fa"; 
import { CiDiscount1 } from "react-icons/ci";
import { FaGift } from "react-icons/fa6";

interface Address {
  id: number;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  pin: string;
  phone: string;
  email: string;
}

const CheckOut: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<number>(0);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      pin: "10001",
      phone: "1234567890",
      email: "johndoe@example.com",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      street: "456 Elm St",
      city: "Los Angeles",
      state: "CA",
      pin: "90001",
      phone: "9876543210",
      email: "janesmith@example.com",
    },
  ]);

  const handleSelectAddress = (index: number) => setSelectedAddress(index);

  const handleDeleteAddress = (index: number) => {
    setAddresses((prev) => prev.filter((_, i) => i !== index));
    if (selectedAddress === index) setSelectedAddress(0);
  };

  const handleAddAddress = () => {
    setEditingAddress(null);
    setShowModal(true);
  };

  const handleEditAddress = (address: Address) => {
    setEditingAddress(address);
    setShowModal(true);
  };

  const handleSaveAddress = (newAddress: Address) => {
    if (editingAddress) {
      setAddresses((prev) =>
        prev.map((addr) => (addr.id === editingAddress.id ? newAddress : addr))
      );
    } else {
      setAddresses((prev) => [...prev, { ...newAddress, id: Date.now() }]);
    }
    setShowModal(false);
  };

  return (
    <>
        <div className="w-[82%] mx-auto">
        <h1 className="text-xl my-4 font-semibold">
          Shipping Address
        </h1>
        <div className="bg-gray-600 p-3 text-white rounded-md my-2 flex"> <CiDiscount1 className="text-lg mx-2" />Have a coupan ? click here to enter your code</div>
        <div className="bg-gray-600 p-3 text-white rounded-md my-2 flex"><FaGift className="text-lg mx-2" /> Have a gift Card? click here to enter your code</div>
        </div>
    <section className="flex flex-col md:flex-row gap-2 w-full md:w-[90%] justify-around mx-auto mt-3 text-black">
      {/* Shipping Address Section */}
      <div className="md:w-[50%] p-4 pb-4 rou border-none">
       
        <button
            onClick={handleAddAddress}
            className="ml-2 text-blue-500 text-sm"
          >
            + Add Address
          </button>
        {addresses.map((address, index) => (
          <div key={address.id} className="p-2 rounded shadow-sm bg-gray-50 text-xs mt-2s">
<div className="bg-gray-50 p-2">
<div className="flex items-center justify-between border-b-2 border-gray-300 p-4">
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  name="address"
                  checked={selectedAddress === index}
                  onChange={() => handleSelectAddress(index)}
                  className="accent-blue-600 mx-3"
                />
                <h2 className="font-light text-lg">
                  <span className="font-bold mr-2">{address.firstName} {address.lastName}</span>
                  {address.street}, {address.city}, {address.state} - {address.pin}
                  <br />
                  Phone: {address.phone}
                </h2>
              </div>
              <div className="flex gap-1 font-bold text-xl">
                <button
                  className="text-gray-600 text-sm border-r-2 border-gray-500  px-2"
                  onClick={() => handleEditAddress(address)}
                >
                  Edit
                </button>
                <button
                  className="text-gray-600 text-sm"
                  onClick={() => handleDeleteAddress(index)}
                >
                  Delete
                </button>
              </div>
            </div>
</div>
          </div>
        ))}
      </div>

      {/* Order Summary Section */}
      <div className="w-full md:w-[30%] my-4 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
  <h1 className="text-center text-2xl font-semibold border-b pb-3">Order Summary</h1>

  {/* Product Details */}
  <div className="py-4 border-b text-sm">
    <div className="flex justify-between items-start">
      <div className="w-[70%]">
        <h2 className="text-lg font-semibold">Product</h2>
        <p className="text-gray-700">Car Stereo with SatNav BMW 5 Series (2004 - 2010) | V6 | 8.8 Inch</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Subtotal</h2>
        <p className="font-medium">$1,995.00</p>
      </div>
    </div>
  </div>

  {/* Shipping */}
  <div className="py-4 border-b">
    <h2 className="text-lg font-semibold">Shipping</h2>
    <div className="flex justify-between w-full mt-2">
      {/* Standard Delivery */}
      <div className="flex items-center gap-2 p-3 border rounded-md cursor-pointer hover:bg-gray-100">
        <FaTruck className="text-blue-500 text-xl" />
        <div>
          <h3 className="font-medium">Standard Delivery</h3>
          <p className="text-xs text-gray-600">4-7 days</p>
        </div>
      </div>
      {/* Fast Delivery */}
      <div className="flex items-center gap-2 p-3 border rounded-md cursor-pointer hover:bg-gray-100">
        <FaShippingFast className="text-red-500 text-xl" />
        <div>
          <h3 className="font-medium">Fast Delivery</h3>
          <p className="text-xs text-gray-600">1-2 days</p>
        </div>
      </div>
    </div>
    {/* <p className="font-medium mt-3">$25</p> */}
  </div>

  {/* Total */}
  <div className="my-3 flex justify-between text-lg font-bold">
    <h2>Total</h2>
    <h2>$2,000</h2>
  </div>

  {/* Terms & Conditions */}
  <p className="text-sm text-gray-600">
    By placing an order, you agree to our{" "}
    <a href="#" className="text-blue-500 hover:underline">terms & conditions</a>.
  </p>
  <div className="flex items-center my-2 text-xs">
    <input type="checkbox" id="terms" className="mr-2 accent-black" />
    <label htmlFor="terms">I have read and agree to the website terms</label>
  </div>

  {/* Payment Buttons */}
  <div className="flex flex-col gap-3 mt-4">
    <button className="bg-yellow-500 text-white flex items-center justify-center px-4 py-2 rounded-md shadow-md hover:bg-yellow-600">
      <FaPaypal className="mr-2" /> Pay with PayPal
    </button>
    <button className="bg-black text-white flex items-center justify-center px-4 py-2 rounded-md shadow-md hover:bg-gray-900">
      <IoCardOutline className="mr-2" /> Pay with Debit Card
    </button>
  </div>
</div>



      {/* Address Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-2">
              {editingAddress ? "Update Address" : "Add Address"}
            </h2>
            <CheckoutForm
              // initialAddress={editingAddress}
              // onSave={handleSaveAddress}
            />
            <button
              onClick={() => setShowModal(false)}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
    </>
  );
};

export default CheckOut;
