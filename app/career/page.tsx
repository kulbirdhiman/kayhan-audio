import React from "react";
import Image from "next/image";
const Carrer = () => {
  return (
    <>
      <section className="w-[80%] mx-auto p-3">
        <h1 className="text-3xl text-center font-mono">Careers</h1>
        <div className="w-[150px] bg-red-500 border border-red-500 mx-auto"></div>
        {/* main */}
        <div className="flex mt-8">
          <div className="xl:w-1/2 ">
            <h1 className="text-2xl font-serif">Mechanical Engineer</h1>
            <p className="text-xs">Number of positions available – 01</p>
            <h3 className="font-bold mt-4">About the Job</h3>
            <p className="text-sm">Provide mechanical designs and drawings from design team plans related to Automotive Industry, develop workable prototypes, liaise with manufacturing facilities, develop appropriate documentation and oversee testing procedures all as required.</p>
            <h3 className="font-bold mt-4">Knowledge:</h3>
            <li className="text-xs">Familiar with product design software</li>
            <li className="text-sm">A sound understanding of the product design cycle</li>
            <h3 className="font-bold mt-4">Qualifications:</h3>
            <li className="text-sm">Bachelor’s degree in Mechanical engineering.</li>
            <h3 className="font-bold mt-4">Experience:</h3>
            <li className="text-sm">minimum 2 years.</li>
            <h3 className="font-bold mt-4">Your key responsibilities will include:</h3>
            <li className="text-xs">Product development; research, collaborative concept testing & validation.</li>
            <li className="text-xs">Sourcing technology, testing it and exploring how to integrate it into a product</li>
            <li className="text-xs">Working with technology & software teams to implement technology solutions</li>
            <li className="text-xs">Creating robust programs to test prototype systems before the scale</li>
            <li className="text-xs">Designing for International compliance standards for safety, EMC, etc</li>
            <li className="text-xs">FEA, structural design, and VE Engineering through material reduction/selection</li>
            <li className="text-xs">Leading Engineering practices with international partners</li>
            <li className="text-xs">Research and engagement in emerging digital technology</li>
            <li className="text-xs">Contributing to team culture and helping craft new ways of working.</li>

          </div>
          <Image
            className="hidden xl:block xl:w-1/2 h-[30rem] shadow-md shadow-black rounded-md "
            src="https://kayhanaudio.com.au/wp-content/uploads/2024/05/about-us-kayhan-audio-what-do-we-supply.jpg"
            alt="Kayhan Audio introduction"
            width={800}
            height={350}
          />
        </div>
            <h2 className="font-bold mt-3" >This is a full-time permanent opportunity based at our Port Melbourne Branch located near Westgate Bridge.</h2>
            <p className="text-xs">If you are interested in joining a progressive company with significant growth, send your resume to careers@kayhanaudio.com.au today!</p>
      </section>
    </>
  );
};

export default Carrer;
