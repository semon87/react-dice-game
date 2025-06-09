import React, { useState } from "react";

const First = () => {
  const [board, setBoard] = useState([1, 2, 3, 4, 5, 6]);
  const [sum, setSum] = useState(0);
  const [randomVar, setRandomvar] = useState(0);

  function resetGame() {
    setSum(0);
    setRandomvar(0);
  }

  function handleClick(index) {
    const randomNum = Math.floor(Math.random() * 6 + 1);
    setRandomvar(randomNum);
    if (randomNum === board[index]) {
      setSum(sum + randomNum + board[index]);
    } else {
      setSum(sum - randomNum);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 to-pink-400">
      <h1 className="text-4xl font-bold text-white mb-6">🎲 Play Dice Game 🎲</h1>
      <p className="text-white mb-4">Try your luck by clicking a dice!</p>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {board.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            {value}
          </button>
        ))}
      </div>
      <div className="text-center text-white mb-4">
        <h2 className="text-2xl">Points: <span className="font-bold">{sum}</span></h2>
        <h2 className="text-2xl">Random Number: <span className="font-bold">{randomVar}</span></h2>
      </div>
      <button
        onClick={resetGame}
        className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700 transition-colors duration-300"
      >
        Reset Game
      </button>
    </div>
  );
};

export default First;
