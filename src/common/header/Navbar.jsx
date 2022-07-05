import React from "react";
import {
  ViewGridIcon,
  ChevronDownIcon,
  MenuAlt1Icon,
  XIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="categories d_flex LText">
            <ViewGridIcon className="icons" />
            <h4> Κατηγορίες </h4>
            <ChevronDownIcon className="icons" />
          </div>

          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex "
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">Αρχική</Link>
              </li>
              <li>
                <Link to="/pages">Σελίδες</Link>
              </li>
              <li>
                <Link to="/user">Λογαρισμός</Link>
              </li>
              <li>
                <Link to="/vendor">Προμηθευτή</Link>
              </li>
              <li>
                <Link to="/track">Παραγγελίες μου</Link>
              </li>
              <li>
                <Link to="/contact">Επικοινωνία</Link>
              </li>
            </ul>
            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <XIcon className="head-i close home-btn" />
              ) : (
                <MenuAlt1Icon className="head-i open" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
