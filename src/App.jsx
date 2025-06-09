import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./components/First";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./index.css"; // Ensure you have Tailwind CSS imported

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <Home />
      </div>
    )
  },
  {
    path: "/play",
    element: (
      <div>
        <NavBar />
        <First />
      </div>
    )
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
