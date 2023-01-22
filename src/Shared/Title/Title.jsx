import React from 'react';
import './Title.css';

const Title = ({ title }) => {
    return (
        <div className='text-center'>
            <h1 className='title'>{title}</h1>
        </div>
    );
};

export default Title;