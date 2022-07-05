import React, { useState } from "react";
import {
  HeartIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count = 1));
  };

  return (
    <>
        {shopItems.map((shopItems) => {
          return (
            <div className="box">
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{shopItems.discount}% OFF</span>
                  <img src={shopItems.cover} alt="" />
                  <div className="product-like">
                    <label>0</label>
                    <br />
                    <HeartIcon
                      className="search_icons flash_deal_icons"
                      onClick={increment}
                    />
                  </div>
                </div>
                <div className="product-details">
                  <h3>{shopItems.name}</h3>
                  <div className="rate">
                    <StarIcon className="search_icons flash_deal_icons" />
                    <StarIcon className="search_icons flash_deal_icons" />
                    <StarIcon className="search_icons flash_deal_icons" />
                    <StarIcon className="search_icons flash_deal_icons" />
                    <StarIcon className="search_icons flash_deal_icons" />
                  </div>
                  <div className="price">
                    <h4>{shopItems.price},00 €</h4>
                    <button>
                      <PlusIcon
                        className="search_icons flash_deal_icons"
                        onClick={() => addToCart(shopItems)}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default ShopCart;
