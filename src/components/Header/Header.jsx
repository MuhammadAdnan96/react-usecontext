import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "../Btn/Button";
import UserContext from "../../App";

import "./Header.css";

const Header = () =>
  //{setToken}    // prop receiving setToken
  {
    const setToken = useContext(UserContext);

    const [showBar, setShowBar] = useState(false);
    function logoutHandler() {
      setToken("");
      localStorage.clear();
    }
    function handleSearch() {
      setShowBar(!showBar);
    }
    return (
      <div>
        <nav className="navbar ">
          <div className="container-fluid">
            <h2 className="shopping">Shopping App</h2>

            {showBar && (
              <input
                className="searchBar"
                type="text"
                placeholder="Search Products"
              />
            )}

            <div className="iconSearch">
              <BsSearch
                onClick={handleSearch}
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <div className="iconCart">
              <AiOutlineShoppingCart
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <Button className="logout-btn" onClick={logoutHandler}>
              Logout
            </Button>
          </div>
        </nav>
      </div>
    );
  };
export default Header;
