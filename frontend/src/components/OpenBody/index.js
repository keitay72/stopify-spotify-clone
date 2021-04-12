import React, { useState } from "react";
import "./OpenBody.css";
import OpenNavBack from "./../OpenNavBack";
import OpenHome from "./../OpenHome";
import OpenSearch from "./../OpenSearch";
import OpenLibrary from "./../OpenLibrary";


const OpenBody = ({ active }) => {
    return (
        <div className="openBody">
            <OpenNavBack />
            {active === "openHome" && <OpenHome />}
            {active === "openSearch" && <OpenSearch />}
            {active === "openLibrary" && <OpenLibrary />}
        </div>
    );
};

export default OpenBody;