import {
  SearchIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-shop.svg";

const Search = ({ cartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="" />
          </div>
          <div className="search-box f_flex">
            <SearchIcon className="icon" />
            <input
              className="search_input"
              type="text"
              placeholder="Ψάχνεις για..."
            />
          </div>
          <div className="search_categories f_flex">
            <span>Όλες οι κατηγορίες</span>
          </div>
          <div className="icon  f_flex width">
            <div className="icon-circle">
              <UserCircleIcon className="search_icons" />
            </div>
            <div className="cart icon-circle">
              <Link to="/cart">
                <ShoppingCartIcon className="search_icons f_flex" />
                <span>{cartItem.length == 0 ? "" : cartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Search;
