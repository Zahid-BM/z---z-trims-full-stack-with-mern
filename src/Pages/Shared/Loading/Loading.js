import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center my-5'>
            <Button variant="success" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="md"
                    role="status"
                    aria-hidden="true"
                />
                <span className='display-5'>Loading...</span>
            </Button>
        </div>
    );
};

export default Loading;