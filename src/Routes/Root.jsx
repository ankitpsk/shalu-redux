import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import RandomPin from "../Pages/Redux/RandomPin";
import RandomPinView from "../Pages/Redux/RandomPinView";

// All Application Routes
const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "redux", element: <RandomPin /> },
    { path: "redux-view", element: <RandomPinView /> },
]);

const Root = () => <RouterProvider router={router} />

export default Root;