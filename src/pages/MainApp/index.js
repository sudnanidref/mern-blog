import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateBlog from '../CreateBlog'
import DetailBlog from '../DetailBlog'
import Home from '../Home'
import { Header, Footer } from '../../components'
import './mainapp.scss'

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <div className="header-wrapper">
                <Header />
            </div>

            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path="/create-blog">
                            <CreateBlog />
                        </Route>
                        <Route path="/detail-blog">
                            <DetailBlog />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default MainApp
