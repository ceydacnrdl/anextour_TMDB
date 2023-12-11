import { useParams } from "react-router";
import React, { Component } from "react";
import imbd from "../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import item from "../assets/PngItem_1381056 1.png";
import play from "../assets/Play.png";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./slider.css";

export default function DetailPage({
  text,
  suggestions,
  titles,
  onChangeHandler,
}) {
  const [sliderImage, setSliderImage] = useState([]);
  const [find, setFind] = useState([]);
  const param = useParams();

  const ID = param.id;

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  async function findById(ID) {
    try {
      const apiKey = "8f46844674bfd02f0ea39744e7e9f337";
      let resp3 = await axios.get(
        `https://api.themoviedb.org/3/movie/${ID}?api_key=${apiKey}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjQ2ODQ0Njc0YmZkMDJmMGVhMzk3NDRlN2U5ZjMzNyIsInN1YiI6IjY1NDFkNjZmZTFhZDc5MDBlYTU2ZmU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N2pyk6-djtiaynGoIfhjtO3ZITF0YkWkK_r3DbMV554",
          },
        }
      );
      console.log(resp3.data);
      setFind(resp3.data);
    } catch (e) {
    } finally {
    }
  }

  async function getSliderImage(ID) {
    try {
      const apiKey = "8f46844674bfd02f0ea39744e7e9f337";
      let resp2 = await axios.get(
        `https://api.themoviedb.org/3/movie/${ID}/images?api_key=${apiKey}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjQ2ODQ0Njc0YmZkMDJmMGVhMzk3NDRlN2U5ZjMzNyIsInN1YiI6IjY1NDFkNjZmZTFhZDc5MDBlYTU2ZmU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N2pyk6-djtiaynGoIfhjtO3ZITF0YkWkK_r3DbMV554",
          },
        }
      );
      console.log(resp2.data.backdrops);
      setSliderImage(resp2.data.backdrops);
    } catch (e) {
    } finally {
    }
  }
  useEffect(() => {
    getSliderImage(ID);
    findById(ID);
  }, []);

  return (
    <div>
      <div className="w-[1440px] h-[600px] relative">
        <div className="Bg w-[1440px] h-20 left-0 top-0 absolute"></div>
        <Slider {...settings}>
          {sliderImage
            .sort((a, b) => b.vote_average - a.vote_average)
            .slice(0, 3)
            .map((data, x) => (
              <div key={x} className="w-[1440px] h-[600px]">
                <img
                  key={x}
                  src={`https://image.tmdb.org/t/p/original/${data.file_path}`}
                />
              </div>
            ))}
        </Slider>
        <Logo></Logo>
        <Search
          titles={titles}
          suggestions={suggestions}
          text={text}
          onChangeHandler={onChangeHandler}
        ></Search>
        <Menu></Menu>

        <div className="DescriptionBox w-[404px] h-[285px] left-[98px] top-[158px] absolute flex-col justify-start items-start gap-4 inline-flex">
          <div className="JohnWick3Parabellum w-[404px] text-white text-5xl font-bold font-['DM Sans'] leading-[56px]">
            {find.title}
          </div>
          <div className="Rating relative">
            <div className="Imdb w-[101px] h-[17px] left-0 top-0 absolute justify-start items-center gap-2.5 inline-flex">
              <img
                className="Mv5bmtk3oda4mjc0nf5bml5bcg5nxkftztgwndc1mzq2ote1 w-[35px] h-[17px]"
                src={imbd}
              />
              <div className="0100 text-white text-xs font-normal font-['DM Sans'] leading-3">
                {Math.round(find.vote_average * 10)} /100
              </div>
            </div>
            <div className="RottenTomatoes w-[49px] h-[17px] left-[135px] top-0 absolute justify-start items-center gap-2.5 inline-flex">
              <img className="Pngitem13810561 w-4 h-[17px]" src={item} />
              <div className=" text-white text-xs font-normal font-['DM Sans'] leading-3">
                {find.popularity}
              </div>
            </div>
          </div>
          <div className="JohnWickIsOnTheRunAfterKillingAMemberOfTheInternationalAssassinsGuildAndWithA14MillionPriceTagOnHisHeadHeIsTheTargetOfHitMenAndWomenEverywhere w-[302px] text-white text-sm font-medium font-['DM Sans'] leading-[18px]">
            {find.overview}
          </div>
          <button className="Button px-4 py-1.5 bg-rose-700 rounded-md justify-start items-center gap-2 inline-flex">
            <img className="Play w-[20px] h-[20px]" src={play} alt="Logo" />
            <div className="WatchTrailer text-white text-sm font-bold font-['DM Sans'] uppercase leading-normal">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href={find.homepage}
              >
                Watch Trailer
              </a>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
