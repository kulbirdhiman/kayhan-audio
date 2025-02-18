"use client";
import { useState } from "react";
import Discription from "./Discription";
import ReviewForm from "./ReviewInput";

import Demmovideo from "./Demmovideo";
import Specification from "@/components/Specification";

// Tab components
const Tab = ({ label, onClick, isActive }: { label: string; onClick: () => void; isActive: boolean }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 text-lg font-medium ${isActive ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"} hover:text-blue-600`}
    >
      {label}
    </button>
  );
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabLabels = ["Description", "Demo Video", "Specification", "Review"]; // Your tab labels
  const tabContents = [<Discription />, <Demmovideo />, <Specification />, <ReviewForm />]; // Corresponding content for each tab

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-lg mt-8">
      {/* Tab Header */}
      <div className="flex justify-between border-b-2 border-gray-200 mb-4">
        {tabLabels.map((label, index) => (
          <Tab key={index} label={label} onClick={() => handleTabClick(index)} isActive={index === activeTab} />
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {tabContents[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
