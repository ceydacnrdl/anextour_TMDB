import React, { Component } from "react";
import tv from "../assets/tv.png";

export default class Logo extends Component {
  render() {
    return (
      <div>
        <a
          style={{ textDecoration: "none" }}
          href="/"
          class="Logo w-[186px] h-[50px] left-[95px] top-[15px] absolute justify-start items-center gap-6 inline-flex"
        >
          <img class="Tv w-[50px] h-[50px]" src={tv} alt="Logo" />
          <div class="Moviebox text-white text-2xl font-bold font-['DM Sans'] leading-normal">
            MovieBox
          </div>
        </a>
      </div>
    );
  }
}
