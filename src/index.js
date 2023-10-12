import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import IndustriesView from "./views/IndustriesView.jsx"
import './index.css';
import Security from './views/Security.tsx';
import BlogView from './views/BlogView';
import BlogArticle from './views/components/blog/Blog/BlogArticle';




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
        path: "/BlogArticle",
        element: <BlogArticle />,
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
