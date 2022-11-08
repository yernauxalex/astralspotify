import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
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
            console.log('index', signIndex);
            newFormData.push({ sign: selectedSign, vote: [{ genre: selectedGenre, value: 0 }] });
            setFormData(newFormData);
        }
    }

    return (
        <>
            <div>
                <h1>Extended Vote</h1>
            </div>
            <Form>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formGroupSign">
                    <Form.Label column md={2} xs="auto">Enter your sign</Form.Label>
                    <Col md={3} xs="auto">
                        <Form.Select value={selectedSign} onChange={(e) => setSelectedSign(e.target.value)} aria-label="enter your astro sign">
                            {sign.map(({ name, unicode }) => (
                                <option key={name} value={name}>
                                    {name} {unicode}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formGroupSign">
                    <Form.Label column md={2} xs="auto">Enter your sign</Form.Label>
                    <Col md={3} xs="auto">
                        <Form.Select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} aria-label="enter your astro sign">
                            {genre.map(({ name }, index) => (
                                <option key={index} value={name}>
                                    {name}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group className="d-flex justify-content-center" controlId="formGroupButton">
                    <Button variant="success" type="submit" className="w-50" onClick={addInput}>Found your matching sign</Button>
                </Form.Group>
            </Form>
            <Form as={Row} className="mb-3 d-flex justify-content-center" controlId="formGroupSign">
                {formData.map((data, indexData) => (
                    <>
                        <Form.Label column md={2} xs="auto">{data.sign}</Form.Label>
                        {data.vote.map((vote, index) => (
                            <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formGroupSign" key={index}>
                                <Form.Label column sm="3">
                                    {vote.genre}
                                </Form.Label>
                                <Col md={3} xs="auto">
                                    <Form.Range
                                        value={vote.value}
                                        onChange={(e) => {
                                            const newFormData = [...formData];
                                            newFormData[indexData].vote[index].value = e.target.value;
                                            setFormData(newFormData);
                                        }}
                                    />
                                </Col>
                                <Col md={1} xs="auto">
                                    <Form.Control value={vote.value} />
                                </Col>
                            </Form.Group>
                        ))}
                    </>
                ))}
            </Form>
        </>
    );
}
export default ExtendedVote;