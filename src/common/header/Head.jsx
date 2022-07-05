import React from "react";
import { PhoneIcon, MailIcon, LocationMarkerIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline'

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex ">
          <div className="left row LText">
            <PhoneIcon className="head-i"/>
            <label>+30 2310 55 5555</label>
            <MailIcon className="head-i"/>
            <label>eshop@support.com</label>
          </div>
          <div className="right row RText">
            <LocationMarkerIcon className="head-i"/>
            <label> Καταστήματα</label>
            <QuestionMarkCircleIcon className="head-i"/>
            <label> Βοήθεια & συμβουλή</label>
            <span>🇬🇷</span>
            <label>GR</label>
            <span>🇬🇷 </span>
            <label>EURO</label>
          </div>
        </div>
      </section>
    </>
  );
};
export default Head;
