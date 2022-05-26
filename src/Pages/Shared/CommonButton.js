import React from 'react';
import { Button } from 'react-bootstrap';

const CommonButton = ({ children }) => {
    return (
        <div>
            <Button className='common-btn border-0 rounded-pill px-5 hover1'>{children}</Button>
        </div>
    );
};

export default CommonButton;