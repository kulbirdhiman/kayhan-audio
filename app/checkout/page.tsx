"use client";
import React, { useState } from "react";
import { FaPaypal } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import CheckoutForm from "@/components/CheckoutForm";

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
    <section className="flex flex-col md:flex-row gap-2 w-full md:w-[90%] justify-around mx-auto mt-3 text-black">
      {/* Shipping Address Section */}
      <div className="md:w-[50%] p-4 pb-4 rou border-none">
        <h1 className="text-xl my-4 font-semibold">
          Shipping Address
          <button
            onClick={handleAddAddress}
            className="ml-2 text-blue-500 text-sm"
          >
            + Add Address
          </button>
        </h1>
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
                  className="text-teal-500 text-sm border-r-2 border-gray-500  px-2"
                  onClick={() => handleEditAddress(address)}
                >
                  Edit
                </button>
                <button
                  className="text-teal-500 text-sm"
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
      <div className="md:w-[30%] p-2 border rounded shadow-sm bg-white text-sm">
        <h1 className="text-center text-lg font-semibold border-b pb-1">Your Order</h1>
        <div className="py-1 border-b flex justify-between">
          <p>Car Stereo - BMW 5 Series (2004-2010)</p>
          <p className="font-semibold">$1,995.00</p>
        </div>
        <div className="py-1 border-b flex justify-between">
          <p>Shipping</p>
          <p className="font-semibold">$25</p>
        </div>
        <div className="py-1 border-b flex justify-between">
          <p>Discount</p>
          <p className="font-semibold">$25</p>
        </div>
        <div className="py-2 flex justify-between font-bold text-lg">
          <p>Total</p>
          <p>$2,000</p>
        </div>
        <div className="text-xs text-gray-600 my-1">
          Your personal data will be used to process your order as per our privacy policy.
        </div>
        <div className="flex items-center text-xs my-1">
          <input type="checkbox" id="terms" className="mr-1 accent-black" />
          <label htmlFor="terms">I agree to the terms & conditions</label>
        </div>
        <div className="flex flex-col gap-1">
          <button className="bg-yellow-500 text-white px-3 py-2 rounded w-full flex items-center justify-center">
            <FaPaypal className="mr-2" /> Pay with Paypal
          </button>
          <button className="bg-black text-white px-3 py-2 rounded w-full flex items-center justify-center">
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
              initialAddress={editingAddress}
              onSave={handleSaveAddress}
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
  );
};

export default CheckOut;
