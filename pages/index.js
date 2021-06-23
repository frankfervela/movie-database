import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Results from "../Components/Results";
import requests from "../utils/requests";
import Layout from "/Components/Layout";

export default function Home({ results }) {

  return (
    <Layout title={"Home"}>
        <Results results={results}/>
    </Layout>
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