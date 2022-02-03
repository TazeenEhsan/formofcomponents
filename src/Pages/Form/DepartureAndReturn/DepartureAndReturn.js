import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";


const DepartureAndReturn = ({ handleDates, disable }) => {

    const [startDate, setStartDate] = useState(null);
    const [startDateReturn, setStartDateReturn] = useState(null);

    console.log(startDate?.toLocaleDateString());


    const handleStartDate = (date) => {
        setStartDate(date);
        handleDates('start', date);
    }

    const handleReturnDate = (date) => {
        setStartDateReturn(date);
        handleDates('return', date);
    }

    const CustomInput = React.forwardRef((props, ref) => {
        return (
            <div style={{ border: '1px solid black', textAlign: 'start', padding: '4px' }}>
                <label style={{ marginRight: '25px' }} onClick={props.onClick} ref={ref}>
                    {props.value || props.placeholder}
                </label>
                <FontAwesomeIcon icon={faCalendarAlt} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <>
            {/* <div className="row" style={{}}>
                <div className="col-lg-6">
                    <p style={{ textAlign: 'start' }}>Departure</p>
                    <input type="date" style={{ width: '100%', borderRadius: '5px' }} name='departure' onBlur={handleOnBlur} placeholder='Select dates' required />
                </div>
                <div className="col-lg-6">
                    <p style={{ textAlign: 'start' }}>Return</p>
                    <input type="date" style={{ width: '100%', borderRadius: '5px' }} name='return' onBlur={handleOnBlur} placeholder='Select dates' disabled={disable ? "disabled" : ""} required />
                </div>
            </div> */}
            <div className="row" style={{}}>
                <div className="col-lg-6">
                    <p style={{ textAlign: 'start' }}>Departure</p>
                    <DatePicker dateFormat="dd/MM/yyyy" placeholderText="Select dates" required='true' minDate={new Date()} monthsShown={2} selected={startDate} onChange={(date) => handleStartDate(date)} customInput={<CustomInput />} />
                </div>
                <div className="col-lg-6">
                    {
                        disable ? <p style={{ backgroundColor: '#5e5e20', color: 'white' }}>Return blocked</p> : <p style={{ textAlign: 'start' }}>Return</p>
                    }
                    <DatePicker dateFormat="dd/MM/yyyy" placeholderText="Select dates" disabled={disable ? "disabled" : ""} required={true} minDate={startDate} monthsShown={2} selected={startDateReturn} onChange={(date) => handleReturnDate(date)} customInput={<CustomInput />} />

                </div>
            </div>

        </>
    );
};

export default DepartureAndReturn;