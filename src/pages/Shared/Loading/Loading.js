import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
    return (
        <div style={{ height: '467px' }} className='w-100 d-flex justify-content-center align-items-center'>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
    );
};

export default Loading;