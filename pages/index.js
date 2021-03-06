import Results from "../Components/Results";
import requests from "../utils/requests";
import Layout from "/Components/Layout";

const Home = ({ results }) => {

  return (
    <Layout title={"Home"}>
        <Results results={results}/>
    </Layout>
  )
}

export default Home;

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