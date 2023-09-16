import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import UxView from "./views/UxView.tsx"
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/ux",
        element: <UxView />,
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
