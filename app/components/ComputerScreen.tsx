import React from "react";

const ComputerScreen = ({ computerBgImage }: { computerBgImage: string }) => {
  return (
    <div>
      <div className="flex gap-2 items-center w-[80vw] md:w-[50vw] lg:w-[40vw] xl:w-[466px] xl:h-[20px] border-4 border-black mx-auto aspect-auto">
        <div className="ms-2 w-2 h-2 rounded-full bg-black"></div>
        <div className="w-2 h-2 rounded-full bg-black"></div>
        <div className="w-2 h-2 rounded-full bg-black"></div>
      </div>
      <div className={` w-[80vw] md:w-[50vw] lg:w-[40vw] md:h-[30vh] h-[20vh]  xl:w-[466px] xl:h-[315px] border-x-4 border-b-4 border-black mx-auto ${computerBgImage}`}></div>
    </div>
  );
};

export default ComputerScreen;
