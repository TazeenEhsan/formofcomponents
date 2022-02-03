import React, { useState } from 'react';
import DatePicker from 'react-datepicker'

const FromPart = ({ handleOnBlur }) => {
    const [startDate, setStartDate] = useState(new Date());





    // };
    return (
        <>
            <div class="input-group input-group-sm mb-3 w-50">
                <span class="input-group-text p-1" id="inputGroup-sizing-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg></span>
                <input type="text" name='from' onBlur={handleOnBlur} placeholder='Select departure' class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required ></input>
            </div>
        </>
    );
};

export default FromPart;