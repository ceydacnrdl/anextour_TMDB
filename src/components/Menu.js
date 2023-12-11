import React, { Component } from "react";
import menu from "../assets/Menu.png";
import ellipse from "../assets/Ellipse.png";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <a
          style={{ textDecoration: "none" }}
          href="link-to-your-action"
          class="Menu w-9 h-9 left-[1308px] top-[27px] absolute justify-start items-center gap-[27px] inline-flex"
        >
          <div class="Menu w-9 h-9 relative">
            <img
              class="Ellipse1 w-9 h-9 left-0 top-0 absolute "
              src={ellipse}
            ></img>

            <img
              class="w-6 h-6 left-[6px] top-[6px] absolute"
              src={menu}
              alt="Logo"
            />
          </div>
        </a>
      </div>
    );
  }
}
