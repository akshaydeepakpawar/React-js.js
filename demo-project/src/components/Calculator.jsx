import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const display = (value) => setInput((input) => input + value);
  const calculate = () => setInput(String(eval(input)));
  const clear = () => setInput("");

  return (
    <form className="w-64 mx-auto mt-10 p-4 bg-white shadow-lg rounded-xl flex flex-col gap-3">
      <input
        type="text"
        value={input}
        readOnly
        className="w-full p-3 text-right text-xl border rounded-md bg-gray-100"
      />

      <div className="grid grid-cols-4 gap-3 text-center text-lg font-semibold">

        <span
          onClick={clear}
          className="py-3 bg-red-400 text-white rounded-md cursor-pointer active:scale-95 col-span-2"
        >
          C
        </span>

        <span
          onClick={() => display("/")}
          className="py-3 bg-blue-400 text-white rounded-md cursor-pointer active:scale-95"
        >
          /
        </span>

        <span
          onClick={() => display("*")}
          className="py-3 bg-blue-400 text-white rounded-md cursor-pointer active:scale-95"
        >
          *
        </span>


        <span onClick={() => display("7")} className="btn">7</span>
        <span onClick={() => display("8")} className="btn">8</span>
        <span onClick={() => display("9")} className="btn">9</span>

        <span
          onClick={() => display("-")}
          className="py-3 bg-blue-400 text-white rounded-md cursor-pointer active:scale-95"
        >
          -
        </span>


        <span onClick={() => display("4")} className="btn">4</span>
        <span onClick={() => display("5")} className="btn">5</span>
        <span onClick={() => display("6")} className="btn">6</span>

        <span
          onClick={() => display("+")}
          className="py-3 bg-blue-400 text-white rounded-md cursor-pointer active:scale-95 row-span-2"
        >
          +
        </span>
        
        <span onClick={() => display("1")} className="btn">1</span>
        <span onClick={() => display("2")} className="btn">2</span>
        <span onClick={() => display("3")} className="btn">3</span>

        <span onClick={() => display("0")} className="btn">0</span>
        <span onClick={() => display("00")} className="btn">00</span>
        <span onClick={() => display(".")} className="btn">.</span>

        <span
          onClick={calculate}
          className="py-3 bg-green-500 text-white rounded-md cursor-pointer active:scale-95"
        >
          =
        </span>
      </div>
    </form>
  );
};

export default Calculator;
