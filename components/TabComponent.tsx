"use client"
import React, { useState } from "react";
import { WeekHighlights } from "@/components/weekhighlights";  // Ensure this path is correct
import { products } from "@/components/Products";    // Ensure this path is correct

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabData = [
    {
      id: 1,
      label: "Linux headunit",
      content: <WeekHighlights products={products} />,
    },
    {
      id: 2,
      label: "Android stereo",
      content: <WeekHighlights products={products} />,
    },
    {
      id: 3,
      label: "Carplay stereo",
      content: <WeekHighlights products={products} />,
    },
    {
      id: 4,
      label: "Audio",
      content: <WeekHighlights products={products} />,
    },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="tabs-container ">
      <div className="tab-labels flex justify-center ">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            className={`tab-label p-4 border-b-2 ${
              activeTab === tab.id ? "border-black" : "border-transparent"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content mt-4">
        {tabData
          .filter((tab) => tab.id === activeTab)
          .map((tab) => (
            <div key={tab.id}>{tab.content}</div>
          ))}
      </div>
    </div>
  );
};

export default TabComponent;
