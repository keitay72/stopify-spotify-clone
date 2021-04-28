import React, { useEffect } from 'react';
import { searchResults } from "../../store/open";
import "./OpenHome.css";
import OpenResults from "../OpenResults";
import { useDispatch } from 'react-redux';


const OpenHome = ({ results, setResults, setSong }) => {
    const dispatch = useDispatch()
    useEffect(async () => {
        setResults(await dispatch(searchResults("new-release")));
    }, [dispatch])
    return (
        <>
            <OpenResults results={results} setSong={setSong} />
        </>
    )
}

export default OpenHome;