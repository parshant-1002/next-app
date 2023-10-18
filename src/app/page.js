"use client";
import Counter from "./child/Counter";
import { useState } from "react";

export default function Home() {
  const [num, setNum] = useState(0);
  const handleDec = () => {
    if(num>0){
      setNum((prevNum) => prevNum - 1);
    }
  };
  const handleInc = () => {
    setNum((prevNum) => prevNum + 1);
  };
  const handleReset = () => {
    setNum(0);
  };
  return (
    <div>
      <div className="w-100 text-center text-4xl">Hello I am counter</div>
      <Counter
        num={num}
        handleDec={handleDec}
        handleInc={handleInc}
        handleReset={handleReset}
      />
    </div>
  );
}
