import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="p-3 bg-white border mt-2 rounded-md text-black w-[17rem] md:w-[24%] ">
      <h1 className="text-xl font-bold">Continue Shopping Deals</h1>
      <div className=" w-[90%] mx-auto">
      <div className="flex flex-wrap justify-evenly">
        <div className="border w-[47%] p-2 mt-2">
          <Image
            className="m-0"
            src="https://kayhanaudio.com.au/wp-content/uploads/2023/02/1-Series-2-Series-M2-2015-%E2%80%93-2017-9.jpg"
            alt="Car Audio System"
            width={130}
            height={200}
          />
          <p className="font-light  text-xs">BMW headunit</p>
        </div>
        <div className="border w-[47%] p-2 mt-2">
          <Image
            className="m-0"
            src="https://kayhanaudio.com.au/wp-content/uploads/2023/02/1-Series-2-Series-M2-2015-%E2%80%93-2017-9.jpg"
            alt="Car Audio System"
            width={130}
            height={200}
          />
          <p className="font-light text-xs">BMW headunit</p>
        </div>
        <div className="border w-[47%] p-2 mt-2">
          <Image
            className="m-0"
            src="https://kayhanaudio.com.au/wp-content/uploads/2023/02/1-Series-2-Series-M2-2015-%E2%80%93-2017-9.jpg"
            alt="Car Audio System"
            width={130}
            height={200}
          />
          <p className="font-light  text-xs">BMW headunit</p>
        </div>
        <div className="border w-[47%] p-2 mt-2 text-xs">
          <Image
            className="m-0"
            src="https://kayhanaudio.com.au/wp-content/uploads/2023/02/1-Series-2-Series-M2-2015-%E2%80%93-2017-9.jpg"
            alt="Car Audio System"
            width={130}
            height={200}
          />
          <p className="font-light  text-xs">BMW headunit</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Card;