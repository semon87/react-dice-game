import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-300 to-purple-300">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to Dice Game!</h1>
      <p className="text-xl text-white">Click on "Play Game" to get started!</p>
    </div>
  );
}
