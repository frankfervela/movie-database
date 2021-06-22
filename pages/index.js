import Head from 'next/head'
import Image from 'next/image'
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Results from "../Components/Results";

export default function Home() {
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
    <NavBar />

    {/*Results*/}
    <Results/>
    </div>
  )
}
