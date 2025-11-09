import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import bears from "../../assets/bears.png";
import facts from "../../assets/Facts.png";
import fly from "../../assets/fly.png";
import aaj from "../../assets/aaj.png";
import indian from "../../assets/Indian.png";

const Sidebar = ({ sidebar, category, setCategory, setSidebar }) => {
  const handleClick = (cat) => {
    setCategory(cat);
    setSidebar(false);
  };
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <img src={home} alt="" />
          <p>Home</p>
        </div>

        <div
          className={`side-link ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>

        <div
          className={`side-link ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <img src={automobiles} alt="" />
          <p>Automobiles</p>
        </div>

        <div
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>

        <div
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>

        <div
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <img src={tech} alt="" />
          <p>Technology</p>
        </div>

        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <img src={music} alt="" />
          <p>Music</p>
        </div>

        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <img src={blogs} alt="" />
          <p>Blogs</p>
        </div>

        <div
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <img src={news} alt="" />
          <p>News</p>
        </div>
        <hr />

        <div className="subscribed-list">
          <h3>Subscribed</h3>
          <div className="side-link">
            <img src={bears} alt="" />
            <p>BeerBiceps</p>
          </div>

          <div className="side-link">
            <img src={facts} alt="" />
            <p>FactTechz</p>
          </div>

          <div className="side-link">
            <img src={fly} alt="" />
            <p>Flying Beast</p>
          </div>

          <div className="side-link">
            <img src={aaj} alt="" />
            <p>Aaj Tak</p>
          </div>

          <div className="side-link">
            <img src={indian} alt="" />
            <p>Mr. Indian Hacker</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
