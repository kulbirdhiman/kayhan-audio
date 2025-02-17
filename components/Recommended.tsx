import React from "react";
import Image from "next/image";

const Recommended = () => {
  return (
    <div className="bg-gray-100 border rounded-md p-3 shadow-lg w-full mx-2 sm:w-[150px] my-2 md:w-[167px] lg:w-1/5">
      <Image
        src="https://ik.imagekit.io/0ainyibtob/Kayhan_Audio/Website/Amplifier/4000_watt/amp40007.jpg?updatedAt=1681716121458"
        alt="Main Product"
        height={300}
        width={200}
        className="w-full rounded-lg"
      />
      <h1 className="font-bold text-sm mt-2">Android Stereo</h1>
      <p className="text-xs mt-1">Dr. Sheth's Kesar & Kojic Acid Body Lotion | Nourished, Spot-Free Skin | Men & Women | 200mL</p>
      <p className="font-bold text-sm mt-2">Price: $1234</p>
      <button className="font-bold text-center w-full my-3 bg-blue-900 p-2 rounded shadow-lg text-white">
        Buy now
      </button>
    </div>
  );
};

export default Recommended;
