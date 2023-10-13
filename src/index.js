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
import BlogPost from './views/components/blog/BlogPost';
import Navbar from './sections/navbar/navbar';
import Footer from './sections/footer/footer';




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
        element: <BlogArticle component={BlogPost}/>,
    },
    {
        path: "/BlogHome",
        element: <BlogView  />,
    },
    
    {
        path: "/*",
        element: <div>page not found, go to home:</div>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Navbar/>
        <RouterProvider router={router} />
        <Footer/>
    </React.StrictMode>
);
