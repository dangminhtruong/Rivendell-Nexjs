import React, { Component } from 'react';
import Post from '../global/post'
import Paginate from '../global/paginate';
import { connect } from 'react-redux';
import { actFetchStoriesRequest } from '../../store/actions'
import { bindActionCreators } from 'redux'

class Stories extends Component {
    componentDidMount(){
        this.props.getListPost();
        window.scrollTo(0,0);
    }
    render() {
        let storyList;
        if(this.props.stories){
            storyList = this.props.stories.map((story, index) => {
                return (
                    <Post key = { `p.${index}` } story = { story } />
                )
            });
        }
        return (
            <div id="main">
                { storyList }
                <Paginate />
            </div>
        )
    }
}


const mapStateToProps = (state => ({ stories: state.get('stories').toArray() }))
const mapDispatchToProps = (dispatch) => {
    return {
        getListPost: bindActionCreators(actFetchStoriesRequest, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stories);