import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  console.log(movie?.title);
  return (
    <div className="w-full h-[600px] text-white">
      <div className="w-full h-full ">
        <div className="absolute w-full h-[600px] ">
          <img
            className="w-full h-full object-cover "
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        </div>

        <div className="w-full p-4 md:p-8 absolute top-[20%]">
          <h1 className="text-3xl font-bold md:text-5xl">{movie?.title}</h1>
          <div className="my-4">
            <button className="bg-red-600 py-2 px-5 rounded border border-red-100">
              Play now
            </button>
            <button className="border border-red-600 py-2 px-5 ml-3 rounded">
              Watch Later
            </button>
          </div>
          <p className="text-sm text-gray-400">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
