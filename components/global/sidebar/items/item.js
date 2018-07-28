import React, { Component } from 'react';
import Link  from 'next/link';
import config from '../../../../config/config';

class TopFourItem extends Component{
    render(){
        return(
            <article className="mini-post">
                <header>
                    <h3>
                        <Link as={`/story/${this.props.detail.get('id')}`} href={`/story?id=${this.props.detail.get('id')}`}>
                            <a>{ this.props.detail.get('title') }</a>
                        </Link>
                    </h3>
                    <time className="published" dateTime="2015-10-17">October 17, 2015</time>
                    <Link as={`/story/${this.props.detail.get('id')}`} href={`/story?id=${this.props.detail.get('id')}`}>
                        <a className="author">
                            <img src={`${config.BASE_API_URL}/public/images/avatar.jpg`} alt="" />
                        </a>
                    </Link>
                </header>
                <Link as={`/story/${this.props.detail.get('id')}`} href={`/story?id=${this.props.detail.get('id')}`}>
                    <a className="image">
                        <img src={`${config.BASE_API_URL}/public/images/pic07.jpg`}alt="" />
                    </a>
                </Link>
            </article>
        )
    }
}

export default TopFourItem;