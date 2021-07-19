import React from 'react';
import './link.scss';

const link = ({ title, ...rest }) => {
    return (
        <div className="link">
            <p {...rest}>{title}</p>
        </div>
    )
}

export default link
