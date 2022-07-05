import React from "react";
import FlashCard from "./FlashCard";
import { LightningBoltIcon } from "@heroicons/react/outline";

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className="flash background">
        <div className="container">
          <div className="heading f_flex">
            <LightningBoltIcon className="search_icons" />
            <h1 className="h2_title">Flash Deals</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};
export default FlashDeals;
