import React, { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import SpotifyIcon from '../assets/Spotify_Icon_RGB_Green.png';

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const logout = () => {
        sessionStorage.clear();
    };
    return (
        <Navbar expand={false} bg="light" >
            <Container fluid>
                <Navbar.Brand href="#home" style={{ fontSize: '1.3rem' }}>Astro compatibility for Spotify</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
                <Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" show={show} onHide={handleClose} restoreFocus={false}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">AstroSpotify</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="d-flex flex-column justify-content-between">
                        <Nav className="justify-content-start flex-grow-1 pe-3">
                            {/* <Nav.Link  href="#action1">Login</Nav.Link>
                            <Nav.Link  href="#action2">Vote</Nav.Link> */}
                            {sessionStorage.getItem('spotifyData_long_term') ||
                                sessionStorage.getItem('spotifyData_medium_term') ||
                                sessionStorage.getItem('spotifyData_short_term') ? (
                                <Nav.Link href="/" onClick={logout} >Logout</Nav.Link>
                            ) : null}

                            <Nav.Link href="#about" onClick={event => {
                                event.preventDefault();
                                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                                handleClose();
                            }}>About</Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end flex-grow-1 pe-3">

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
                            <p>If by any chance you want to discover my weird taste in music its here:{" "}
                                <a href="https://open.spotify.com/user/1135271063?si=10914ce5af6249c5" target="_blank" rel="noreferrer" alt="Link to my personnal Spotify profile">
                                    <img src={SpotifyIcon} alt="spotify logo" className="spotify-logo" width="22px" height="22px" />
                                </a>
                            </p>
                            <p>For any suggestions please DM me on
                                <a href="https://twitter.com/Alexys_dev" target="_blank" rel="noreferrer">
                                    <span role="img" aria-label="twitter">
                                        🐦
                                    </span></a>
                            </p>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>

            </Container>

        </Navbar >
    )
}
export default Header