import { useState } from "react";


const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <label className="flex items-center cursor-pointer">
        <div className="mr-4 text-[8.68px] text-gray-400">
        {isActive ? 'Active' : 'Inactive'}
      </div>
      <div className="relative">
        <input type="checkbox" id="toggle" className="sr-only" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />
        <div className={`block  ${isActive ? 'bg-green-400' : 'bg-gray-400'} w-10 h-5 rounded-full`}></div>
        <div className={`dot absolute left-1 top-0.5  w-4 h-4 rounded-full transition ${isActive ? 'transform translate-x-full bg-white' : 'bg-white'}`}></div>
      </div>
    
    </label>
  );
};

export default ToggleButton;
