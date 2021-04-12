import React from 'react';
import "./OpenNavBack.css";
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';



const OpenNavBack = () => {
    return (
        <div className="openNavBack">
            <div className="openNavDiv openNavBack__leftDiv">
                <span className="openNav left">L</span>
            </div>
            <div className="openNavDiv openNavBack__rightDiv">
                <span className="openNav right">R</span>
            </div>
        </div>
    );
};

export default OpenNavBack;