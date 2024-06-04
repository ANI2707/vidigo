import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  
  //Memoize the heavy operation for calculating nth prime number
  const prime = useMemo( () => findNthPrime(text),[text]);

  return (
    <div>
      <div
        className={
          `m-5 p-2 w-96 h-96 border border-black ${isDarkTheme && "bg-gray-950"}`
           
        }
      >
        <div>
          <input
            className="border border-black w-72 px-2"
            type="number"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <h1 className="mt-4 font-bold">nth Prime : {prime}</h1>
        </div>
      </div>
      <div>
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className="bg-gray-600 p-4 w-24"
        >
          Mode
        </button>
      </div>
    </div>
  );
};

export default Demo;
