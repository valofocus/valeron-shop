import React from "react";
import {
  GlobeIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import "./Style.css";

const Wrapper = () => {
  const data = [
    {
      cover: <GlobeIcon className="icons_wr" />,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <CreditCardIcon className="icons_wr" />,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <ShieldCheckIcon className="icons_wr" />,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <PhoneIcon className="icons_wr" />,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];
  return (
    <>
      <section className="wrapper background">
        <div className="container grid2">
          {data.map((val, index) => {
            return (
              <>
                <div className="product" key={index}>
                  <div className="img icon-circle">
                    <span className="f_flex">{val.cover}</span>
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.decs}</p>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Wrapper;
