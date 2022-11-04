/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Row, Index, Col, Button } from "react-bootstrap";
import { sign } from '../datas/sign';
import { genre } from '../datas/genre';


function ExtendedVote() {
    const [selectedSign, setSelectedSign] = useState('aries');
    const [selectedGenre, setSelectedGenre] = useState('rock');
    const [formData, setFormData] = useState([{ sign: 'sign', genre: 'genre', value: 0 }]);

    // add selectedSign and selectedGenre to formData
    const addInput = (e) => {
        e.preventDefault();
        const newFormData = [...formData];
        newFormData.push({ sign: selectedSign, genre: selectedGenre, value: 0 });
        setFormData(newFormData);
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
                            {genre.map(({ name }) => (
                                <option key={name} value={name}>
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
                {formData.map((data, index) => (
                    <>
                        <Form.Label column md={2} xs="auto">{data.sign}</Form.Label>
                        <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formGroupSign" key={index}>
                            <Form.Label column sm="3">
                                {data.genre}
                            </Form.Label>
                            <Col md={3} xs="auto">
                                <Form.Range
                                    value={data.value}
                                    onChange={(e) => {
                                        const newFormData = [...formData];
                                        newFormData[index].value = e.target.value;
                                        setFormData(newFormData);
                                    }}
                                />
                            </Col>
                            <Col md={1} xs="auto">
                                <Form.Control value={data.value} />
                            </Col>
                        </Form.Group>
                    </>
                ))}
            </Form>
        </>
    );
}
export default ExtendedVote;