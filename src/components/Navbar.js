import React, { Component } from "react";
import imbd from "../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import item from "../assets/PngItem_1381056 1.png";
import play from "../assets/Play.png";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";
import Slider from "react-slick";
import "./slider.css";

export default function Example({
  moreMovie,
  text,
  suggestions,
  titles,
  onChangeHandler,
}) {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const genreList = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
  return (
    <div className="w-[1440px] h-[600px] relative">
      <div>
        <Slider {...settings}>
          {moreMovie.map((data, x) => (
            <div key={x} className="relative w-[1440px] h-[600px]">
              <img
                src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                alt={data.title}
              />

              <div className="DescriptionBox absolute top-[158px] left-[98px] w-[404px] h-[285px] flex-col justify-start items-start gap-4 inline-flex">
                <div className="JohnWick3Parabellum text-white text-5xl font-bold font-['DM Sans'] leading-[56px]">
                  {data.original_title}
                </div>
                <div className="Rating relative">
                  <div className="Imdb w-[101px] h-[17px] left-0 top-0 absolute justify-start items-center gap-2.5 inline-flex">
                    <img
                      className="Mv5bmtk3oda4mjc0nf5bml5bcg5nxkftztgwndc1mzq2ote1 w-[35px] h-[17px]"
                      src={imbd}
                    />
                    <div className="0100 text-white text-xs font-normal font-['DM Sans'] leading-3">
                      {data.vote_average} / 100
                    </div>
                  </div>
                  <div className="RottenTomatoes w-[49px] h-[17px] left-[135px] top-0 absolute justify-start items-center gap-2.5 inline-flex">
                    <img className="Pngitem13810561 w-4 h-[17px]" src={item} />
                    <div className=" text-white text-xs font-normal font-['DM Sans'] leading-3">
                      {data.popularity}
                    </div>
                  </div>
                </div>
                <div className="JohnWickIsOnTheRunAfterKillingAMemberOfTheInternationalAssassinsGuildAndWithA14MillionPriceTagOnHisHeadHeIsTheTargetOfHitMenAndWomenEverywhere w-[302px] text-white text-sm font-medium font-['DM Sans'] leading-[18px]">
                  {data.overview}
                </div>

                <button className="Button px-4 py-1.5 bg-rose-700 rounded-md justify-start items-center gap-2 inline-flex">
                  <img
                    className="Play w-[20px] h-[20px]"
                    src={play}
                    alt="Logo"
                  />
                  <div className="WatchTrailer text-white text-sm font-bold font-['DM Sans'] uppercase leading-normal">
                    Watch trailer
                  </div>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="Bg w-[1440px] h-20 left-0 top-0 absolute"></div>

      <Logo></Logo>
      <Search
        titles={titles}
        suggestions={suggestions}
        text={text}
        onChangeHandler={onChangeHandler}
      ></Search>
      <Menu></Menu>
    </div>
  );
}
