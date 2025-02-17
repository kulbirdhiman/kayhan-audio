"use client"
import { useState } from 'react';
import Head from 'next/head';

const VehicleSelector = () => {
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [showMake, setShowMake] = useState(true);  // Show Make dropdown
  const [showYear, setShowYear] = useState(false); // Show Year dropdown after Make is selected
  const [showModel, setShowModel] = useState(false); // Show Model dropdown after Year is selected

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleMakeChange = (e) => {
    setMake(e.target.value);
    setShowYear(true);  // Show Year dropdown when Make is selected
  };

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  // Example data based on make selection
  const models = {
    Chevrolet: ['Equinox', 'Malibu', 'Cruze'],
    Toyota: ['Corolla', 'Camry', 'RAV4'],
    Honda: ['Civic', 'Accord', 'CR-V'],
  };

  return (
    <>
     

      <div className=" h-[60vh] flex items-center justify-center bg-gray-900 text-white" style={{
        backgroundImage : "url('https://storage.googleapis.com/a1aa/image/xHcWtEtPEWJUEqiQDY192Sj5F59_FIg3F58SgWBwltI.jpg')",
        backgroundRepeat : "no-repeat",
        backgroundSize :"cover",
        backgroundPosition :"center"
      }}>
       

        {/* Overlay */}
        <div className=" inset-0 bg-black opacity-50 z-0"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold mb-6">Find what fits your vehicle</h1>

          {/* Make Selection */}
          {showMake && (
            <select
              className="block w-64 mx-auto p-3 bg-gray-800 text-white border border-gray-700 rounded"
              value={make}
              onChange={handleMakeChange}
            >
              <option value="">Please Select Make</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              {/* Add more makes as needed */}
            </select>
          )}

          {/* Year Selection (visible after selecting Make) */}
          {showYear && (
            <select
              className="block w-64 mx-auto p-3 bg-gray-800 text-white border border-gray-700 rounded"
              value={year}
              onChange={handleYearChange}
            >
              <option value="">Please Select Year</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              {/* Add more years as needed */}
            </select>
          )}

          {/* Model Selection (visible after selecting Year) */}
          {showModel && (
            <select
              className="block w-64 mx-auto p-3 bg-gray-800 text-white border border-gray-700 rounded"
              value={model}
              onChange={handleModelChange}
            >
              <option value="">Please Select Model</option>
              {make && models[make]?.map((modelOption, index) => (
                <option key={index} value={modelOption}>{modelOption}</option>
              ))}
            </select>
          )}

          {/* Link */}
          <a className="block mt-4 text-gray-400 hover:underline" href="#">
            See previously selected vehicles
          </a>
        </div>
      </div>
    </>
  );
};

export default VehicleSelector;
