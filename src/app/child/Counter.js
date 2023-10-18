import React from "react";

export default function Counter({ handleInc, handleDec,handleReset, num }) {
  return (
    <>
    <div className="justify-center mx-auto my-6 mt-20 flex" >
      <button
        onClick={handleDec}
        className="text-4xl mx-20 bg-white h-32 w-40 text-black rounded hover:bg-red-400 hover:text-white "
        >
        Dec
      </button>
      <label className="text-8xl w-40 text-center">{num}</label>
      <button
        onClick={handleInc}
        className="bg-white mx-20 w-40 h-32 text-black rounded hover:bg-green-400 hover:text-white text-4xl "
        >
        Inc
      </button>
    </div>
    <div className="text-center mx-auto  " >
    <button
        onClick={handleReset}
        className="bg-white mx-20 w-1/4 h-32 text-black rounded hover:bg-sky-400 hover:text-white text-4xl "
        >
        Reset
      </button>
    </div>
        </>
  );
}
