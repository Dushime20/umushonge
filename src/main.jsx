import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import Home from './page/home/Home';
import Layout from './page/layout/layout';



const router = createBrowserRouter([
  {
    path: "/",
    element: < Layout/>,
    children: [
    {path : "/",
      element: <Home/>
    }
    ]
  },
  
  
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
