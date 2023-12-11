import Example from "./components/Navbar.js";
import "./App.css";
import FeaturedMovie from "./components/FeaturedMovie";
import Footer from "./components/Footer";
import NewArrival from "./components/NewArrival";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import ExclusiveVideos from "./components/ExclusiveVideos";
import { Route, Routes, useParams } from "react-router";
import SearchResults from "./components/SearchResults";
import DetailPage from "./components/DetailPage.js";
import MoreMovies from "./components/MoreMovies.js";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [moreMovie, setMoreMovie] = useState([]);
  const [videos, setVideos] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [titles, setTitles] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  async function getMoreMovieTopRated() {
    try {
      const apiKey = process.env.apiKey;
      let resp6 = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1?api_key=${apiKey}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjQ2ODQ0Njc0YmZkMDJmMGVhMzk3NDRlN2U5ZjMzNyIsInN1YiI6IjY1NDFkNjZmZTFhZDc5MDBlYTU2ZmU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N2pyk6-djtiaynGoIfhjtO3ZITF0YkWkK_r3DbMV554",
          },
        }
      );
      console.log(resp6.data.results);

      setMoreMovie(resp6.data.results);
    } catch (e) {
    } finally {
    }
  }

  async function getVideos() {
    try {
      const apiKey = process.env.apiKey;
      let resp5 = await axios.get(
        `https://api.themoviedb.org/3/movie/466420/videos?api_key=${apiKey}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjQ2ODQ0Njc0YmZkMDJmMGVhMzk3NDRlN2U5ZjMzNyIsInN1YiI6IjY1NDFkNjZmZTFhZDc5MDBlYTU2ZmU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N2pyk6-djtiaynGoIfhjtO3ZITF0YkWkK_r3DbMV554",
          },
        }
      );
      console.log(resp5.data.results);

      setVideos(resp5.data.results);
    } catch (e) {
    } finally {
    }
  }

  async function getUpcomingMovies() {
    try {
      const apiKey = process.env.apiKey;
      let resp4 = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjQ2ODQ0Njc0YmZkMDJmMGVhMzk3NDRlN2U5ZjMzNyIsInN1YiI6IjY1NDFkNjZmZTFhZDc5MDBlYTU2ZmU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N2pyk6-djtiaynGoIfhjtO3ZITF0YkWkK_r3DbMV554",
          },
        }
      );
      console.log(resp4.data.results);

      setUpcoming(resp4.data.results);
    } catch (e) {
    } finally {
    }
  }

  async function getTrendingMovieData() {
    try {
      const apiKey = process.env.apiKey;
      let resp = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjQ2ODQ0Njc0YmZkMDJmMGVhMzk3NDRlN2U5ZjMzNyIsInN1YiI6IjY1NDFkNjZmZTFhZDc5MDBlYTU2ZmU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N2pyk6-djtiaynGoIfhjtO3ZITF0YkWkK_r3DbMV554",
          },
        }
      );
      console.log(21, resp.data.results);

      setMovieData(resp.data.results);
    } catch (e) {
    } finally {
    }
  }

  useEffect(() => {
    const loadTitles = async () => {
      let response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjQ2ODQ0Njc0YmZkMDJmMGVhMzk3NDRlN2U5ZjMzNyIsInN1YiI6IjY1NDFkNjZmZTFhZDc5MDBlYTU2ZmU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N2pyk6-djtiaynGoIfhjtO3ZITF0YkWkK_r3DbMV554",
          },
        }
      );

      setTitles(response.data.results);
    };

    loadTitles();
  }, []);

  const onChangeHandler = (text) => {
    let matches = [];
    var searchHits = document.getElementById("search-hits");
    var MoreMovies = document.getElementById("more-movies");
    var NewArrival = document.getElementById("NewArrival");
    var ExclusiveVideos = document.getElementById("ExclusiveVideos");

    if (text.length > 0) {
      searchHits.style.display = "block";
      MoreMovies.style.display = "block";
      NewArrival.style.display = "none";
      ExclusiveVideos.style.display = "none";
      matches = titles.filter((a) => {
        const regex = new RegExp(`${text}`, "gi");
        return a.title.match(regex);
      });
    } else {
      searchHits.style.display = "none";
      MoreMovies.style.display = "none";
      NewArrival.style.display = "block";
      ExclusiveVideos.style.display = "block";
    }

    setSuggestions(matches);
    setText(text);
  };

  useEffect(() => {
    getUpcomingMovies();
    getTrendingMovieData();
    getVideos();
    getMoreMovieTopRated();
  }, []);

  return (
    <div className="App-header">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Example
                titles={titles}
                suggestions={suggestions}
                text={text}
                onChangeHandler={onChangeHandler}
                moreMovie={moreMovie}
              ></Example>
              <div id="search-hits" style={{ display: "none" }}>
                <SearchResults suggestions={suggestions} />
              </div>

              <FeaturedMovie movieData={movieData} />

              <div id="NewArrival" style={{ display: "block" }}>
                <NewArrival upcoming={upcoming}></NewArrival>
              </div>
              <div id="ExclusiveVideos" style={{ display: "block" }}>
                <ExclusiveVideos videos={videos}></ExclusiveVideos>
              </div>
              <div id="more-movies" style={{ display: "none" }}>
                <MoreMovies moreMovie={moreMovie}></MoreMovies>
              </div>
            </div>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <DetailPage
              titles={titles}
              suggestions={suggestions}
              text={text}
              onChangeHandler={onChangeHandler}
            />
          }
        />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
