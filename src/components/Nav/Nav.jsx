import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";

import "./Nav.css";

const Nav = () => {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Foodie Finds</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <>
            <Link className="navLink" to="/home">
              Home
            </Link>

            <Link className="navLink" to="/login">
              Log in/Register
            </Link>
          </>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/home">
              Home
            </Link>

            <Link className="navLink" to="/favorites">
              Favorites
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
