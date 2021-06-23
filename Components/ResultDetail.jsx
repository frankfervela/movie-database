import React from 'react';
import Image from "next/image";


function ResultDetail({ movieResult }) {

    const BASE_URL = "https://image.tmdb.org/t/p/original";

    return (
        <div className="flex bg-gray-800 p-5 rounded-xl flex-col md:flex-row flex-grow mx-5 my-10 ">
            <Image className={"object-cover rounded-xl"} height={1080} width={1920}
                   src={`${BASE_URL}${movieResult.backdrop_path || movieResult.poster_path}` || `${BASE_URL}${movieResult.poster_path}`}/>
            <div className={"flex flex-col m-6"}>
                <h3 className="font-bold mb-3 text-xl md:text-3xl lg:text-5xl text-gray-200 movie--title">{movieResult.title} ({movieResult.release_date.substr(0,4) || movieResult.first_air_date})</h3>
                <div className={"flex flex-row m-1"}>
                    <p className={"inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-blue-500 rounded-full"}>Length: {movieResult.runtime}m</p>
                    <p className={"inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full"}>Rating: {movieResult.vote_average}</p>
                </div>
                <div className="flex-grow mt-5">
                    <p className="text-xl md:text-base lg:text-base text-gray-100 leading-snug truncate-overflow">{movieResult.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default ResultDetail;