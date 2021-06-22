import React from 'react';
import Thumbnail from "./Thumbnail";

function Results({ results }) {
    return (
        <div className={"px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center"}>
            {results != null ? results.map(result => (
                <Thumbnail key={result.id} result={result}/>
            )) : <h1 className={"text-2xl"}>Error Loading</h1>}
        </div>
    );
}

export default Results;