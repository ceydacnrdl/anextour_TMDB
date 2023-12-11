import React, { Component } from "react";
import facebook from "../assets/SocialBrands/fa-brands_facebook-square.png";
import instagram from "../assets/SocialBrands/fa-brands_instagram.png";
import twitter from "../assets/SocialBrands/fa-brands_twitter.png";
import youtube from "../assets/SocialBrands/fa-brands_youtube.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="w-[492px] h-[82px] left-[478px] top-[185.74px] relative flex-col  items-center gap-9 inline-flex">
        <div className=" items-center gap-12 inline-flex">
          <a
            style={{ textDecoration: "none" }}
            href="https://www.facebook.com/"
          >
            <img
              class="w-6 h-[27.43px] relative"
              src={facebook}
              alt="facebook"
            />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.instagram.com/"
          >
            <img
              className="w-6 h-[27.43px] relative"
              src={instagram}
              alt="instagram"
            />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.twitter.com/"
            className="w-6 h-[24px] relative"
          >
            <img
              className="w-6 h-[24px] relative"
              src={twitter}
              alt="twitter"
            />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.youtube.com/"
            className="w-6 h-[21.33px] relative"
          >
            <img
              className="w-6 h-[21.33px] relative"
              src={youtube}
              alt="youtube"
            />
          </a>
        </div>
        <div className="justify-start items-start gap-12 inline-flex">
          <div className="text-gray-900 text-lg font-bold font-['DM Sans']">
            Conditions of Use
          </div>
          <div className="text-gray-900 text-lg font-bold font-['DM Sans']">
            Privacy & Policy
          </div>
          <div className="text-gray-900 text-lg font-bold font-['DM Sans']">
            Press Room
          </div>
        </div>
      </div>
    );
  }
}
