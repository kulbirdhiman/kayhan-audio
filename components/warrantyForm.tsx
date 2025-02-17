"use client";
import React from "react";

const WarrantyForm: React.FC = () => {
  return (
    <div className="md:w-1/2 md:p-5 flex flex-col space-y-4">
      <h1 className="text-3xl text-center my-5">Product Details</h1>

      <div className="flex justify-between">
        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-700">
            Model
          </label>
          <input
            type="text"
            id="model"
            className="w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
            placeholder="Enter model name"
          />
        </div>

        <div>
          <label htmlFor="yearBuild" className="block text-sm font-medium text-gray-700">
            Year Build
          </label>
          <input
            type="number"
            id="yearBuild"
            className="w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
            placeholder="Enter year built"
          />
        </div>
      </div>

      <div>
        <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
          Product Name
        </label>
        <input
          type="text"
          id="productName"
          className="w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
          placeholder="Enter product name"
        />
      </div>

      <div className="flex justify-between my-2">
        <div>
          <label htmlFor="regoNumber" className="block text-sm font-medium text-gray-700">
            Rego No.
          </label>
          <input
            type="text"
            id="regoNumber"
            className="w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
            placeholder="Enter registration number"
          />
        </div>

        <div>
          <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700">
            Date of Purchase
          </label>
          <input
            type="date"
            id="purchaseDate"
            className="w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="retailerAddress" className="block text-sm font-medium text-gray-700">
          Retailer Address
        </label>
        <input
          type="text"
          id="retailerAddress"
          className="w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
          placeholder="Enter retailer address"
        />
      </div>

      <div className="flex justify-between">
        <div>
          <label htmlFor="warrantyNumber" className="block text-sm font-medium text-gray-700">
            Warranty Number
          </label>
          <input
            type="number"
            id="warrantyNumber"
            className="w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
            placeholder="Enter warranty number"
          />
        </div>

        <div>
          <label htmlFor="invoiceNumber" className="block text-sm font-medium text-gray-700">
            Invoice Number
          </label>
          <input
            type="number"
            id="invoiceNumber"
            className="w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
            placeholder="Enter invoice number"
          />
        </div>
      </div>

      <div>
        <label htmlFor="retailerName" className="block text-sm font-medium text-gray-700">
          Retailer It Was Purchased From
        </label>
        <input
          type="text"
          id="retailerName"
          className="w-full mt-1 p-2 border-b border-gray-900 focus:outline-none"
          placeholder="Enter retailer name"
        />
      </div>

      <button className="bg-green-500 shadow-black shadow rounded-lg p-2 w-1/3 mx-auto">
        Submit
      </button>
    </div>
  );
};

export default WarrantyForm;
