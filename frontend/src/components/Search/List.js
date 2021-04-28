import React from "react";
import Card from "../Card";
import Tracks from "../Tracks";

const List = ({ results, type }) => {
    let list;
    if (!(Object.entries(results) == 0)) {
        list = (
            <div className="card__grid">
                {Object.entries(results.results).map((result) => {
                    switch (type) {
                        case "album":
                            return (
                                <Card
                                    key={result[0]}
                                    type={type}
                                    id={result[0]}
                                    cardInfo={{
                                        image: result[1].image,
                                        title: result[1].name,
                                        text: result[1].artists.join(", "),
                                    }}
                                />
                            );
                        case "artist":
                            return (
                                <Card
                                    key={result[0]}
                                    type={type}
                                    id={result[0]}
                                    cardInfo={{
                                        image: result[1].image,
                                        title: result[1].name,
                                        text: result[1].genres.join(", "),
                                    }}
                                />
                            );
                        case "playlist":
                            return (
                                <Card
                                    key={result[0]}
                                    type={type}
                                    id={result[0]}
                                    cardInfo={{
                                        image: result[1].image,
                                        title: result[1].name,
                                        text: result[1].description,
                                    }}
                                />
                            );
                        case "track":
                            return (
                                <Tracks key={result[0]} id={result[0]} rowInfo={result[1]} />
                            );
                        default:
                            break;
                    }

                })}
            </div>
        );
    }
    return (
        <>
            {!(Object.entries(results) == 0) && (
                <>
                    {list}
                </>
            )}
        </>
    );
};

export default List;