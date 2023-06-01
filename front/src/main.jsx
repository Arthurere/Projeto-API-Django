import React from 'react'
import ReactDOM from 'react-dom/client'
import Cadastro from './routes/Cadastro.jsx'
import './index.css'
import Login from './routes/Login.jsx'
import Menu from './routes/menu.jsx'
import Home from './routes/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './routes/root.jsx'
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/1",
    element: <Cadastro />,
  },
  {
    path: "contacts/2",
    element: <Menu />,
  },
  {
    path: "contacts/3",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
