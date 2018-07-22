import React, { Component } from 'react';
import Link  from 'next/link';
import config from '../../../../config/config';

class RandomItem extends Component{
    render(){
        return(
            <li>
                <article>
                    <header>
                        <h3>
                            <Link href={`/story/${this.props.info.get('id')}`}>
                                <a>{ this.props.info.get('title') }</a>
                            </Link>
                        </h3>
                        <time className="published" dateTime="2015-10-20">October 20, 2015</time>
                    </header>
                    <Link href={`/story/${this.props.info.get('id')}`}>
                        <a className="image">
                            <img src={`${config.BASE_API_URL}/public/images/pic08.jpg`} alt="" />
                        </a>
                    </Link>
                </article>
            </li>
        )
    }
}

export default RandomItem;