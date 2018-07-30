import React from 'react'
import Header from '../components/global/header'
import Sidebar from '../components/global/sidebar'
import { connect } from 'react-redux'
import Stories from '../components/pages/index';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import prism from './prism.css';

class Index extends React.Component {
  static getInitialProps ({ store, isServer }) {
    return { isServer }
  }
  componentDidMount() {
    Prism.highlightAll();
  }
  
  render () {
    return (
      <div id="wrapper">
        <Header />
        <Stories/>
        <Sidebar />
      </div>
    )
  }
}

export default connect()(Index)
