import React, { useState } from 'react';
import { Button, Dropdown, DropdownButton, FormControl, InputGroup, Modal, SplitButton } from 'react-bootstrap';

const PassengerClass = ({ handleOnBlur }) => {

    const [value, setValue] = useState(1)
    const [value2, setValue2] = useState('Ecomony');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFormSubmit = (e) => {
        handleShow();
        e.preventDefault();
    }


    const handleSelect = (e) => {
        console.log(e);
        setValue2(e);

    }
    const handleClickPos = () => {
        setValue(value + 1)
    }
    const handleClickNeg = () => {
        if (value > 1) {
            setValue(value - 1)
        }
    }
    return (
        // <div>
        //     <p>Passengers class</p>
        //     <input type="PassengerClas" onBlur={handleOnBlur} name="" id="" required />
        // </div>
        // <InputGroup className="mb-3">
        //     <FormControl aria-label="Text input with dropdown button" value={value + " Passengers, " + value2} />
        //     <DropdownButton
        //         style={{ padding: '-2px', backgroundColor: 'red' }}
        //         onSelect={handleSelect}
        //     >
        //         <Dropdown.Item eventKey="Economy" href="#">Economy</Dropdown.Item>
        //         <Dropdown.Item eventKey="Premium" href="#">Premium</Dropdown.Item>
        //         <Dropdown.Item eventKey="Upper Class" href="#">Upper Class</Dropdown.Item>
        //         <Dropdown.Divider />
        //         <Dropdown.Item href="#">Separated link</Dropdown.Item>
        //         <Dropdown.Divider />

        //         <Button onClick={handleClickPos}>Add</Button>
        //         <Button onClick={handleClickNeg}>Remove</Button>
        //     </DropdownButton>

        // </InputGroup>



        <InputGroup className="mb-3">
            <FormControl aria-label="Text input with dropdown button" value={value + " Passengers, " + value2} />
            <DropdownButton
                style={{ padding: '-2px', backgroundColor: 'red' }}
                onClick={handleFormSubmit}
            >
                <Dropdown.Item href="#"> ff
                    <Modal show={show} onHide={handleClose} size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Form Data by the USer</Modal.Title>
                        </Modal.Header>

                        <Modal.Footer>
                            <button variant="secondary" onClick={handleClose}>
                                Close
                            </button>

                        </Modal.Footer>
                    </Modal>
                </Dropdown.Item>

            </DropdownButton>

        </InputGroup>
    );
};

export default PassengerClass;