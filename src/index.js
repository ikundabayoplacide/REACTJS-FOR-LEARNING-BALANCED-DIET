import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Product from './Pages/product';
import BalancedService from './Pages/BalancedService';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Protein from './Pages/Page';
import Buy from'./Pages/Buy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Products",
    element: <Product/>,
  },
  {
    path: "/Services",
    element: <BalancedService/>,
  },
  {
    path: "/Pages",
    element: <Protein/>,
  },
  {
    path: "/Buy",
    element: <Buy/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router}/>
  
);
reportWebVitals();
