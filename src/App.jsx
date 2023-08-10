import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [repeatedWords, setRepeatedWords] = useState([]);
  const [wordCount, setWordCount] = useState({});

  const handleSubmission = () => {
    const words = text.split(/\s+/); 
    const newWordCount = {};

    words.forEach((word) => {
      word = word.toLowerCase();
      if (newWordCount[word]) {
        newWordCount[word]++;
      } else {
        newWordCount[word] = 1;
      }
    });

    const sortedWords = Object.keys(newWordCount).sort((a, b) => newWordCount[b] - newWordCount[a]);

    setRepeatedWords(sortedWords);
    setWordCount(newWordCount); 
  };

  return (
    <div className="container p-4 md:p-16 lg:px-32">
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
        <button
          className="bg-green-700 text-white px-8 py-2 rounded-sm"
          onClick={handleSubmission}
        >
          Submit
        </button>
      </div>
      <h1 className="pt-8 font-bold text-xl">Result</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        {repeatedWords.map((word, index) => (
          <div key={index} className="p-2 rounded-lg ">
            {word && (
              <>
                {word} ({wordCount[word] || 0})
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
