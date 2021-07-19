import React from 'react'
import { RegisterBg } from '../../../assets/images'
import './blogitem.scss'
import { Button, Gap } from '../../atoms'
import { useHistory } from 'react-router-dom'

const BlogItem = () => {
    const history = useHistory();
    return (
        <div className="blog-item">
            <img src={RegisterBg} className="image-thumb" />
            <div className="content-detail">
                <p className="title">Blog Item</p>
                <p className="author">Author-Date post</p>
                <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, minus ipsum. Exercitationem vero excepturi nobis tenetur! Molestias ut optio, eius illo voluptate repellat provident, quam sint et obcaecati tenetur amet.</p>

                <Gap height={20} />
                <Button title="Lihat Detail" onClick={() => history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem
