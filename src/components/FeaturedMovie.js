import React from "react";
import ChevronRight1 from "../assets/Chevron right (1).png";
import ChevronRight from "../assets/Chevron right.png";
import "./slider.css";
import Slider from "react-slick";
import imdb from "../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import orangeItem from "../assets/PngItem_1381056 1.png";
import ellipse3 from "../assets/Ellipse 3.png";
import heart from "../assets/Heart.png";

const FeaturedMovie = (props) => {
  const { onClick, movieData } = props;
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
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
    <div className="w-[1368px] h-[604px] top-[70px] relative">
      <div className="w-[1244px] h-[47px] left-[98px] top-0 absolute justify-between items-center inline-flex">
        <div className="text-black text-4xl font-bold font-['DM Sans']">
          Featured Movie
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
        className="w-[1280px] h-[513px] left-[98px] top-[91px] absolute justify-start items-start gap-20 inline-flex"
      >
        {movieData.map((item, index) => (
          <div
            key={index}
            className="movie_item flex-col justify-start items-start gap-20 inline-flex"
          >
            <a style={{ textDecoration: "none" }} href={`/detail/${item.id}`}>
              <div className="w-[250px] h-[370px] relative">
                <div className="w-[250px] h-[370px] left-0 top-0 absolute">
                  <div className="w-[250px] h-[370px] left-0 top-0 absolute bg-stone-300" />
                  <img
                    className="w-[250px] h-[370px] left-0 top-0 absolute"
                    src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                  />
                </div>

                {item.media_type == "tv" ? (
                  <div className="w-[218px] h-[29.21px] left-[16px] top-[15.58px] absolute justify-center items-center gap-[114px] inline-flex">
                    <div className="self-stretch px-2 py-[3px] bg-gray-100 bg-opacity-50 rounded-xl backdrop-blur-[2px] justify-start items-start gap-2.5 inline-flex">
                      <div className="text-gray-900 text-xs font-bold font-['DM Sans']">
                        {" "}
                        TV SERIES
                      </div>
                    </div>
                    <div className="w-[30px] h-[29.21px] relative">
                      <a
                        style={{ textDecoration: "none" }}
                        href="link-to-your-action"
                        class="w-[30px] h-[29.21px] left-0 top-0 absolute bg-gray-100 bg-opacity-50 rounded-full backdrop-blur-[2px]"
                      >
                        <div class="Menu w-9 h-9 relative">
                          <img
                            class="w-[30px] h-[29.21px] left-0 top-0 absolute bg-gray-100 bg-opacity-50 rounded-full backdrop-blur-[2px] "
                            src={ellipse3}
                          ></img>

                          <img
                            class="w-5 h-[19.47px] left-[5px] top-[4.87px] absolute"
                            src={heart}
                            alt="Logo"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="w-[218px] h-[29.21px] left-[16px] top-[15.58px] absolute justify-center items-center gap-[114px] inline-flex">
                    <div className="self-stretch px-2 py-[3px] bg-transparent rounded-xl backdrop-blur-[2px] justify-start items-start gap-2.5 inline-flex"></div>
                    <div className="w-[30px] h-[29.21px] relative">
                      <a
                        style={{ textDecoration: "none" }}
                        href="link-to-your-action"
                        class="w-[30px] h-[29.21px] left-0 top-0 absolute bg-gray-100 bg-opacity-50 rounded-full backdrop-blur-[2px]"
                      >
                        <div class="Menu w-9 h-9 relative">
                          <img
                            class="w-[30px] h-[29.21px] left-0 top-0 absolute bg-gray-100 bg-opacity-50 rounded-full backdrop-blur-[2px] "
                            src={ellipse3}
                          ></img>

                          <img
                            class="w-5 h-[19.47px] left-[5px] top-[4.87px] absolute"
                            src={heart}
                            alt="Logo"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="text-gray-400 text-xs font-bold font-['DM Sans']">
                USA
              </div>
              <div className="w-[250px] text-gray-900 text-lg font-bold font-['DM Sans']">
                {item.original_title ? item.original_title : item.original_name}
              </div>
              <div className="w-[250px] justify-between items-start inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
                  <img className="w-[35px] h-[17px]" src={imdb} />
                  <div className="text-gray-900 text-xs font-normal font-['DM Sans'] leading-3">
                    {Math.round(item.vote_average * 10)} /100
                  </div>
                </div>
                <div className="justify-start items-center gap-2.5 flex">
                  <img className="w-4 h-[17px]" src={orangeItem} />
                  <div className="text-gray-900 text-xs font-normal font-['DM Sans'] leading-3">
                    {item.popularity}
                  </div>
                </div>
              </div>
              <div className="text-gray-400 text-xs font-bold font-['DM Sans']">
                {item.genre_ids.map((x, i) => (
                  <span key={i}>
                    {genreList
                      .filter((gen) => x === gen.id)
                      .map((gen, index, arr) => (
                        <span key={index}>
                          {gen.name}
                          {index < arr.length - 1 && ", "}
                        </span>
                      ))}
                    {i < item.genre_ids.length - 1 && ", "}
                  </span>
                ))}
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default FeaturedMovie;
