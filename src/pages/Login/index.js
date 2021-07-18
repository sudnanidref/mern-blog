import React from 'react'
import { LoginBg } from '../../assets/images'
import { Input, Button, Gap, Link } from '../../components'

const Login = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-img"/>
            </div>
            <div className="right">
                <p className="title">Form Login</p>

                <Input label="Email" placeholder="Email" />
                <Gap height={20} />
                <Input label="password" placeholder="Password" type="password" />
                <Gap height={30} />
                <Button title="submit" type="submit"/>
                <Gap height={100} />
                <Link href="/register" title="Register" />
            </div>
        </div>
    )
}

export default Login
