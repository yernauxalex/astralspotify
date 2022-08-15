import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import fonts from '../styles/fonts';

function Header() {
    return (
        <Navbar className="d-flex justify-content-center">
            <Navbar.Brand href="/" style={{ fontSize: fonts.standard.h1 }}>
                Astro compatibility for Spotify
            </Navbar.Brand>
        </Navbar>
    )
}
export default Header