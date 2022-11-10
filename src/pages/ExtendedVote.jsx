import React, { useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { sign } from '../datas/sign';
import { genre } from '../datas/genre';



function ExtendedVote() {
    const [selectedSign, setSelectedSign] = useState('aries');
    const [selectedGenre, setSelectedGenre] = useState('rock');
    const [formData, setFormData] = useState([]);

    // add selectedSign and selectedGenre to formData
    const addInput = (e) => {
        e.preventDefault();
        const newFormData = [...formData];
        const signIndex = newFormData.findIndex((item) => item.sign === selectedSign);
        if (signIndex !== -1) {
            const genreIndex = newFormData[signIndex].vote.findIndex((item) => item.genre === selectedGenre);
            if (genreIndex !== -1) {
                alert('Selection already in the list');
            } else {
                newFormData[signIndex].vote.push({ genre: selectedGenre, value: 0 });
                setFormData(newFormData);
            }
        } else {
            newFormData.push({ sign: selectedSign, vote: [{ genre: selectedGenre, value: 0 }] });
            setFormData(newFormData);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <Container fluid>
            <Container className="my-3 d-flex flex-column  align-items-center">
                <h2>Extended Vote</h2>
                <p>Here you can rate the affinity between each music genre and astro sign, to gve us a better accurary in our result</p>
            </Container>
            <Form as={Container} className="d-flex flex-column justify-content-center">
                <Form.Group className="mb-3 d-flex flex-column flex-sm-row justify-content-center" controlId="formGroupSign">
                    <Form.Label column md={2} xs="auto" className="me-3">Select a sign</Form.Label>
                    <Col md={4} sm={5} xs="auto">
                        <Form.Select value={selectedSign} onChange={(e) => setSelectedSign(e.target.value)} aria-label="select an astro sign">
                            {sign.map(({ name, unicode }) => (
                                <option key={name} value={name}>
                                    {name} {unicode}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-column flex-sm-row justify-content-center" controlId="formGroupSign">
                    <Form.Label column md={2} xs="auto" className="me-3">Select a genre</Form.Label>
                    <Col md={4} sm={5} xs="auto">
                        <Form.Select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} aria-label="select a music genre">
                            {genre.map(({ name }, index) => (
                                <option key={index} value={name}>
                                    {name}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group className="d-flex justify-content-center" controlId="formGroupButton">
                    <Button variant="success" type="submit" className="w-50" onClick={addInput}>Create your selection</Button>
                </Form.Group>
            </Form>
            <Form className="mb-3 d-flex flex-column align-items-center" controlId="formGroupSign">
                {formData.map((data, indexData) => (
                    <Container key={indexData} className="mt-3 d-flex flex-column custom-selection">
                        <Form.Label >{data.sign}</Form.Label>
                        {data.vote.map((vote, index) => (
                            <Form.Group className="mb-3 d-flex flex-column flex-md-row justify-content-center align-items-center" controlId="formGroupSign" key={index}>
                                <Form.Label column md={3} xs="auto">
                                    {vote.genre}
                                </Form.Label>
                                <Row className="d-flex justify-content-center">
                                    <Col >
                                        <Form.Range
                                            min={0}
                                            max={100}
                                            value={vote.value}
                                            onChange={(e) => {
                                                const newFormData = [...formData];
                                                newFormData[indexData].vote[index].value = e.target.value;
                                                setFormData(newFormData);
                                            }}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            aria-valueNow={vote.value}
                                        />
                                    </Col>
                                    <Col md={3} xs={3}>
                                        <Form.Control value={vote.value} readOnly />
                                    </Col>
                                </Row>
                            </Form.Group>
                        ))}
                    </Container>
                ))}
            </Form>
            {formData.length > 0 && (
                <Form.Group className="d-flex justify-content-center" controlId="formGroupButton">
                    <Button variant="success" type="submit" onClick={handleSubmit}>Submit</Button>
                </Form.Group>
            )}

        </Container>
    );
}
export default ExtendedVote;