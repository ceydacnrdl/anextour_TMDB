import React from "react";

import Searchh from "../assets/Search.png";
import "./slider.css";

export default function Search({ text, suggestions, onChangeHandler }) {
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
    <div>
      <div className="Search w-[525px]  px-2.5 py-1.5 left-[503px] top-[22px] absolute  input">
        <input
          className="w-[525px] h-9 px-2.5 py-1.5 rounded-md border-2 text-white text-base font-normal font-['DM Sans'] leading-normal border-gray-300 justify-between items-center inline-flex bg-transparent"
          type="text"
          onChange={(e) => onChangeHandler(e.target.value)}
          value={text}
        />

        <div className="w-[528px] mt-3 overflow-y-auto max-h-[363px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 ">
          {suggestions &&
            suggestions.map((suggestion, index) => (
              <a
                style={{ textDecoration: "none" }}
                href={`/detail/${suggestion.id}`}
                className="justify-start items-center gap-2 flex"
              >
                <div
                  className="w-[528px] h-[121px] bg-zinc-300 rounded col-md-12 justify-content-md-center relative"
                  key={index}
                >
                  <img
                    className="w-[70px] h-[103.60px] top-[8px]"
                    src={`https://image.tmdb.org/t/p/w300/${suggestion.poster_path}`}
                  />

                  <div className="left-[95px] top-[27px] absolute text-gray-900 text-lg font-bold font-['DM Sans'] ">
                    {" "}
                    {suggestion.title}
                  </div>

                  <div className="left-[95px] top-[60px] absolute text-gray-400 text-xs font-bold font-['DM Sans']">
                    {suggestion.genre_ids.map((x, i) => (
                      <span key={i}>
                        {genreList
                          .filter((gen) => x === gen.id)
                          .map((gen, index, arr) => (
                            <span key={index}>
                              {gen.name}
                              {index < arr.length - 1 && ", "}
                            </span>
                          ))}
                        {i < suggestion.genre_ids.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
        </div>

        <button type="submit" className="absolute top-0 mt-3 right-4">
          <img className="Tv w-[16px] h-[16px]" src={Searchh} alt="Logo" />
        </button>
      </div>
    </div>
  );
}
