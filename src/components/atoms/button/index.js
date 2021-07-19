import React from 'react';
import './button.scss';

const button = ({ title, ...rest }) => {
    return (
        <button className="button" {...rest}>{title}</button>
    )
}

export default button
