import React from 'react'
import { connect } from 'react-redux'
import classes from './form.css'

class Index extends React.Component {
    static getInitialProps({ store, isServer }) {
        return { isServer }
    }
    render() {
        return (
            <div className="FormWrap">
                <div className="Left"></div>
                <form className = "FormLogin">
                    <label htmlFor="fname">User name</label>
                    <input type="text" id="fname" name="firstname" autoComplete="username" />
                    <label htmlFor="lname">Password</label>
                    <input type="password" id="lname" name="lastname" autoComplete="password" />
                    <input type="submit" value="Submit" autoComplete="submit" style={{ marginTop : '2vh' }}/>
                </form>
                <div className="Right"></div>
            </div>
        )
    }
}

export default connect()(Index)
