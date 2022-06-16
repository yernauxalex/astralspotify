import React from "react";

function DisplayGenre(props) {
const { data }  = props;
console.log(data);
    return (
        <ul>
            {data.map(({ name, genres }) => (
                <li key={name}>
                    <h2>{name}</h2>
                    <ul>
                        {genres.map(( name ) => (
                            <li key={name}>{name}</li>
                        ))}
                        </ul>
                </li>
            ))}
        </ul>
    )
}
export default DisplayGenre;