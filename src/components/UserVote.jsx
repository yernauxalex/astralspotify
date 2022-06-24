import React from "react";
import StyledVote from "../styles/StyledVote";
// import { genre } from "../datas/genre";
import { sign } from "../datas/sign";

function UserVote(props) {
    const userGenre = props;
    console.log(userGenre);
    console.log("props", props);

    return (
        <StyledVote>
            <h2>Help us to get a more accurate matching</h2>
            <form>

                {Object.values(userGenre).map((genre) => (
                    <div className="genre" key={genre}>
                        <label key={genre}> {genre} </label>
                        <select value={genre} >
                            {sign.map(({ name, unicode }) => (
                                <option key={name} value={name}>
                                    {name} {unicode}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}

            </form>
        </StyledVote>
    );
}
export default UserVote