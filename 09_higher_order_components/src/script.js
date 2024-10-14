import React, { lazy, Suspense } from "react";
// using suspense with lazy bcz while loading lazy component it will take some time but react is super fast so it renders before component is loaded & throws an error. so Suspense is an inbuilt compoennt given to us , & use suspense to wrap the lazy component <Suspense><Grocery/></Suspense>
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";

//chunking or code splitting or dynamic bundling or lazy loading or on-demand loading ==> these are same thing, basically mean we have to bundle our code into small chunks by splitting our code. initially we will not load a particular bundle of coad , but it will be loadd on demand i.e when clicked on that. We will do taht for our grocery component using lazy loading

// lazy given o us by react & we have to import it as named import
// lazy takes a callback function & inside that function we will import. import is a function & we will simply give the component path inside it . & also just remove/comment out the import grocery above
const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

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
        element: <Body />,
      },
      
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        // using suspense with lazy loading & by the time it loads use a fallback which will be shown on screen, this fallback can even be a shimmer UI
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        //here resId is dynamic part which will change as per address
        path: "/restraunts/:resId",

        element: <RestrauntMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
