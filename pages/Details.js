import React from 'react';
import ResultDetail from "../Components/ResultDetail";
import Layout from "../Components/Layout";
import requests from "../utils/requests";



export default function Details({movieResult}) {

    return (
        <Layout title={movieResult.title}>
            <ResultDetail movieResult={movieResult}/>
        </Layout>
    );
}

/*Call the movie information*/
export async function getServerSideProps(context) {

    const movieId = context.query.movieId;
    const genre = context.query.genre;
    const request = await fetch(`https://api.themoviedb.org/3/${genre}/${movieId}?api_key=591bcca26b2c81aed2a2153c1ff84a96&language=en-US`)
        .then((res) => res.json());

    console.log(request)

    /*https://api.themoviedb.org/3/movie/{movie_id}?api_key=591bcca26b2c81aed2a2153c1ff84a96&language=en-US*/
   /* const res = await fetch(`https://api.themoviedb.org/3/${movieGenre}/${movieID}?api_key=${API_KEY}&language=en-US`)
    const {results} = await res.json();

    console.log(results.results)
*/
    return {
        props: {
            movieResult: request || null,
        }
    }
}
