import React from 'react';
import './link.scss';

const link = ({href, title}) => {
    return (
        <div className="link">
            <a href={href}>{title}</a>
        </div>
    )
}

export default link
