import React from "react";
import ChevronRight1 from "../assets/Chevron right (1).png";
import ChevronRight from "../assets/Chevron right.png";
import "./slider.css";
import Slider from "react-slick";
import playIcon from "../assets/Play(1).png";

const FeaturedMovie = (props) => {
  const { onClick, videos } = props;
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: (
      <a
        style={{ textDecoration: "none" }}
        className={`w-12 h-12 left-[1354px] right-[38px] top-[252px] absolute cursor-pointer`}
        onClick={onClick}
      >
        <img
          className="w-[48px] h-[48px] rotate-180"
          src={ChevronRight1}
          alt="ChevronRight1"
        />
      </a>
    ),
    prevArrow: (
      <a
        style={{ textDecoration: "none" }}
        class="w-12 h-12 right-[1320px] left-[16px] top-[252px] absolute"
      >
        <img
          class=" w-[48px] h-[48px] "
          src={ChevronRight1}
          alt="ChevronRight1"
        />
      </a>
    ),
  };
  return (
    <div className="w-[1368px] h-[379.125px] top-[70px] relative">
      <div className="w-[1244px] h-[47px] left-[98px] top-0 absolute justify-between items-center inline-flex">
        <div className="text-black text-4xl font-bold font-['DM Sans']">
          Exclusive Videos
        </div>

        <a
          style={{ textDecoration: "none" }}
          href="link-to-your-action"
          className="justify-start items-center gap-2 flex"
        >
          <div className="text-rose-700 text-lg font-normal font-['DM Sans'] leading-normal">
            See more
          </div>
          <img
            class="Tv w-[20px] h-[20px]"
            src={ChevronRight}
            alt="ChevronRight"
          />
        </a>
      </div>

      <Slider
        {...settings}
        className="w-[1280px] h-[288.125px] left-[98px] top-[91px] absolute justify-start items-start gap-20 inline-flex"
      >
        {videos.map((item, index) => (
          <div
            key={index}
            className="movie_item w-[450px] h-[288.125px] flex-col justify-start items-start gap-20 inline-flex"
          >
            <a
              style={{ textDecoration: "none" }}
              href={`https://www.youtube.com/watch?v=${item.key}`}
            >
              <div className="w-[450px] h-[288.125px] relative">
                <div className="w-[450px] h-[253.125px] left-0 top-0 absolute">
                  <div className=" left-0 top-0 absolute bg-stone-300" />
                  <img
                    className="w-[450px] h-[253.125px] left-0 top-0 absolute "
                    src={`http://img.youtube.com/vi/${item.key}/0.jpg`}
                  />
                  <img
                    className=" w-[60px] h-[60px] left-[195px] top-[97px] absolute"
                    src={playIcon}
                    alt="ChevronRight1"
                  />
                </div>
              </div>

              <div className="w-[250px] h-[23px] text-gray-900 text-lg font-bold font-['DM Sans']">
                {item.name}
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default FeaturedMovie;
