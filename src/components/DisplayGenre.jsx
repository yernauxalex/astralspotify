import React from "react";

function DisplayGenre(props) {
const { data }  = props;
console.log(data);
    return (
        <ul className="main-list">
            {data.map(({ name, external_urls ,genres }) => (
                // eslint-disable-next-line react/jsx-key
                <a href={external_urls.spotify} target="_blank" rel="noreferrer">
                <li key={name} className="main-list-items">
                    <h3>{name}</h3>
                    <ul className="secondary-list">
                        {genres.map(( name ) => (
                            <li key={name} className="secondary-list-items">{name}</li>
                        ))}
                        </ul>
                </li>
                </a>
            ))}
        </ul>
    )
}
export default DisplayGenre;