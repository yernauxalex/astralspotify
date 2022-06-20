import React from "react";
import StyledFooter from "../styles/StyledFooter";
//import spotifyLogo from '../assets/Spotify_Logo_RGB_Green.png';

function Footer() {
    return (
        <StyledFooter>
        <p>
            Made with{" "}
            <span role="img" aria-label="heart">
                ❤️
            </span>{" "}
            by{" "}
            <a href="https://github.com/yernauxalex/astralspotify" target="_blank" rel="noreferrer">
                <span role="img" aria-label="linkedin">
                    💻
                </span></a>
        </p>
        <p>For any suggestions please DM me on
        <a href="https://twitter.com/Alexys_dev" target="_blank" rel="noreferrer">
                <span role="img" aria-label="twitter">
                    🐦
                </span></a>
        </p>
        {/* <img src={spotifyLogo} alt="spotify logo" /> */}
        </StyledFooter>
    );
}
export default Footer;
