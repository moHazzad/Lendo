/* eslint-disable react/prop-types */
import { useState } from "react";

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b border-gray-300">
        <button
          className="flex justify-between items-center w-full py-4 text-left text-[#0D0F52] text-[11px]   focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{title}</span>
          <span>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 transform rotate-180 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </span>
        </button>
        {isOpen && (
          <div className="px-5 py-3  text-[11px] bg-gray-50 text-gray-400">{content}</div>
        )}
      </div>
    );
  };

const Accordion = ({ data }) => {
  return (
    <div className="w-full  mx-auto mt-5  overflow-hidden pb-40 ">
        <h1 className="text-[#0D0F52] font-bold text-[14.88px] pb-3 ">You Might Want to Know</h1>
      {data.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
