import { ArrowSmRightIcon } from "@heroicons/react/outline";
import React from "react";
import Dcard from "./Dcard";

const Discount = () => {
  return (
    <>
      <section className="background newarrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <img src="https://img.icons8.com/windows/32/fa314a/gift.png" />
              <h2 className="h2_title">Big Discounts</h2>
            </div>
            <div className="heading-right row f_flex">
              <span>View all</span>
              <ArrowSmRightIcon className="search_icons cate-icon" />
            </div>
          </div>
          <Dcard/>
        </div>
      </section>
    </>
  );
};
export default Discount;
