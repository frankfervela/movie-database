import React from 'react';
import Image from 'next/image';
import {ThumbUpIcon} from "@heroicons/react/solid";

function Thumbnail({ result }) {

    const BASE_URL = "https://image.tmdb.org/t/p/original";

    return (
        <div className={"p-4"}>
            <Image layout={"responsive"} height={1080} width={1920} src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`}/>

            <p className={"truncate max-w-md"}>{result.overview}</p>

            <h2 className={""}>{result.title || result.originalName}</h2>

            <p>{result.type || result.media_type}</p>

            <div className={"flex"}>
                <p>{result.release_date || result.first_air_date}</p>
                <ThumbUpIcon className={"h-5 mx-2"}/>
                <p>{result.vote_count}</p>
            </div>

        </div>
    );
}

export default Thumbnail;