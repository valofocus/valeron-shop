import React from "react";
import GoolgePlay from "../assets/images/google-play-badge-logo-svgrepo-com.svg";
import AppStore from "../assets/images/aivalable-on-the-app-store-2-logo-svgrepo-com.svg";
import "./Footer.css";
import Logo from "../assets/images/logo-shop.svg";
import FooterB from "./FooterB";

const Footer = () => {
  return (
    <>
      <footer>
        <div style={{ width: "60%" }} className="container grid2 footer-top">
          <div className="box">
            <div className="f_flex logo_title">
              <img src={Logo} alt="" />
              <h1>Valeron</h1>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              lobortis consequat eu, quam etiam at quis ut convallis.
            </p>
            <div className="icon f_flex">
              <div className="img ">
                <img src={GoolgePlay} alt="" />
              </div>
              <div className="img ">
                <img src={AppStore} alt="" />
              </div>
            </div>
          </div>
          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>
                70 Washington Square South, New York, NY 10012, United States{" "}
              </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
      <FooterB />
    </>
  );
};
export default Footer;
