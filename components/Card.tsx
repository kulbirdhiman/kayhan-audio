// components/Card.tsx
import React from "react";
import Image from "next/image";
import { TiShoppingCart } from "react-icons/ti";

// Define the types for props
interface CardProps {
  image: string;
  name: string;
  shortDescription: string;
}

const Card: React.FC<CardProps> = ({ image, name, shortDescription }) => {
  return (
    <div className="border p-3 text-center rounded-lg shadow-md">
      <Image
        className="w-full rounded-md"
        src={image}
        alt={name}
        height={200}
        width={200}
      />
      <h1 className="font-semibold text-sm mt-4">{name}</h1>
      <p className="text-sm text-gray-600 mt-2">{shortDescription}</p>
      <button className="bg-black p-3 rounded-md text-white font-serif w-full flex justify-center gap-1 mt-4">
        <TiShoppingCart className="text-white text-2xl" />
        Buy Now
      </button>
    </div>
  );
};

export default Card;
