import React, { useState } from "react";
import "./Open.css"
import OpenSidebar from "./../OpenSidebar";
import OpenBody from "./../OpenBody";
import OpenFooter from "./../OpenFooter";

const Open = () => {
    const [active, setActive] = useState("openHome");
    return (
        <div className="open">
            <div className="open__body">
                <OpenSidebar setActive={setActive} />
                <OpenBody active={active} />
            </div>
            <OpenFooter />
        </div>
    );
};

export default Open;