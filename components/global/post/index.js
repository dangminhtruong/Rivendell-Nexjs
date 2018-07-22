import React, { Component } from 'react'
import Link from 'next/link';
import config from '../../../config/config';

class Story extends Component {
    render() {
        return (
            <article className="post">
                <header>
                    <div className="title">
                        <h2>
                            <Link as={`/story/${this.props.story.get('id')}`} href={`/story?id=${this.props.story.get('id')}`}>
                                <a>{ this.props.story.get('title') }</a>
                            </Link >
                        </h2>
                        <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
                    </div>
                    <div className="meta">
                        <time className="published" dateTime="2015-11-01">November 1, 2015</time>
                        <Link href='/'>
                            <a className="author">
                                <span className="name">
                                    { this.props.story.get('username') }
                                </span>
                                <img src={`${config.BASE_API_URL}/public/images/avatar.jpg`} alt="" />
                            </a>
                        </Link>
                    </div>
                </header>
                <Link href='/'>
                    <a className="image featured">
                        <img src={`${config.BASE_API_URL}/public/images/js.gif`}  style={{ width:'100%' }} alt="" />
                    </a>
                </Link >
                    <p>{ this.props.story.get('body') }</p>
                <footer>
                    <ul className="actions">
                        <li>
                            <Link as={`/story/${this.props.story.get('id')}`} href={`/story?id=${this.props.story.get('id')}`} >
                                <a className="button large">Continue Reading</a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="stats">
                        <li><Link href='/'><a>General</a></Link ></li>
                        <li><Link href='/'><a className="icon fa-heart">28</a></Link ></li>
                        <li><Link href='/'><a className="icon fa-comment">128</a></Link ></li>
                    </ul>
                </footer>
            </article>
        )
    }
}

export default Story;