import React from 'react'
import './upload.scss'
import { RegisterBg } from '../../../assets/images'

const Upload = () => {
    return (
        <div className="upload">
            <img src={RegisterBg} className="preview" />
            <input type="file" />
        </div>
    )
}

export default Upload
