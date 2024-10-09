import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestrauntMenu from './components/RestrauntMenu';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";



const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>NagDevta</strong>
      </p>
    </footer>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      
      {/* here as per the approuter defined below , the children router will be loaded is the Outlet as & when particular path will be called keeping header & footer loaded in every page */}
      <Outlet />
      
      <Footer />
    </div>
  );
};

// this createbrowser takes a list of paths, every path is object
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // the childer router will be loaded as per the path  
    children: [ 
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        //here resId is dynamic part which will change as per address
        path: "/restraunts/:resId", 
        
        element: <RestrauntMenu />,
      }
    ],
    errorElement: <Error />
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);