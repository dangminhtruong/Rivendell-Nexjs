import React, { Component } from 'react'
import Link from 'next/link'
import { actFetchCategoriesRequest } from '../../../store/actions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class Header extends Component {
    componentDidMount() {
        this.props.getCategories()
    }

    showMenu = () => {
        let menu = document.getElementById('is-body');
        menu.className = (menu.className === 'is-preload') ? 'is-menu-visible' : 'is-preload';
    }

    closeMenu = () => {
        let menu = document.getElementById('is-body');
        menu.className = (menu.className === 'is-menu-visible') ? 'is-preload' : 'is-menu-visible';
    }

    render() {
        let categories = [];
        if (this.props.categories.length !== 0) {
            categories = this.props.categories.map((category, index) => {
                return (
                    <li key={`ck${index}`}>
                        <Link href="/">
                            <a>{category.get('name')}</a>
                        </Link>
                    </li>
                )
            });
        }
        return (
            <div>
                <header id="header">
                    <h1><Link href='/'><a>Truong Dang</a></Link></h1>
                    <nav className="links">
                        <ul>
                            {categories}
                        </ul>
                    </nav>
                    <nav className="main">
                        <ul>
                            <li className="search">
                                <Link href="/">
                                    <a className="fa-search">Search</a>
                                </Link>
                                <form id="search" method="get" action="#">
                                    <input type="text" name="query" placeholder="Search" />
                                </form>
                            </li>
                            <li className="menu" onClick={this.showMenu}>
                                <a className="fa-bars">Menu</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <section id="menu">
                    <section>
                        <button className="button fit" onClick={ this.closeMenu }>
                            Close menu
                            </button>
                    </section>
                    <section>
                        <ul className="links">
                            <li>
                                <a href="#">
                                    <h3>Lorem ipsum</h3>
                                    <p>Feugiat tempus veroeros dolor</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h3>Dolor sit amet</h3>
                                    <p>Sed vitae justo condimentum</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h3>Feugiat veroeros</h3>
                                    <p>Phasellus sed ultricies mi congue</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h3>Etiam sed consequat</h3>
                                    <p>Porta lectus amet ultricies</p>
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <ul className="actions stacked">
                            <li><a href="#" className="button large fit">Log In</a></li>
                        </ul>
                    </section>

                </section>
            </div>
        )
    }
}

const mapStateToProps = (state => ({ categories: state.get('categories').toArray() }))

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: bindActionCreators(actFetchCategoriesRequest, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);