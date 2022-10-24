import React, { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

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
                <Navbar.Brand href="#home">Astro compatibility for Spotify</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
                <Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">AstroSpotify</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="d-flex flex-column justify-content-between">
                        <Nav className="justify-content-start flex-grow-1 pe-3">
                            {/* <Nav.Link  href="#action1">Login</Nav.Link>
                            <Nav.Link  href="#action2">Vote</Nav.Link> */}
                            {sessionStorage.getItem('spotifyDatalong_term') ||
                                sessionStorage.getItem('spotifyDatamedium_term') ||
                                sessionStorage.getItem('spotifyDatashort_term') ? (
                                <Nav.Link href="/" onClick={logout} >Logout</Nav.Link>
                            ) : null}

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

        // <Navbar className="d-flex justify-content-center">
        //     <Navbar.Brand href="#home" style={{ fontSize: fonts.standard.h1 }}>
        //         Astro compatibility for Spotify
        //     </Navbar.Brand>
        // </Navbar>
    )
}
export default Header