import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostUser from './assets/components/PostUser.jsx';
import DisplayUser from './assets/components/DisplayUser.jsx';
import UpdateData from './assets/components/UpdateData.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostUser></PostUser>,
  },
  {
    path:'/users',
    element:<DisplayUser></DisplayUser>,
    loader:()=>fetch(`http://localhost:3000/users`)
  },
  {
    path:'/users/:id',
    element:<UpdateData></UpdateData>,
    loader:(params)=> fetch(`http://localhost:5173/users/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
