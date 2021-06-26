import { Avatar } from "@material-ui/core";
import {
  Explore,
  FavoriteBorder,
  Home,
  Search,
  Send,
} from "@material-ui/icons";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          className="header__logoImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram-beta"
        />
      </div>

      <div className="header__search">
        <Search />
        <input className="header__searchInput" type="text" placeholder="Search" />
      </div>

      <div className="header__right">
        <Home />
        <Send />
        <Explore />
        <FavoriteBorder />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
