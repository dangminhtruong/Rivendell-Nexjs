import React, { Component } from 'react';
import TopFourItem from './item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { atcGetSlideBarTopFourRequest } from '../../../../store/actions';

class TopFour extends Component {

    componentDidMount(){
        this.props.getSlideBarTopFour();
    }

    render() {
        let topFour = [];
        if (this.props.sideBarTopFour.length !== 0) {
            topFour = this.props.sideBarTopFour.map((item, index) => {
                return (
                    <TopFourItem post={item} key={`it${index}`} detail={item} />
                )
            })
        }
        return (
            <section>
                <div className="mini-posts">
                    {topFour}
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state => ({ sideBarTopFour: state.get('sideBarTopFour').toArray() }))

const mapDispatchToProps = (dispatch) => {
    return {
        getSlideBarTopFour: bindActionCreators(atcGetSlideBarTopFourRequest, dispatch)
    }
}



export default  connect(mapStateToProps, mapDispatchToProps)(TopFour);