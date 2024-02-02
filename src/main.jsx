import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import AutoInvest from './components/mainBody/pages/autoInvest/AutoInvest.jsx';
import Overview from './components/mainBody/pages/overview/Overview.jsx';
import Invest from './components/mainBody/pages/invest/Invest.jsx';
import MyPortfolio from './components/mainBody/pages/myPortfolio/MyPortfolio.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <AutoInvest />,
      },
      {
        path: "/Overview",
        element: <Overview />,
      },
      {
        path: "/invest",
        element: <Invest />,
      },
      {
        path: "/myPortfolio",
        element: <MyPortfolio /> ,
      },
]}    
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
