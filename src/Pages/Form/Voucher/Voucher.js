import React from 'react';

const Voucher = ({ handleOnBlur }) => {
    return (
        <div>
            <input type="text" name="voucher" onBlur={handleOnBlur} placeholder='Voucher code' id="" required />
        </div>
    );
};

export default Voucher;