import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import IndustriesView from "./views/IndustriesView.jsx"
import './index.css';
import Security from './views/Security.tsx';
import BlogView from './views/BlogView';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/Security",
        element: <Security />,
    },
    {
        path: "/industries",
        element: <IndustriesView />,
    },
    {
        path: "/BlogHome",
        element: <BlogView />,
    },

    {
        path: "/*",
        element: <div>page not found, go to home:</div>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
