import React, { useState } from 'react';
import FromPart from '../FromPart/FromPart';


const MainForm = () => {

    const [loginData, setLoginData] = useState([]);

    const [disable, setDisable] = useState(false);

    const handleD = () => {

        disable ? setDisable(false) : setDisable(true);

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
            <div class="input-group input-group-sm mb-3 w-50">
                <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>

            <button onClick={handleD}>{disable ? 'Enable' : 'Disable'}</button>

            <form >
                <div class="input-group input-group-sm mb-3 w-50">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>

                <input type="text" placeholder='from main' onBlur={handleOnBlur} name='formMain' required />
                <input type="text" placeholder='from main disable demo' onBlur={handleOnBlur} name='formMain' disabled={disable ? "disabled" : ""} required />
                <FromPart onBlur={handleOnBlur}></FromPart>
                <button type="submit">Submit</button>
            </form>

        </div>
    );
};

export default MainForm;