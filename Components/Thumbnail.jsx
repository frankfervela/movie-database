import React from 'react';
import Image from 'next/image';
import {ThumbUpIcon} from "@heroicons/react/solid";
import requests from "../utils/requests";

export default function Thumbnail({ result }) {

    const BASE_URL = "https://image.tmdb.org/t/p/original";

    return (
        <div className={"group p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"}>
            <Image layout={"responsive"} height={1080} width={1920} src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`}/>
            <div className={"p-2"}>

                <p className={"truncate max-w-md"}>{result.overview}</p>

                <h2 className={"mt-1 text-2xl text-white transition-all-duration-100 ease-in-out group-hover:font-bold"}>{result.title || result.original_name}</h2>

                <p className={"inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full"}>{result.type || result.media_type || "coming soon"}</p>

                <p className={"flex items-center opacity-0 group-hover:opacity-100"}>{result.release_date || result.first_air_date} <ThumbUpIcon className={"h-5 mx-2"}/> {result.vote_count}</p>

            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const genre = context.props.result;

    const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
        .then((res) => res.json());

    return {
        props: {
            genres: request.results || null,
        }
    }
}