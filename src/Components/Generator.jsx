import React from "react";
import { useEffect, useState } from "react";

export const Generator = () => {
  const [input, setinput] = useState("");
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [symbolAllowed, setsymbolAllowed] = useState(false);
  const [length, setlength] = useState(6);
  const passGenerator = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let symbol = "~`!@#$^&*()_-+{}[]?/<>";
    let number = "1234567890";
    if (numberAllowed) {
      str += number;
    }
    if (symbolAllowed) {
      str += symbol;
    }
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      const char = str.charAt(index);
      pass += char;
    }
    setinput(pass);
    console.log(pass);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(input).then(() => {
      alert('Text copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };
  useEffect(() => passGenerator(), [length, numberAllowed, symbolAllowed]);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-blue-300">
       
      <div className="w-full m-40  ">
       <h1 className="font-extrabold text-center text-5xl p-10">PASSWORD GENERATOR!</h1>
      <div className="w-full flex justify-center"> 
        <input
          className="border rounded-s-lg p-3 w-1/2"
          type="text"
          value={input}
          name="input"
          onChange={(e) => setinput(e.target.value)}
        ></input>
        <button onClick={handleCopy} className="border rounded-e-lg p-3 bg-blue-600 "> Copy</button>
      </div>

      <div>
        <div>
          <div className="w-full flex justify-center items-center flex-col p-7 gap-2 ">
            <input
              type="range"
              value={length}
              min={6}
              max={50}
              onChange={(e) => setlength(e.target.value)}
              name="length"
              className="w-1/3 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <label htmlFor="length" className="block mb-2 text-sm font-medium">
              length:{length}
            </label>
          </div>
           
          
        </div>
        <div className="flex w-full gap-12 justify-center items-center text-xl">
            <div><input
            type="checkbox"
            name="numbers"
            className="mx-2 w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onClick={() => setnumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numbers">Numbers</label></div>
          <div><input
            className="mx-2 w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox"
            name="symbol"
            onClick={() => setsymbolAllowed((prev) => !prev)}
          />
          <label htmlFor="symbol">Symbol</label></div>
          
        </div>
      </div>
      </div>
    </div>
  );
};
