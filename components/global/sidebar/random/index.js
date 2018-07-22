import React, { Component } from 'react';
import RandomItem from './item';
import { connect } from 'react-redux';
import { atcGetSlideBarRandomRequest } from '../../../../store/actions';
import { bindActionCreators } from 'redux'

class Random extends Component{
    componentDidMount(){
        this.props.getSlideBarRandom();
    }

    render(){
        let items;
        if(this.props.sideBarRandom.length !== 0){
            items = this.props.sideBarRandom.map((item, index) => {
                return(
                    <RandomItem info = { item } key = {`rand${index}`}/>
                )
            });
        }
        return(
            <section>
                <ul className="posts">
                    { items }
                </ul>
            </section>
        )
    }
}

const mapStateToProps = (state => ({ sideBarRandom: state.get('sideBarRandom').toArray() }))
const mapDispatchToProps = (dispatch) => {
    return {
        getSlideBarRandom: bindActionCreators(atcGetSlideBarRandomRequest, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Random);