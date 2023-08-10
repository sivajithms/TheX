import React, { useState } from "react";
import "./App.css";
const words = [
  "apple",
  "banana",
  "orange",
  "grape",
  "pineapple",
  "strawberry",
  "blueberry",
  "watermelon",
  "kiwi",
  "mango"
];
function App() {
  const [text, setText] = useState("");

  return (
    <div className="container p-16">
      <label className="block mb-2 text-sm font-medium text-gray-600">
        Enter Text
      </label>
      <textarea
        className="w-full px-3 py-2 border rounded-sm focus:ring focus:ring-blue-300"
        rows="4"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="flex justify-end mt-4">
        <button className="bg-green-700 text-white px-8 py-2 rounded-sm">
          Submit
        </button>
      </div>
      <h1 className="pt-8 font-bold	text-xl	">Result</h1>
      <div className="flex flex-wrap	 h-44 flex-col">
        {words?.map((word)=>{
          return (
            <div className="p-8">{word}</div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
