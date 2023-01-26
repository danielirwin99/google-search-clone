import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Logo from "../assets/google-logo.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
          {/* Avatar */}
        </div>
      </div>

      <div className="home__body">
        <img src={Logo} alt="" className="google__logo" />
        <div className="home__inputContainer">
          
        </div>
      </div>
    </div>
  );
};

export default Home;