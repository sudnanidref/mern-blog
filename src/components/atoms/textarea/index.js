import React from 'react'
import './textarea.scss'

const textarea = ({ ...rest }) => {
    return (
        <div>
            <textarea className="text-area" {...rest}></textarea>
        </div>
    )
}

export default textarea
