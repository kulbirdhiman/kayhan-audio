// pages/index.js
import React from "react";
import TabComponent from "../components/TabComponent";
import SliderComponent from "@/components/SliderComponent";
import { Kaisei_HarunoUmi } from "next/font/google";
import Recommended from "@/components/Recommended";
import VehicleSelector from "@/components/VehicleSelector";
import ProductPage from "@/components/ProductsSection";
import Card from "@/components/CategoryCard";
 import Footer from '@/components/Footer'
const kaiseiHarunoUmi = Kaisei_HarunoUmi({ subsets: ["latin"], weight: "400" });

const Home = () => {
  return (
    <div className="">
      {/* Slider Component */}
      <SliderComponent />

      {/* This Week's Highlights Section */}
      <h1 className={`${kaiseiHarunoUmi.className} my-4 text-center text-3xl`}>
        This Week's Highlights
      </h1>
      <TabComponent />

      {/* Recommended Products Section */}
      <section className="w-full xl:w-[90%] mx-auto p-4">
        <h1 className="text-center font-bold text-3xl my-4">Recommended Products</h1>
        <div className="sm:flex wrap overflow-x-auto justify-evenly my-3">
          <Recommended />
          <Recommended />
          <Recommended />
          <Recommended />
        </div>
      </section>

      {/* Vehicle Selector Section */}
      <VehicleSelector />

      {/* Audio Equipment Section */}
      <h1 className={`${kaiseiHarunoUmi.className} my-4 text-center text-3xl`}>
        Audio Equipments
      </h1>
     <div className="mt-3 overflow-hidden h-full">
     <ProductPage />
     </div>

      {/* Category Cards (Optional) */}
      <div className=" w-[80%] mx-auto flex flex-wrap  justify-around my-6">
        {/* Uncomment and add actual cards */}
        <Card /> <Card /> <Card /> <Card />
        {/* <h1 className="text-center text-xl font-bold">hello</h1>  */}
      </div>
             <Footer />    
    </div>
  );
};

export default Home;
