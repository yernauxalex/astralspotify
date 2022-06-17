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
            <a href="
            
            ">
                <span role="img" aria-label="linkedin">
                    💻
                </span>
            </a>
        </p>
        {/* <img src={spotifyLogo} alt="spotify logo" /> */}
        </StyledFooter>
    );
}
export default Footer;
