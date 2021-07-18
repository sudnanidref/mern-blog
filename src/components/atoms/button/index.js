import React from 'react';
import './button.scss';

const button = ({title, ...rest}) => {
    return (
        <div>
            <button className="button" {...rest}>{title}</button>
        </div>
    )
}

export default button
