/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useEffect } from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";

function DisplayVoteModal(props) {
    const userGenre = props.userGenre;
    const userSign = props.userSign;
    const [formData, setFormData] = useState([{ sign: '', genre: '', value: 0 }]);

    //useEffect to update the formData state with the userGenre props with default value 0, and the userSign props
    useEffect(() => {
        const newFormData = userGenre.map((genre) => {
            return { sign: userSign, genre: genre, value: 0 }
        });
        setFormData(newFormData);
    }, [userGenre, userSign]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <Modal show={props.show} onHide={props.toggle} centered>
            <Modal.Header closeButton>
                <Modal.Title>Help us to get a more accurate matching</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {formData.map((data, index) => (
                        <Form.Group as={Row} key={index}>
                            <Form.Label column sm="3">
                                {data.genre}
                            </Form.Label>
                            <Col sm="7">
                                <Form.Range
                                    value={data.value}
                                    onChange={(e) => {
                                        const newFormData = [...formData];
                                        newFormData[index].value = e.target.value;
                                        setFormData(newFormData);
                                    }}
                                />
                            </Col>
                            <Col sm="2">
                                <Form.Control value={data.value} readOnly />
                            </Col>
                        </Form.Group>
                    ))}
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button type="submit" onClick={handleSubmit}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default DisplayVoteModal;
