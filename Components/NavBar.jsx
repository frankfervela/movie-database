import React from 'react';
import requests from "../utils/requests";
import {useRouter} from "next/router";

function NavBar(props) {
    const router = useRouter();
    return (
        <nav className={"relative"}>
            <div className={" last:pr-10 flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide"}>
                {/*This line searches for the objects stored in the requests file*/}
                {Object.entries(requests).map(([key, {title, url}]) => (
                    <h2 key={key} className={"cursor-pointer pb-2 transition duration-100 transform hover:scale-125 hover:text-white active:text-red-400"} onClick={() => router.push(`/?genre=${key}`)}>{title}</h2>
                ))}

            </div>
            <div className={"absolute top-0 right-0 bg-gradient-to-l from-[#171717] h-10 w-1/12"}/>
        </nav>
    );
}

export default NavBar;