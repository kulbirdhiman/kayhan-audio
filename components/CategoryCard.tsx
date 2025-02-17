import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className=" py-2 bg-white rounded- shadow-lg mt-2 rounded-md text-black w-[17rem] md:w-[24%] ">
        {/* <div className="flex justify-between">
      <h1 className="text-lg font font-mono text-r">Audio </h1>
        
        </div> */}
      <div className=" w-[90%] mx-auto">
      <div className="flex flex-wrap justify-evenly">
        <div className=" w-[47%] shadow-md p-2 mt-2">
          <Image
            className="m-0"
            src="https://kayhanaudio.com.au/wp-content/uploads/2023/02/dashcam-scaled-1-1.jpg"
            alt="Car Audio System"
            width={130}
            height={200}
          />
          <p className="font-light  text-xs">Dash Cam</p>
        </div>
        <div className="border shadow-md w-[47%] p-2 mt-2">
          <Image
            className="m-0"
            src="https://kayhanaudio.com.au/wp-content/uploads/2023/02/DVD-2.jpg"
            alt="Car Audio System"
            width={130}
            height={200}
          />
          <p className="font-light text-xs">Rear Entertainment</p>
        </div>
        <div className="border shadow-md w-[47%] p-2 mt-2">
          <Image
            className="m-0"
            src="https://kayhanaudio.com.au/wp-content/uploads/2023/02/BMW-5-Series-F10.jpg"
            alt="Car Audio System"
            width={130}
            height={200}
          />
          <p className="font-light  text-xs">BMW headunit</p>
        </div>
        <div className=" w-[47%] shadow-md p-2 mt-2 text-xs">
          <Image
            className="m-0"
            src="https://kayhanaudio.com.au/wp-content/uploads/2023/02/mkiisz.jpg"
            alt="Car Audio System"
            width={130}
            height={200}
          />
          <p className="font-light  text-xs">BMW headunit</p>
        </div>
        <p className="text-blue-500 text-xs text-start pt-2">View more</p>
      </div>
      </div>
    </div>
  );
};

export default Card;