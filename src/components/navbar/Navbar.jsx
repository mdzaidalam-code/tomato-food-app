import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("mobile-app");
  const {calculateTotal} = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to='/' className="logo">
      <img src={assets.logo} alt="" />
      </Link>
      <ul className="navbar-menu">
        <Link to='/'
          onClick={() => setMenu("home")}
          className={menu == "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu == "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu == "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu == "contact us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <Link to="/c" className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className={calculateTotal() > 0 ? "dot" : ""} ></div>
        </Link>
        <button onClick={() => setShowLogin(true)} className="signin">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
