import React from 'react'
import './detailblog.scss'
import { RegisterBg } from '../../assets/images'
import { Gap, Button } from '../../components'
import { useHistory } from 'react-router-dom'

const DetailBlog = () => {
    const history = useHistory();
    return (
        <div className="detail-blog-wrapper">
            <Gap height={20} />
            <img src={RegisterBg} className="image-thumb" />
            <p className="detail-title">Content Detail Blog</p>
            <p className="detail-author">Author - Date </p>
            <p className="detail-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quas magnam, earum numquam doloremque sed
            voluptatum non laborum aliquid. Ipsam eveniet, sed saepe facilis dolorem omnis odio recusandae alias
            consequuntur quae harum eius, aperiam quod debitis! Deserunt numquam similique, aliquam voluptas aliquid
            doloribus officiis expedita exercitationem voluptatum id ab distinctio! Dicta earum dolore reiciendis quod illo
            doloribus iusto ullam recusandae ab saepe maiores quidem consequatur, nihil aliquam cupiditate commodi corporis,
            praesentium mollitia asperiores amet fugit eaque officiis? Nesciunt quos nulla molestias atque assumenda. Fuga
            reprehenderit animi, ducimus ad vel dicta et ipsa doloribus officia quia illo sit deleniti obcaecati, dolor
            eveniet praesentium iste, eos quis voluptatibus tempore libero! Recusandae soluta, vel eos dolore id pariatur a
            molestiae earum veritatis tempore qui explicabo beatae vitae repellat suscipit est, maiores harum, quasi
            quibusdam architecto sit. Quasi, corporis? Sapiente pariatur rerum totam nam earum! Assumenda a praesentium
            atque perferendis in incidunt quas dolor harum natus deserunt voluptatibus molestias officiis dolore maxime
            voluptate consequatur distinctio unde sapiente eveniet, et expedita eaque at reiciendis quaerat. Quod optio
            cumque veniam maiores minus animi, dolore ullam aut velit iure dolores odit quia, quaerat ea enim labore libero
            deserunt delectus eius vel quam accusamus dolorem ab perspiciatis? Veniam pariatur laudantium sint libero neque
            rerum cumque officia cum quod culpa ullam blanditiis vitae excepturi laborum enim commodi necessitatibus id
            tempore, quam possimus vel consectetur sapiente molestias? Laudantium distinctio consequatur dolor quod enim
            quos assumenda accusamus fugiat rem. Sint quis est laborum numquam ullam suscipit cupiditate odit repudiandae
            aut? Autem repellendus rem animi porro sint amet aliquid. Enim et beatae sequi nisi laboriosam asperiores?
            Accusamus nostrum facilis nisi, aut unde ipsam! Itaque, mollitia sint corrupti delectus expedita modi
            consectetur voluptatum esse id adipisci animi ut asperiores quisquam nulla totam. Eveniet dolorum officiis
        cupiditate corrupti ratione laudantium quaerat provident natus aut?</p>

            <Gap height={20} />
            <Button title="Kembali" onClick={() => history.push('/')} />
            <Gap height={20} />
        </div>
    )
}

export default DetailBlog