import React from "react";
import Visa from "../assets/images/visa.webp";
import MasterCard from "../assets/images/mastercard.webp";
import Maestro from "../assets/images/maestro.jpg";
import Paypal from "../assets/images/paypal.png";
import Symantec from "../assets/images/symantec.png";
import Logo from "../assets/images/logo-shop.svg";

const FooterB = () => {
  return (
    <>
      <div className="footer-bottom">
        <ul className="footer-bottom-list footer-bottom-list-icons d_flex">
          <li>
            <img src={Visa} alt="" />
          </li>
          <li>
            <img src={MasterCard} alt="" />
          </li>
          <li>
            <img src={Maestro} alt="" />
          </li>
          <li>
            <img src={Symantec} alt="" />
          </li>
          <li>
            <img src={Paypal} alt="" />
          </li>
        </ul>
        <ul class="footer-bottom-list footer-bottom-list--service-links">
          <li>
            <a href="/">Όροι χρήσης</a>
          </li>
          <li>
            <a href="/"> Πολιτική Cookies</a>
          </li>
          <li>
            <a href="/">Πολιτική Απορρήτου</a>
          </li>
          <li>
            <a href="/">GDPR</a>
          </li>
        </ul>
        <div className="center-footer">
          <a href="/">
            <img src={Logo} alt="" />
            <h1>Valeron</h1>
          </a>
          <div class="copyright">©2022 Valeron</div>
        </div>
      </div>
    </>
  );
};
export default FooterB;
