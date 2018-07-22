import React, { Component } from 'react';
import SingleStory from '../components/pages/story';
import {withRouter} from 'next/router';

class Story extends Component{
    static getInitialProps ({ store, isServer }) {
        return { isServer }
    }
    render(){
        return(
            <div id="wrapper">
                <SingleStory postId = {this.props.router.query.id}/>
            </div>
        )
    }
}

export default withRouter(Story);
