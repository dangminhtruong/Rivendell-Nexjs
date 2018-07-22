import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        return (
            <section id="footer" style={{ textAlign: 'center' }}>
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
                        <Link href='/'>
                            <a className="fa-instagram"><span className="label">Instagram</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
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
                <Link href="http://html5up.net"><a>HTML5 UP</a></Link>. 
                Images: <Link href="http://unsplash.com"><a>Unsplash</a></Link>.</p>
            </section>
        )
    }
}

export default Footer;