'use client'

import { useState } from "react";

interface CartCounterProperties {
  value?:number;
}

export const CartCounter = ({value = 0}: CartCounterProperties) => {
  const [count, setCount] = useState<number>(value);
  return (
    <>
      <span className="text-9xl"> {count} </span>
      <div className="flex flex-row">
        <button
          onClick={() => setCount(count + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          +1
        </button>
        <button
          onClick={() => (count > 0) && setCount(count - 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          -1
        </button>
      </div>
    </>
  );
}