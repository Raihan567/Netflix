import React, { useState } from "react";
// import { userAuth } from "../Context/AuthContext";
// import { FaRegHeart, FaHeart } from "react-icons/fa";

const Movie = ({ item }) => {
  // const [like, setLike] = useState(false);
  // const [save, setSave] = useState(false);
  // const { user } = userAuth();

  // const saveShow = async ()=>{
  //   if(user?.email){
  //     setLike(!like)
  //     setSave(true)

  //   }
  // }
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      {/* <p className='text-white'>{item.title}</p> */}
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        {/* <p 
        onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p> */}
      </div>
    </div>
  );
};

export default Movie;
