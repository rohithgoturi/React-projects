import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState();

  return (
    <div className=" text-white m-25 h-200 w-100 flex flex-col flex-wrap">
      <input
        className=" text-white border p-2.5 text-3xl font-extrabold bg-gray-900 text-right rounded-lg mt-10"
        placeholder="0"
        value={val}
      />

      <div className=" flex justify-evenly h-auto w-auto mt-5 ">
        <button
          value="DEL"
          onClick={(e) => {
            setVal(val.slice(0,-1));
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          DEL
        </button>

        <button
          value="AC"
          onClick={(e) => {
            setVal("");
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          AC
        </button>

        <button
          value="%"
          onClick={(e) => {
            setVal(val + e.target.value);
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          %
        </button>

        <button
          value="/"
          onClick={(e) => {
            setVal(val + e.target.value);
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          /
        </button>
      </div>

      <div className=" flex justify-evenly ">
        <button
          value="7"
          onClick={(e) => {
            setVal(val + e.target.value);
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          7
        </button>

        <button
          value="8"
          onClick={(e) => {
            setVal(val + e.target.value);
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          8
        </button>

        <button
          value="9"
          onClick={(e) => {
            setVal(val + e.target.value);
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          9
        </button>

        <button
          value="*"
          onClick={(e) => {
            setVal(val + e.target.value);
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          *
        </button>
      </div>

      <div className=" flex justify-evenly ">
        <button
          value="4"
          onClick={(e) => {
            setVal(val + e.target.value);
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          4
        </button>

        <button
          value="5"
          onClick={(e) => {
            setVal(val + e.target.value);
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          5
        </button>

        <button
          value="6"
          onClick={(e) => {
            setVal(val + e.target.value);
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          6
        </button>

        <button
          value="-"
          onClick={(e) => {
            setVal(val + e.target.value);
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          -
        </button>
      </div>

      <div className=" flex justify-evenly ">
        <button
          value="1"
          onClick={(e) => {
            setVal(val + e.target.value);
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
        1
        </button>

        <button
          value="2"
          onClick={(e) => {
            setVal(val + e.target.value);
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          2
        </button>

        <button
          value="3"
          onClick={(e) => {
            setVal(val + e.target.value);
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          3
        </button>

        <button
          value="+"
          onClick={(e) => {
            setVal(val + e.target.value);
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          +
        </button>
      </div>

      <div className=" flex justify-evenly ">
        <button
          value="00"
          onClick={(e) => {
            setVal(val + e.target.value);
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          00
        </button>

        <button
          value="0"
          onClick={(e) => {
            setVal(val + e.target.value);
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          0
        </button>

        <button
          value="."
          onClick={(e) => {
            setVal(val + e.target.value);
          }}
          className=" bg-gray-700 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          .
        </button>

        <button
          value="="
          onClick={(e) => {
            setVal(eval(val));
          }}
          className=" bg-amber-500 m-2 p-5 w-20 text-2xl rounded-lg hover:bg-gray-500 "
        >
          =
        </button>
      </div>
    </div>
  );
};

export default App;
