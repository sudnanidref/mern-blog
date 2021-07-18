import React from 'react'
import './register.scss'
import { RegisterBg } from '../../assets/images'
import { Input, Button, Gap, Link } from '../../components'

const Register = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-img"/>
            </div>
            <div className="right">
                <p className="title">Form Registser</p>

                <Input label="Full Name" placeholder="Full Name" />
                <Gap height={20} />
                <Input label="Email" placeholder="Email" />
                <Gap height={20} />
                <Input label="password" placeholder="Password" type="password" />
                <Gap height={30} />
                <Button title="submit" type="submit"/>
                <Gap height={100} />
                <Link href="/login" title="Kembali ke Login" />
            </div>
        </div>
    )
}

export default Register
