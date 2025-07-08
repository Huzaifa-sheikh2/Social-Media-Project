import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter } from "react-router";
import App from "./app";
import Createpost from "./Components/Createpost.jsx";

const router = createBrowserRouter([
  {path: "/", element: <App/>}
  {path:"create-post", element: <Createpost/>}
])
console.log(createBrowserRouter)
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter router={router}>
    <App />
  </BrowserRouter>
);
