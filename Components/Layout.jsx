import Head from "next/Head";
import Header from "./Header";
import NavBar from "./NavBar";

function Layout({title, children}) {
    return (
        <div className={"container mx-auto"}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Created for the highest The Office fans" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/*Header*/}
            <Header/>

            {/*NavBar*/}
            <NavBar/>

            <main className={"container mx-auto"}>
                {children}
            </main>
        </div>
    );
}

export default Layout;