import { ArrowSmRightIcon } from "@heroicons/react/outline";
import React from "react";
import Catg from "./Catg";
import ShopCart from "./ShopCart";
import "./Style.css";

const Shop = ({ shopItems, addToCart }) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <Catg />
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row f_flex">
                <h2 className="h2_title">Mobile Phones</h2>
              </div>
              <div className="heading-right row f_flex">
                <span>View all</span>
                <ArrowSmRightIcon className="search_icons cate-icon" />
              </div>
            </div>
            <div className="product-content grid1">
              <ShopCart shopItems={shopItems} addToCart={addToCart} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Shop;
