import React from 'react';

const Voucher = ({ handleOnBlur }) => {
    return (
        <div>
            <p style={{ textAlign: 'start' }}>Voucher or event code</p>
            <input type="text" style={{ width: '100%', padding: '7px' }} name="voucher" onBlur={handleOnBlur} placeholder='Enter code' id="" required />
        </div>
    );
};

export default Voucher;