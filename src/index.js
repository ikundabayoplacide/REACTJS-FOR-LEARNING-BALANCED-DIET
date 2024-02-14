import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Fruit from './Pages/Fruit';
import BalancedService from './Pages/BalancedService';
import { createBrowserRouter, RouterProvider,Router} from "react-router-dom";
import Protein from './Pages/Protein';
import Buy from'./Pages/Buy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Products",
    element: <Fruit/>,
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
