import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import DepartureAndReturn from './DepartureAndReturn/DepartureAndReturn';
import Destination from './Destination/Destination';
import FromPart from './FromPart/FromPart';
import PassengerClass from './PassengerClass/PassengerClass';
import Voucher from './Voucher/Voucher';


const Form = () => {

    const [loginData, setLoginData] = useState({ passengers: '1 Passengers, Economy' });

    const [disable, setDisable] = useState(false);

    const [show, setShow] = useState(false);


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


    const handleDates = (name, date) => {
        // console.log(name, date.toLocaleDateString());
        const field = name;
        const value = date.toLocaleDateString();
        const newLoginData = { ...loginData };
        newLoginData[field] = value;

        setLoginData(newLoginData);

    }

    const handlepassengers = (data) => {
        const field = 'passengers'
        const value = data;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;

        setLoginData(newLoginData);
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


            <form onSubmit={handleFormSubmit} className='container' style={{ backgroundColor: 'white' }}>

                <h4 style={{ textAlign: 'start', color: 'red', marginBottom: '40px', marginLeft: '20px' }}>Flight deals with Virgin Atlantic</h4>
                <div style={{ textAlign: 'start' }}>
                    <input type="radio" id="html" onClick={() => handleDisable(true)} name="disabled" style={{ marginRight: '4px' }} value="OneWay" />
                    <label for="html" style={{ marginRight: '20px' }}>One Way</label>
                    <input type="radio" id="css" onClick={() => handleDisable(false)} name="disabled" style={{ marginRight: '4px' }} value="round" />
                    <label for="css">Round Trip</label> <br />
                </div>

                <div className="row">
                    <div className="col-lg-4" >
                        <FromPart handleOnBlur={handleOnBlur}></FromPart>
                    </div>
                    <div className="col-lg-4" >
                        <Destination handleOnBlur={handleOnBlur}></Destination>
                    </div>
                    <div className="col-lg-4" >
                        <DepartureAndReturn disable={disable} handleDates={handleDates}></DepartureAndReturn>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-lg-4" >
                        <PassengerClass handlepassengers={handlepassengers}></PassengerClass>
                    </div>
                    <div className="col-lg-4" >
                        <Voucher handleOnBlur={handleOnBlur}></Voucher>
                    </div>
                    <div className="col-lg-4" >
                        <p></p>
                        <button style={{ width: '100%', marginTop: '30px', padding: '7px', backgroundColor: 'red', color: 'white' }} type="submit">Book Now</button>
                    </div>
                </div>

            </form>



            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Form Data by the USer</Modal.Title>
                </Modal.Header>
                <Modal.Body>From:{loginData.from}</Modal.Body>
                <Modal.Body>Destination:{loginData.destination}</Modal.Body>
                <Modal.Body>Departure Date:{loginData.start}</Modal.Body>
                <Modal.Body>passengers:{loginData.passengers}</Modal.Body>
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