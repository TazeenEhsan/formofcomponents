import React from 'react';

const DepartureAndReturn = ({ handleOnBlur, disable }) => {
    return (
        <>
            <div>
                <p>Departure</p>
                <input type="date" name='departure' onBlur={handleOnBlur} placeholder='Select dates' required />
            </div>
            <div>
                <p>Return</p>
                <input type="date" name='return' onBlur={handleOnBlur} placeholder='Select dates' disabled={disable ? "disabled" : ""} required />
            </div>
        </>
    );
};

export default DepartureAndReturn;