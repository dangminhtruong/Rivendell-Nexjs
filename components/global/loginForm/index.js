import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './form.css'
import axios from '../../../config/axios';
import {setToken} from '../../../lib/token';
import Router from 'next/router'

class Index extends Component {
    constructor() {
        super();
        this.state = {
            username : '',
            password : '',
            error : false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    static getInitialProps({ store, isServer }) {
        return { isServer }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    logIn = () => {
        axios.post(`/admin/login`,{
            username : this.state.username,
            password : this.state.password
        })
        .then((res) => {
            if (res.data !== 500) {
                setToken(res.data);
                Router.push('/')
            } else {
                this.setState({ error : true });
            }
        });
    }

    render() {
        return (
            <div className="FormWrap">
                <div className="Left"></div>
                <form className="FormLogin">
                    <label htmlFor="fname">User name</label>
                    <input type="text" name="username" autoComplete="username" onChange={this.handleChange} />
                    <label htmlFor="lname">Password</label>
                    <input type="password" name="password" autoComplete="password" onChange={this.handleChange} />
                    { (this.state.error) ? <label htmlFor="messages" style={{ color : 'red' }}>In valid username or password!</label> : '' }
                    <input type="button" value="Submit" onClick={this.logIn} autoComplete="submit" style={{ marginTop: '2vh' }} />
                </form>
                <div className="Right"></div>
            </div>
        )
    }
}

export default connect()(Index)
