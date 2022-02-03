import React from 'react';

const Destination = ({ handleOnBlur }) => {
    return (
        <>
            <div class="input-group input-group-sm mb-3 w-50">
                <span class="input-group-text p-1" id="inputGroup-sizing-sm">A</span>
                <input type="text" name='destination' onBlur={handleOnBlur} placeholder='Select destination' class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required />
            </div>
        </>
    );
};

export default Destination;