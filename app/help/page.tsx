"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const AccordionItem = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 bg-gray-100 hover:bg-gray-200 transition"
      >
        <span className="text-lg font-semibold">{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-4 text-gray-700">{content}</div>
      </motion.div>
    </div>
  );
};

const Accordion = () => {
  const items = [
    { title: "What is Next.js?", content: "Next.js is a React framework for building fast web applications." },
    { title: "What is Tailwind CSS?", content: "Tailwind CSS is a utility-first CSS framework for styling applications." },
    { title: "Why use Framer Motion?", content: "Framer Motion provides easy-to-use animations and transitions in React apps." },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
