import React, { Component } from 'react';
import Link from 'next/link'
import TopFour from './items';
import config from '../../../config/config';
import Random from './random';

class Sidebar extends Component {
    render() {
        return (
            <section id="sidebar">
                <section id="intro">
                    <Link href='/'>
                       <a className="logo">
                            <img src={`${config.BASE_API_URL}/public/images/logo.jpg`} alt="" />
                       </a>
                    </Link>
                    <header>
                        <h2>Truong Dang</h2>
                        <p>Dang Minh Truong's Blog</p>
                    </header>
                </section>
                <TopFour />
                <Random/>
                <section className="blurb">
                    <h2>About</h2>
                    <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at phasellus sed ultricies.</p>
                    <ul className="actions">
                        <li><Link href='/'><a className="button">Learn More</a></Link></li>
                    </ul>
                </section>
                <section id="footer">
                    <ul className="icons">
                        <li>
                            <Link href='/'>
                                <a className="fa-twitter"><span className="label">Twitter</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a className="fa-facebook"><span className="label">Facebook</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/' >
                                <a className="fa-instagram"><span className="label">Instagram</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/' >
                                <a className="fa-rss"><span className="label">RSS</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a className="fa-envelope"><span className="label">Email</span></a>
                            </Link>
                        </li>
                    </ul>
                    <p className="copyright">&copy; Untitled. Design: 
                        <Link href="http://html5up.net">
                            <a>HTML5 UP</a>
                        </Link>. 
                        Images: 
                        <Link href="http://unsplash.com">
                            <a>Unsplash</a>
                        </Link>.</p>
                </section>
            </section>
        )
    }
}



export default Sidebar;