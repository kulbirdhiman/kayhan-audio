"use client";

import React from "react";

interface CustomAuthProps {
  name: string;
  value: string;
  placeholder: string;
  error?: string;
  label: string;
  onChange: (name: string, value: string) => void;
}

const CustomAuth: React.FC<CustomAuthProps> = ({
  name,
  value,
  placeholder,
  error,
  label,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-lg font-medium">{label}</label>
      <input
        type="text"
        name={name}
        className="mt-1 block w-1/ border rounded-lg py-2 px-3 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CustomAuth;
