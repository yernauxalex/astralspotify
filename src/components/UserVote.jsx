import React, { useState } from "react";
import StyledVote from "../styles/StyledVote";
// import { genre } from "../datas/genre";
import { sign } from "../datas/sign";

function UserVote(props) {
    const userGenre = props;
    const [userVote, setUserVote] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userVote);
    }

    return (
        <StyledVote>
            <h2>Help us to get a more accurate matching</h2>
            <form>
                <div className="genre-container" key="label">
                    <label key="label"> Sign </label>
                    <div className="sign-container-list" >
                        {sign.map((sign) => (
                            <div className="sign-container-desc" key={"label" + sign.name}>
                                <input
                                    type="radio"
                                    name={sign.name}
                                    value={sign.name}
                                    className="sign-radio"
                                />
                                <label>{sign.unicode}</label>
                            </div>
                        ))}
                    </div>
                </div>
                {Object.values(userGenre).map((genre) => (
                    <div className="genre-container" key={genre}>
                        <label key={genre}> {genre} </label>
                        <div className="sign-container-list" >
                            {sign.map((sign) => (
                                <div className="sign-container" key={sign.name}>
                                    <input
                                        type="radio"
                                        name={genre}
                                        value={sign.name}
                                        onChange={(e) =>
                                            setUserVote({ ...userVote, [genre]: e.target.value })} />
                                </div>
                            ))}
                        </div>
                        {/* <select value={userVote} key={genre + "select"} onChange={(e) => setUserVote(e.target.value)}>
                            {sign.map(({ name, unicode }) => (
                                <option key={name} value={name}>
                                    {name} {unicode}
                                </option>
                            ))}
                        </select> */}
                    </div>
                ))}
            </form>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </StyledVote >
    );
}
export default UserVote