import React from 'react';
import "./OpenSideList.css";

const OpenSideList = ({ title, Icon }) => {
    return (
        <div className="openSideList">
            {Icon && <Icon className="openSideList__icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    );
};

export default OpenSideList;