import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { About, Contact, Home, NotFound, UserProfile } from './Page';
import Layout from './Layout';






const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "user/:userId",
                element: <UserProfile/>
            },
            {
                path: "*",
                element: <NotFound/>
            },

        ]
    }
])


const RouterDemo = () => {
    return (
        <div>
            <RouterProvider router={router}   />         
        </div>
    );
};

export default RouterDemo;