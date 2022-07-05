import React, { useState } from "react";
import {
  HeartIcon,
  PlusIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <ChevronRightIcon className="search_icons" />
      </button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <ChevronLeftIcon className="search_icons" />
      </button>
    </div>
  );
};
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count = 1));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div className="box">
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{productItems.discount}% OFF</span>
                  <img src={productItems.cover} alt="" />
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
                  <h3>{productItems.name}</h3>
                  <div className="rate">
                    <StarIcon className="search_icons flash_deal_icons" />
                    <StarIcon className="search_icons flash_deal_icons" />
                    <StarIcon className="search_icons flash_deal_icons" />
                    <StarIcon className="search_icons flash_deal_icons" />
                    <StarIcon className="search_icons flash_deal_icons" />
                  </div>
                  <div className="price">
                    <h4>{productItems.price},00 €</h4>
                    <button>
                      <PlusIcon className="search_icons flash_deal_icons" onClick={() => addToCart(productItems)} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};
export default FlashCard;
