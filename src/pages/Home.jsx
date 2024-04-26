import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../pages/MovieGrid.css";
import "../pages/Home.css";
import TvShowCard from "../components/TvShowCard";

const moviesURL = import.meta.env.VITE_API;
const tvShowsURL = import.meta.env.VITE_TV_API;
const apiKey = import.meta.env.VITE_API_KEY;
const defaultURL = import.meta.env.VITE_API_DEFAULT;

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [TrendingTvShows, setTrendingTvShows] = useState([]);
  const [topTvShows, setTopTvShows] = useState([]);

  const getPopularMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setPopularMovies(data.results);
  };

  useEffect(() => {
    const popularUrl = `${moviesURL}popular?${apiKey}`;

    getPopularMovies(popularUrl);
  }, []);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  const getTrendingTvShows = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTrendingTvShows(data.results);
  };

  useEffect(() => {
    const popularTvUrl = `${defaultURL}trending/tv/day?${apiKey}`;

    getTrendingTvShows(popularTvUrl);
  }, []);

  const getTopRatedTvShows = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopTvShows(data.results);
  };

  useEffect(() => {
    const topRatedTvUrl = `${tvShowsURL}top_rated?${apiKey}`;

    getTopRatedTvShows(topRatedTvUrl);
  }, []);

  return (
    <div className="container">
      <div className="popular-container">
        <h2 className="title">Trending Movies</h2>
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          navigation
          pagination={false}
          className="swiper"
        >
          {popularMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="popular-container">
        <h2 className="title">Trending TV Shows</h2>
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          navigation
          pagination={false}
          className="swiper"
        >
          {TrendingTvShows.map((show) => (
            <SwiperSlide key={show.id}>
              <TvShowCard show={show} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="top-rated-container">
        <h2 className="title">Top Rated Movies</h2>
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          navigation
          pagination={false}
          className="swiper"
        >
          {topMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="top-rated-container">
        <h2 className="title">Top Rated TV Shows</h2>
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          navigation
          pagination={false}
          className="swiper"
        >
          {topTvShows.map((show) => (
            <SwiperSlide key={show.id}>
              <TvShowCard show={show} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
