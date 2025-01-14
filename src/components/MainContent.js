//Body Component 
import React from 'react'
import Login from './Login'; // Ensure this path matches your folder structure
import Browse from './Browse'; // Ensure this path matches your folder structure
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const MainContent = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>, 
        },
        {
            path: "/browse",
            element: <Browse/>,
        },
    ])
    return (
        <div>
          <RouterProvider router={appRouter}/>
        </div>
      );
};

export default MainContent