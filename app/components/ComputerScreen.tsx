import React from "react";

const ComputerScreen = () => {
  return (
    <div>
      <div className="flex gap-2 items-center w-[80vw] md:w-[466px] md:h-[20px] border-4 border-black mx-auto">
        <div className="ms-2 w-2 h-2 rounded-full bg-black"></div>
        <div className="w-2 h-2 rounded-full bg-black"></div>
        <div className="w-2 h-2 rounded-full bg-black"></div>
      </div>
      <div className="w-[80vw] h-[20vh]  md:w-[466px] md:h-[315px] border-x-4 border-b-4 border-black mx-auto"></div>
    </div>
  );
};

export default ComputerScreen;
