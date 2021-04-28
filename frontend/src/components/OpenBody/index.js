import React, { useState } from "react";
import "./OpenBody.css";
import OpenNavBack from "../OpenNavBack";
import OpenHome from "../OpenHome";
import OpenSearch from "../OpenSearch";
import OpenLibrary from "../OpenLibrary";
import OpenResults from "../OpenResults";


const OpenBody = ({ active, setActive, results, setResults, setSong }) => {
    console.log(active);
    return (
        <div className="openBody">
            {/* <OpenNavBack /> */}
            {active === "openHome" && <OpenHome results={results} setResults={setResults} setSong={setSong} />}
            {active === "openSearch" && <OpenSearch setActive={setActive} setResults={setResults} />}
            {active === "openLibrary" && <OpenLibrary />}
            {active === "openResults" && <OpenResults results={results} setSong={setSong} />}
        </div>
    );
};

export default OpenBody;