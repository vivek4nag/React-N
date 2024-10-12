import { useState, useEffect } from "react";
// import foodfFireLogo from "../../../public/Images";
// import { FaCartArrowDown } from "react-icons/fa";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("header rendered"); // just to show that button click krne pr bhi pura heeader firse render ho rha hai but bcz of reconciliation & diffing algo which use virtual DOM, react is supaa faast to render all these stuff

  // using the online wala custom hook to checkk ki online or offline
  const onlineStatus = useOnlineStatus();

  // if no dependency array , useeffect is called on every render
  // if dependency array is empty=[], useeffect is called only once at initial render
  // if dependecy array is [login] i.e. the login button . it will be called everytime that login button is updated
  useEffect(() => {
    console.log("useeffect called");
  }, [isLoggedIn]);

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          {/* <img className="logo" src={foodfFireLogo} alt="Tasty Trails Logo" /> */}
        </Link>
      </div>

      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅✅" : "🔴🔴"}</li>
          <li>
            <Link className="nav-links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/grocery">
              Grocery
            </Link>
          </li>
          {/* <li><Link className="nav-links"><FaCartArrowDown /></Link></li> */}
          <button className="login" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
