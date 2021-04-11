import React from "react";
import "./Open.css"
import OpenSidebar from "./../OpenSidebar";
import OpenBody from "./../OpenBody";
import OpenFooter from "./../OpenFooter";

const Open = () => {
    return (
        <div className="open">
            <div className="open__body">
                <OpenSidebar />
                <OpenBody />
            </div>
            <OpenFooter />
        </div>
    );
};

export default Open;