/* eslint-disable no-unreachable */
import { ArrowSmRightIcon, ViewGridIcon } from "@heroicons/react/outline";
import React from "react";
import TopCart from "./TopCart";
import "./Style.css";

const TopCate = () => {
  return (
    <>
      <section className="topCat background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <ViewGridIcon className="search_icons cate-icon" />
              <h2 className="h2_title">Top Categories</h2>
            </div>
            <div className="heading-right row f_flex">
              <span>View all</span>
              <ArrowSmRightIcon className="search_icons cate-icon" />
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  );
};
export default TopCate;
