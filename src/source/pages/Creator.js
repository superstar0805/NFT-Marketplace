import React from 'react';
import {withRouter, Link, Redirect} from "react-router-dom";
import { connect } from 'react-redux';

import {dispatch_headerTitle} from "../actions/dispatch_headerTitle";

class Creator extends React.Component{
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
                <div className="hero__creators">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6">
                                <div className="space-y-20">
                                    <h1>Popular Creators</h1>
                                    <p className="hero__text">
                                        I make art with the simple goal of giving you something
                                        pleasing to
                                        look at for a few seconds.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-auto">
                                <a className="btn btn-dark" href="/connect-wallet"> be
                                    one of our creators
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="creator_item creator_card space-y-10 is_big">
                                <div className="avatars flex-column space-y-10">
                                    <div className="media has_border">
                                        <a href="/profile">
                                            <img src="assets/img/avatars/avatar_1.png" alt="Avatar" className="avatar avatar-md"/>
                                        </a>
                                        <div className="has_number">
                                            1
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <a href="/profile">
                                            <p className="avatars_name large color_black">@jimena_stark</p>
                                        </a>
                                        <span className="sales color_text">4 sales on
                                            14.28 ETH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="creator_item creator_card space-y-10 is_big">
                                <div className="avatars flex-column space-y-10">
                                    <div className="media has_border">
                                        <a href="/profile">
                                            <img src="assets/img/avatars/avatar_2.png" alt="Avatar" className="avatar avatar-md"/>
                                        </a>
                                        <div className="has_number">
                                            2
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <a href="/profile">
                                            <p className="avatars_name large color_black">@makinzi_beck</p>
                                        </a>
                                        <span className="sales color_text">16 sales on
                                            8.04 ETH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="creator_item creator_card space-y-10 is_big">
                                <div className="avatars flex-column space-y-10">
                                    <div className="media has_border">
                                        <a href="/profile">
                                            <img src="assets/img/avatars/avatar_3.png" alt="Avatar" className="avatar avatar-md"/>
                                        </a>
                                        <div className="has_number">
                                            3
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <a href="/profile">
                                            <p className="avatars_name large color_black">@jaxon_duffy</p>
                                        </a>
                                        <span className="sales color_text">4 sales on
                                            12.53 ETH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="creator_item creator_card space-y-10 is_big">
                                <div className="avatars flex-column space-y-10">
                                    <div className="media has_border">
                                        <a href="/profile">
                                            <img src="assets/img/avatars/avatar_4.png" alt="Avatar" className="avatar avatar-md"/>
                                        </a>
                                        <div className="has_number">
                                            4
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <a href="/profile">
                                            <p className="avatars_name large color_black">@darian_barry</p>
                                        </a>
                                        <span className="sales color_text">62 sales on
                                            7.26 ETH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section__creators mt-100">
                    <div className="container">
                        <div className="space-y-30">
                            <div className="section_head">
                                <h2 className="section__title text-center">Popular Creators</h2>
                            </div>
                            <div className="section__body space-y-20">
                                <div className="d-flex space-x-10 justify-content-center
                                        creators_anim1">
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_1.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@xander_hall...</p>
                                                </a>
                                                <span className="price color_green">16.58 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_2.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@hamza_pitts...</p>
                                                </a>
                                                <span className="price color_green">14.55 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_3.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@nathan_walls...</p>
                                                </a>
                                                <span className="price color_green">24.13 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_4.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@kelton_collier...</p>
                                                </a>
                                                <span className="price color_green">62.68 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_5.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@cade_glover...</p>
                                                </a>
                                                <span className="price color_green">32.48 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_1.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@teagan_poole...</p>
                                                </a>
                                                <span className="price color_green">50.02 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_2.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@austin_rivera...</p>
                                                </a>
                                                <span className="price color_green">9.99 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_3.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@jeremy_shah...</p>
                                                </a>
                                                <span className="price color_green">52.58 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_4.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@joel_reese...</p>
                                                </a>
                                                <span className="price color_green">14.58 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_5.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@anton_wright...</p>
                                                </a>
                                                <span className="price color_green">12.24 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="-ml-70 creators_anim2">
                                    <div className="d-flex space-x-10 justify-content-center">
                                        <div className="creator_item creator_card space-x-10">
                                            <div className="avatars space-x-10">
                                                <a href="/profile">
                                                    <img src="assets/img/avatars/avatar_6.png" alt="Avatar"
                                                        className="avatar avatar-md"/>
                                                </a>
                                                <div>
                                                    <a href="/profile">
                                                        <p className="avatars_name color_black">@eli_tyler...</p>
                                                    </a>
                                                    <span className="price color_green">16.58
                                                        ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="creator_item creator_card space-x-10">
                                            <div className="avatars space-x-10">
                                                <a href="/profile">
                                                    <img src="assets/img/avatars/avatar_7.png" alt="Avatar"
                                                        className="avatar avatar-md"/>
                                                </a>
                                                <div>
                                                    <a href="/profile">
                                                        <p className="avatars_name color_black">@alonzo_knight...</p>
                                                    </a>
                                                    <span className="price color_green">12.58
                                                        ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="creator_item creator_card space-x-10">
                                            <div className="avatars space-x-10">
                                                <a href="/profile">
                                                    <img src="assets/img/avatars/avatar_8.png" alt="Avatar"
                                                        className="avatar avatar-md"/>
                                                </a>
                                                <div>
                                                    <a href="/profile">
                                                        <p className="avatars_name color_black">@cannon_stark...</p>
                                                    </a>
                                                    <span className="price color_green">15.58
                                                        ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="creator_item creator_card space-x-10">
                                            <div className="avatars space-x-10">
                                                <a href="/profile">
                                                    <img src="assets/img/avatars/avatar_9.png" alt="Avatar"
                                                        className="avatar avatar-md"/>
                                                </a>
                                                <div>
                                                    <a href="/profile">
                                                        <p className="avatars_name color_black">@leonel_carey...</p>
                                                    </a>
                                                    <span className="price color_green">4.58
                                                        ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="creator_item creator_card space-x-10">
                                            <div className="avatars space-x-10">
                                                <a href="/profile">
                                                    <img src="assets/img/avatars/avatar_10.png" alt="Avatar"
                                                        className="avatar avatar-md"/>
                                                </a>
                                                <div>
                                                    <a href="/profile">
                                                        <p className="avatars_name color_black">@kolten_hart...</p>
                                                    </a>
                                                    <span className="price color_green">3.58
                                                        ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="creator_item creator_card space-x-10">
                                            <div className="avatars space-x-10">
                                                <a href="/profile">
                                                    <img src="assets/img/avatars/avatar_6.png" alt="Avatar"
                                                        className="avatar avatar-md"/>
                                                </a>
                                                <div>
                                                    <a href="/profile">
                                                        <p className="avatars_name color_black">@ethan_cain...</p>
                                                    </a>
                                                    <span className="price color_green">57.58
                                                        ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="creator_item creator_card space-x-10">
                                            <div className="avatars space-x-10">
                                                <a href="/profile">
                                                    <img src="assets/img/avatars/avatar_7.png" alt="Avatar"
                                                        className="avatar avatar-md"/>
                                                </a>
                                                <div>
                                                    <a href="/profile">
                                                        <p className="avatars_name color_black">@waylon_ford...</p>
                                                    </a>
                                                    <span className="price color_green">13.58
                                                        ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="creator_item creator_card space-x-10">
                                            <div className="avatars space-x-10">
                                                <a href="/profile">
                                                    <img src="assets/img/avatars/avatar_8.png" alt="Avatar"
                                                        className="avatar avatar-md"/>
                                                </a>
                                                <div>
                                                    <a href="/profile">
                                                        <p className="avatars_name color_black">@khloe_bender...</p>
                                                    </a>
                                                    <span className="price color_green">9.58
                                                        ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="creator_item creator_card space-x-10">
                                            <div className="avatars space-x-10">
                                                <a href="/profile">
                                                    <img src="assets/img/avatars/avatar_9.png" alt="Avatar"
                                                        className="avatar avatar-md"/>
                                                </a>
                                                <div>
                                                    <a href="/profile">
                                                        <p className="avatars_name color_black">@jenna_loyd...</p>
                                                    </a>
                                                    <span className="price color_green">7.58
                                                        ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="creator_item creator_card space-x-10">
                                            <div className="avatars space-x-10">
                                                <a href="/profile">
                                                    <img src="assets/img/avatars/avatar_10.png" alt="Avatar"
                                                        className="avatar avatar-md"/>
                                                </a>
                                                <div>
                                                    <a href="/profile">
                                                        <p className="avatars_name color_black">@kaleigh_lewis...</p>
                                                    </a>
                                                    <span className="price color_green">16.58
                                                        ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex space-x-10 justify-content-center
                                        creators_anim3">
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_11.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@jimena_stark...</p>
                                                </a>
                                                <span className="price color_green">14.58 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_12.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@krista_bryan...</p>
                                                </a>
                                                <span className="price color_green">13.12 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_13.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@natalie_solis...</p>
                                                </a>
                                                <span className="price color_green">6.52 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_14.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@makinzi_beck...</p>
                                                </a>
                                                <span className="price color_green">11.54 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_15.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@chance_flynn...</p>
                                                </a>
                                                <span className="price color_green">34.25 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_11.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@danna_estes...</p>
                                                </a>
                                                <span className="price color_green">23.27 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_12.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@ellis_glenn...</p>
                                                </a>
                                                <span className="price color_green">16.54 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_13.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@jaxon_duffy...</p>
                                                </a>
                                                <span className="price color_green">16.48 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_14.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@marvin_dillon...</p>
                                                </a>
                                                <span className="price color_green">43.42 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="creator_item creator_card space-x-10">
                                        <div className="avatars space-x-10">
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_15.png" alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                            <div>
                                                <a href="/profile">
                                                    <p className="avatars_name color_black">@darian_barry...</p>
                                                </a>
                                                <span className="price color_green">6.34 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="section__creators mt-100">
                    <div className="container">
                        <div className="space-y-30">
                            <div className="section_head">
                                <div className="row justify-content-between
                                        align-items-center">
                                    <div className="col-lg-auto">
                                        <h2 className="section__title">Discover all Creators</h2>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="search">
                                            <input type="text" placeholder="Search" className="bg_white" style={{background:"white!important"}}/>
                                            <button className="result">
                                                <i className="ri-search-line"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-lg-auto">
                                        <div className="dropdown">
                                            <button className="btn btn-primary btn-sm
                                                    dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Recent Active
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else
                                                    here</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="section__body space-y-20">
                                <div className="row mb-20_reset">
                                    <div className="col-lg-4">
                                        <div className="creator_item creator_card space-y-20 mb-20">
                                            <div className="avatars flex-column space-y-10">
                                                <div className="cover">
                                                    <img src="assets/img/items/cover_1.png" alt="Avatar" className="img-fluid"/>
                                                </div>
                                                <div className="media">
                                                    <a href="/profile">
                                                        <img src="assets/img/avatars/avatar_5.png" alt="Avatar" className="avatar avatar-md"/>
                                                    </a>
                                                </div>
                                                <div className="details text-center">
                                                    <div>
                                                        <p className="color_black txt_lg">191
                                                            <span className="txt_sm">ETH</span>
                                                        </p>
                                                        <p className="color_black txt_sm">Sold</p>
                                                    </div>
                                                    <div>
                                                        <p className="color_black txt_lg">345</p>
                                                        <p className="color_black txt_sm">Collections</p>
                                                    </div>
                                                    <div>
                                                        <p className="color_black txt_lg">17,005</p>
                                                        <p className="color_black txt_sm">Views</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="creator_item creator_card space-y-20 mb-20">
                                            <div className="avatars flex-column space-y-10">
                                                <div className="cover">
                                                    <img src="assets/img/items/cover_2.png" alt="Avatar" className="img-fluid"/>
                                                </div>
                                                <div className="media">
                                                    <a href="/profile">
                                                        <img src="assets/img/avatars/avatar_6.png" alt="Avatar" className="avatar avatar-md"/>
                                                    </a>
                                                </div>
                                                <div className="details text-center">
                                                    <div>
                                                        <p className="color_black txt_lg">142
                                                            <span className="txt_sm">ETH</span>
                                                        </p>
                                                        <p className="color_black txt_sm">Sold</p>
                                                    </div>
                                                    <div>
                                                        <p className="color_black txt_lg">255</p>
                                                        <p className="color_black txt_sm">Collections</p>
                                                    </div>
                                                    <div>
                                                        <p className="color_black txt_lg">14,045</p>
                                                        <p className="color_black txt_sm">Views</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="creator_item creator_card space-y-20 mb-20">
                                            <div className="avatars flex-column space-y-10">
                                                <div className="cover">
                                                    <img src="assets/img/items/cover_3.png" alt="Avatar" className="img-fluid"/>
                                                </div>
                                                <div className="media">
                                                    <a href="/profile">
                                                        <img src="assets/img/avatars/avatar_7.png" alt="Avatar" className="avatar avatar-md"/>
                                                    </a>
                                                </div>
                                                <div className="details text-center">
                                                    <div>
                                                        <p className="color_black txt_lg">150
                                                            <span className="txt_sm">ETH</span>
                                                        </p>
                                                        <p className="color_black txt_sm">Sold</p>
                                                    </div>
                                                    <div>
                                                        <p className="color_black txt_lg">345</p>
                                                        <p className="color_black txt_sm">Collections</p>
                                                    </div>
                                                    <div>
                                                        <p className="color_black txt_lg">20,033</p>
                                                        <p className="color_black txt_sm">Views</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="creator_item creator_card space-y-20 mb-20">
                                            <div className="avatars flex-column space-y-10">
                                                <div className="cover">
                                                    <img src="assets/img/items/cover_4.png" alt="Avatar" className="img-fluid"/>
                                                </div>
                                                <div className="media">
                                                    <a href="/profile">
                                                        <img src="assets/img/avatars/avatar_8.png" alt="Avatar" className="avatar avatar-md"/>
                                                    </a>
                                                </div>
                                                <div className="details text-center">
                                                    <div>
                                                        <p className="color_black txt_lg">87
                                                            <span className="txt_sm">ETH</span>
                                                        </p>
                                                        <p className="color_black txt_sm">Sold</p>
                                                    </div>
                                                    <div>
                                                        <p className="color_black txt_lg">142</p>
                                                        <p className="color_black txt_sm">Collections</p>
                                                    </div>
                                                    <div>
                                                        <p className="color_black txt_lg">23,575</p>
                                                        <p className="color_black txt_sm">Views</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="creator_item creator_card space-y-20 mb-20">
                                            <div className="avatars flex-column space-y-10">
                                                <div className="cover">
                                                    <img src="assets/img/items/cover_5.png" alt="Avatar" className="img-fluid"/>
                                                </div>
                                                <div className="media">
                                                    <a href="/profile">
                                                        <img src="assets/img/avatars/avatar_9.png" alt="Avatar" className="avatar avatar-md"/>
                                                    </a>
                                                </div>
                                                <div className="details text-center">
                                                    <div>
                                                        <p className="color_black txt_lg">198
                                                            <span className="txt_sm">ETH</span>
                                                        </p>
                                                        <p className="color_black txt_sm">Sold</p>
                                                    </div>
                                                    <div>
                                                        <p className="color_black txt_lg">321</p>
                                                        <p className="color_black txt_sm">Collections</p>
                                                    </div>
                                                    <div>
                                                        <p className="color_black txt_lg">12,024</p>
                                                        <p className="color_black txt_sm">Views</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="creator_item creator_card space-y-20 mb-20">
                                            <div className="avatars flex-column space-y-10">
                                                <div className="cover">
                                                    <img src="assets/img/items/cover_6.png" alt="Avatar" className="img-fluid"/>
                                                </div>
                                                <div className="media">
                                                    <a href="/profile">
                                                        <img src="assets/img/avatars/avatar_10.png" alt="Avatar" className="avatar avatar-md"/>
                                                    </a>
                                                </div>
                                                <div className="details text-center">
                                                    <div>
                                                        <p className="color_black txt_lg">234
                                                            <span className="txt_sm">ETH</span>
                                                        </p>
                                                        <p className="color_black txt_sm">Sold</p>
                                                    </div>
                                                    <div>
                                                        <p className="color_black txt_lg">345</p>
                                                        <p className="color_black txt_sm">Collections</p>
                                                    </div>
                                                    <div>
                                                        <p className="color_black txt_lg">12,053</p>
                                                        <p className="color_black txt_sm">Views</p>
                                                    </div>
                                                </div>
                                            </div>
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

export default connect(mapStateToProps, {dispatch_headerTitle})(withRouter(Creator));