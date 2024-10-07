import { LOGO_URL } from "../utils/constant";
// using named import/export hence writting in curly braces

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src= {LOGO_URL} // bcz logourl is already a const varable in JS hence we write in curly braces
            alt="App Logo"
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header