import { useState, useEffect } from "react";
// import foodfFireLogo from "../../../public/Images";
// import { FaCartArrowDown } from "react-icons/fa";

import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState(false);
  console.log("header rendered"); // just to show that button click krne pr bhi pura heeader firse render ho rha hai but bcz of reconciliation & diffing algo which use virtual DOM, react is supaa faast to render all these stuff

// if no dependency array , useeffect is called on every render
  // if dependency array is empty=[], useeffect is called only once at initial render
  // if dependecy array is [login] i.e. the login button . it will be called everytime that login button is updated
  useEffect(() => {
    console.log("useeffect called");
  }, [login]);

  return (
    <div className="header">
      <div className="logo-container">
        <a href="/">
          {/* <img className="logo" src={foodfFireLogo} alt="Tasty Trails Logo" /> */}
        </a>
      </div>

      <div className="nav-items">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li>{/* <FaCartArrowDown /> */}</li>
          <button className="login" onClick={() => setLogin(!login)}>
            {login ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
