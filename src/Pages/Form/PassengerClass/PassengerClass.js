import React, { useState } from 'react';
import { Button, Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';

const PassengerClass = ({ handlepassengers }) => {

    const [value, setValue] = useState(1)
    const [value2, setValue2] = useState('Ecomony');
    const [mainValue, setMainValue] = useState();


    const handleSelect = (e) => {
        console.log(e);
        setValue2(e);
        const values = value + " Passengers, " + e;
        setMainValue(values);
        handlePassengesHere();

    }
    const handlePassengesHere = () => {
        handlepassengers(mainValue);
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

        <>
            <p style={{ textAlign: 'start' }}>Passengers/travel class</p>
            <InputGroup className="mb-3">
                <FormControl aria-label="Text input with dropdown button" value={value + " Passengers, " + value2} />
                <DropdownButton
                    title=""
                    required='true'
                >
                    <p>Travel Class</p>
                    <DropdownButton

                        onSelect={handleSelect}
                        title=""
                        active='true'
                    >
                        <Dropdown.Item eventKey="Economy" href="#">Economy</Dropdown.Item>
                        <Dropdown.Item eventKey="Premium" href="#">Premium</Dropdown.Item>
                        <Dropdown.Item eventKey="Upper Class" href="#">Upper Class</Dropdown.Item>

                    </DropdownButton>
                    <Dropdown.Divider />
                    <p>PASSENGERS</p>
                    <p>Adult</p> <Button style={{ padding: '2px', backgroundColor: 'green' }} onClick={handleClickPos}>+</Button> <Button style={{ padding: '3px', backgroundColor: 'red' }} onClick={handleClickNeg}>-</Button>
                    <p>Young Adult</p><Button style={{ padding: '2px', backgroundColor: 'green' }} onClick={handleClickPos}>+</Button> <Button style={{ padding: '3px', backgroundColor: 'red' }} onClick={handleClickNeg}>-</Button>
                    <p>Child</p><Button style={{ padding: '2px', backgroundColor: 'green' }} onClick={handleClickPos}>+</Button> <Button style={{ padding: '3px', backgroundColor: 'red' }} onClick={handleClickNeg}>-</Button>
                    <p>Infrant</p><Button style={{ padding: '2px', backgroundColor: 'green' }} onClick={handleClickPos}>+</Button> <Button style={{ padding: '3px', backgroundColor: 'red' }} onClick={handleClickNeg}>-</Button>


                </DropdownButton>

            </InputGroup>
        </>
    );
};

export default PassengerClass;