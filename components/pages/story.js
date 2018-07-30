import React, { Component } from 'react';
import Header from '../global/header';
import Footer from '../global/footer';
import { connect } from 'react-redux';
import { actFetchSingleStoryRequest } from '../../store/actions';
import Link from 'next/link';
import config from '../../config/config';
import ReactMarkdown from 'react-markdown';

class SingleStory extends Component {

    componentDidMount(){
        this.props.getSingleStory(this.props.postId);
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div>
                <div id="main">
                    <Header/>
                    <article className="post">
                        <header>
                            <div className="title">
                                <h2><Link href="/"><a>{ this.props.story.get('title') }</a></Link></h2>
                                <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
                            </div>
                            <div className="meta">
                                <time className="published" dateTime="2015-11-01">November 1, 2015</time>
                                <Link href="/">
                                    <a className="author">
                                        <span className="name">{ this.props.story.get('username') }</span>
                                        <img src={`${config.BASE_API_URL}/public/images/avatar.jpg`} alt="rivendell" />
                                    </a>
                                </Link>
                            </div>
                        </header>
                        <span className="image featured">
                            <img src={`${config.BASE_API_URL}/public/images/js.gif`} alt="rivendell" />
                        </span>
                        <ReactMarkdown source = { this.props.story.get('body') } />
                    </article>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state => ({ story : state.get('story') }));

const mapDispatchToProps = (dispatch) => {
    return {
        getSingleStory: (id) => dispatch(actFetchSingleStoryRequest(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleStory);