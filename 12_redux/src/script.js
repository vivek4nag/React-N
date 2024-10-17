import React, { lazy, Suspense, useEffect, useState } from "react";
// using suspense with lazy bcz while loading lazy component it will take some time but react is super fast so it renders before component is loaded & throws an error. so Suspense is an inbuilt compoennt given to us , & use suspense to wrap the lazy component <Suspense><Grocery/></Suspense>
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux"; //  provider fives a bridge btw redux & react hence coming from react-redux, but in appstore.js, configureStore is related to creation of store inside redux hence that was imported from redux toolkit
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

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
  // suppose koi authentication API hai & wo user Info de rha
  const [userName, setUserName] = useState();

  // Authetication API call
  useEffect(() => {
    //making API call & getting data, suppose we are getting below dummy data
    const data = {
      name: "Nagdevta Vivek ",
    };
    setUserName(data.name);
  }, []);

  return (
    // the .provider(Not the <Provider> of redux which provides the redux store to all elments ) used to make data or state available to all components in the component tree that consume the context. it wraps a portion of component tree(here the whole header to footer bcz userName is needed everywhere) and provides the context value to the components inside it. below we are using provider & passing a value which will overwrite the default value
    // hum nested way me bhi use kr skte like pure app ko humne ek UserContext.provider se wrap kiya hai & then heeader ko aur ek UserContext.provider se wrap kiya hai. so header me naam hoga jo hum pass krenge, baaki har jagh Timcook naam hoga

    // the Provider of redux takes the Store (in our case appStore) as the props which is the redux store. & this Provider wraps the whole application. So just like ContextProvider, jis bhi component ko redux ka access dena hai, usko <Provider > me wrap kr do

    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          {/* <UserContext.Provider value={{ loggedInUser:"Tim Cook" }}> */}
          <Header />
          {/* </UserContext.Provider> */}

          {/* here as per the approuter defined below , the children router will be loaded is the Outlet as & when particular path will be called keeping header & footer loaded in every page */}
          <Outlet />

          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
