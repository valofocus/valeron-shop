import { ArrowSmRightIcon, ViewGridIcon } from "@heroicons/react/outline";
import React from "react";
import Cart from "./Cart";
import "./style.css";

const NewArrivals = () => {
  return (
    <>
      <section className="newarrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" />
              <h2 className="h2_title">New Arrivals</h2>
            </div>
            <div className="heading-right row f_flex">
              <span>View all</span>
              <ArrowSmRightIcon className="search_icons cate-icon" />
            </div>
          </div>
          <Cart />
        </div>
      </section>
    </>
  );
};
export default NewArrivals;
