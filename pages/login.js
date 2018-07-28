import React, { Component } from 'react';
import Header from '../components/global/header'
import {withRouter} from 'next/router';
import LoginForm from '../components/global/loginForm'

class Login extends Component{
    static getInitialProps ({ store, isServer }) {
        return { isServer }
    }
    render(){
        return(
            <div>
                <Header />
                <LoginForm />
            </div>
        )
    }
}

export default withRouter(Login);
