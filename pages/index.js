import Head from 'next/head'
import Image from 'next/image'
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Results from "../Components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {

  return (
    <div>

      <Head>
        <title>The Officer 1.0</title>
        <meta name="description" content="Created for the highest The Office fans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header*/}
      <Header/>

      {/*NavBar*/}
      <NavBar/>

      {/*Results*/}
      <Results results={results}/>

    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
      .then((res) => res.json());

  return {
      props: {
          results: request.results || null,
      }
  }
}