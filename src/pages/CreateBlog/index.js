import React from 'react'
import { Input, Button, Upload, Textarea, Gap, Link } from '../../components'
import './createblog.scss'
import { useHistory } from 'react-router-dom'

const CreateBlog = () => {
    const history = useHistory();
    return (
        <div>
            <Link title="kembali" onClick={() => history.push('/')} />
            <p className="title">Create Blog</p>
            <Input label="Post Title" />
            <Upload />
            <Textarea />
            <Gap height={20} />
            <div className="button-action">
                <Button title="Save" />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default CreateBlog
