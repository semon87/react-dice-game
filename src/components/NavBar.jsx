import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-md p-4 flex justify-center space-x-8 rounded-b-lg">
      <Link
        to="/"
        className="text-white font-bold hover:text-yellow-300 transition-colors duration-300"
      >
        Home
      </Link>
      {location.pathname !== "/play" && (
        <Link
          to="/play"
          className="text-white font-bold hover:text-yellow-300 transition-colors duration-300"
        >
          Play Game
        </Link>
      )}
    </nav>
  );
};

export default NavBar;
