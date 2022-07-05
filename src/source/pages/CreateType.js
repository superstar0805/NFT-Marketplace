import React from 'react';
import {withRouter, Link, Redirect} from "react-router-dom";
import { connect } from 'react-redux';

import {dispatch_headerTitle} from "../actions/dispatch_headerTitle";

class CreateType extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            is_mobile: window.innerWidth <= 768
        };

        this.handleChange = this.handleChange.bind(this);
        this.checkedhandleChange = this.checkedhandleChange.bind(this);
    }

    componentDidMount() {

    }

    handleChange(path) {
        // this.props.history.push(path);
    }

    checkedhandleChange(path) {
        // this.props.history.push(path);
    }
  
    render(){
        return (
            <div>
                <div className="hero__upload">
                    <div className="container">
                        <div className="space-y-20">
                            <h1 className="text-center">Create single collectible</h1>
                            <p className="hero__text text-center">Choose “Single” if you want your
                                collectible
                                to
                                be one of a kind or “Multiple” if you want to sell one
                                collectible
                                multiple times</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="box text-center">
                                        <img className="icon mb-20"
                                            src="assets/img/icons/single.svg"
                                            alt=""/>
                                        <div className="space-y-10">
                                            <h5>Sell One Time</h5>
                                            <p className="color_text">your collectible want to be
                                                one of
                                                a kind</p>
                                            <div className="hr"></div>
                                            <a className="btn btn-grad btn" href="/upload">
                                                create single
                                            </a>
                
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box text-center">
                                        <img className="icon mb-20"
                                            src="assets/img/icons/multiple.svg"
                                            alt=""/>
                                        <div className="space-y-10">
                                            <h5> Sell Multiple Time</h5>
                                            <p className="color_text">your collectible want to be
                                                one of
                                                a kind</p>
                                            <div className="hr"></div>
                                            <a className="btn btn-grad btn" href="/upload">
                                                create multiple
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        headerTitle: state.headerTitle
    };
};

export default connect(mapStateToProps, {dispatch_headerTitle})(withRouter(CreateType));