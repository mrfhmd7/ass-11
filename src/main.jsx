import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import ContextApi from "./ContextApi/ContextApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
      <ContextApi>
        <RouterProvider router={router} />
      </ContextApi>
    </div>
  </React.StrictMode>
);
