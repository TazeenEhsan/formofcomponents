import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import DepartureAndReturn from './DepartureAndReturn/DepartureAndReturn';
import Destination from './Destination/Destination';
import FromPart from './FromPart/FromPart';
import PassengerClass from './PassengerClass/PassengerClass';
import Voucher from './Voucher/Voucher';


const Form = () => {

    const [loginData, setLoginData] = useState([]);

    const [disable, setDisable] = useState(false);

    const [show, setShow] = useState(false);


    // const handleDisable = () => {

    //     disable ? setDisable(false) : setDisable(true);

    // }
    const handleDisable = (pp) => {

        setDisable(pp);

    }

    // Modal Control function ---------------------
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFormSubmit = (e) => {
        handleShow();
        e.preventDefault();
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;

        setLoginData(newLoginData);
    }
    console.log(loginData);



    return (
        <div>
            <h1>Hello</h1>





            <button onClick={handleDisable}>{disable ? 'Enable' : 'Disable'}</button>







            <form onSubmit={handleFormSubmit} className='container' style={{ backgroundColor: 'red' }}>

                <input type="radio" id="html" onClick={() => handleDisable(true)} name="disabled" value="HTML" />
                <label for="html">One Way</label>
                <input type="radio" id="css" onClick={() => handleDisable(false)} name="disabled" value="CSS" />
                <label for="css">Two way</label> <br />

                <input type="text" placeholder='from main disable demo' onBlur={handleOnBlur} name='formMain' disabled={disable ? "disabled" : ""} required />

                <FromPart handleOnBlur={handleOnBlur}></FromPart>
                <Destination handleOnBlur={handleOnBlur}></Destination>
                <DepartureAndReturn disable={disable} handleOnBlur={handleOnBlur}></DepartureAndReturn>
                <PassengerClass handleOnBlur={handleOnBlur}></PassengerClass>
                <Voucher handleOnBlur={handleOnBlur}></Voucher>





                <button type="submit">Submit</button>
            </form>



            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Form Data by the USer</Modal.Title>
                </Modal.Header>
                <Modal.Body>From:{loginData.from}</Modal.Body>
                <Modal.Body>Destination:{loginData.destination}</Modal.Body>
                <Modal.Body>Departure Date:{loginData.departure}</Modal.Body>
                {
                    !disable && <Modal.Body>Return Date:{loginData.return}</Modal.Body>
                }
                <Modal.Body>Voucher:{loginData.voucher}</Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
                    </button>

                </Modal.Footer>
            </Modal>




        </div>
    );
};

export default Form;