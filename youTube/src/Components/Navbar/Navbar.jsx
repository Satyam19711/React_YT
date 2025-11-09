import React, { useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/Youtube-logo.png";
import search_icon from "../../assets/search.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/Profile-Photo.png";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar, setSearchTerm, setIsSearching }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() === "") return;
    setSearchTerm(input);
    setIsSearching(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => !prev)}
          src={menu_icon}
          alt="menu"
        />
        <Link to="/">
          <img className="logo" src={logo} alt="YouTube logo" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input
            type="text"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <img src={search_icon} alt="search" onClick={handleSearch} />{" "}
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={more_icon} alt="more" />
        <img src={notification_icon} alt="notifications" />
        <img className="user-icon" src={profile_icon} alt="profile" />
      </div>
    </nav>
  );
};

export default Navbar;
