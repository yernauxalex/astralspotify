import React from "react";
import { Container, Accordion } from "react-bootstrap";

function About() {
    return (
        <Container className="my-5 custom-about" id="about">
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How does it work?</Accordion.Header>
                    <Accordion.Body>
                        At the moment, each music genre has a random compatibility value,
                        which is then multiplied by the coefficient of your astrological sign so the sum of all the genres
                        in your top artists gives your compatibility index
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What are the future features planned?</Accordion.Header>
                    <Accordion.Body>
                        A voting system is planned, it will allow to attribute an affinity between each music genre
                        and each astrological sign
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}
export default About;