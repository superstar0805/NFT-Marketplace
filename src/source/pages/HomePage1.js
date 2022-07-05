import React from 'react';
import {withRouter, Link, Redirect} from "react-router-dom";
import { connect } from 'react-redux';

import {dispatch_headerTitle} from "../actions/dispatch_headerTitle";

class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            is_mobile: window.innerWidth <= 768
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

    }

    handleChange(path) {
        // this.props.history.push(path);
    }
  
    render(){
        return (
            <div>
                <div className="hero__1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="hero__left space-y-20">
                                    <h1 className="hero__title">
                                        Discover digital art
                                        and collect NFTs
                                    </h1>
                                    <p className="hero__text txt">raroin is a shared liquidity
                                        NFT
                                        market smart contract
                                        which
                                        is used by multiple websites to provide the users the
                                        best
                                        possible experience.</p>
                                    <div className="space-x-20 d-flex flex-column flex-md-row
                                        sm:space-y-20">
                                        <a className="btn btn-primary" href="/marketplace">View
                                            market</a>
                                        <a className="btn btn-white" href="/upload-type">
                                            Upload your item</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img className="img-fluid w-full" id="img_js"
                                    src="assets/img/bg/in_hero1.png"
                                    alt="" />
                            </div>
                        </div>
            
                    </div>
                </div>
                <div className="section__artists mt-100">
                    <div className="container">
                        <div className="space-y-30">
                            <div className="section_head">
                                <h2 className="section__title">Top Artists</h2>
                            </div>
                            <div className="section_body swiper_artists">
                                
                                <div className="swiper-wrapper position-relative">
                                    
                                    <div className="swiper-slide">
                                        <div className="creator_item creator_card rounded_border space-x-10">
                                            <div className="avatars space-x-10">
                                                <div className="media">
                                                    <div className="badge">
                                                        <img src="assets/img/icons/Badge.svg" alt="" />
                                                    </div>
                                                    <a href="/profile">
                                                        <img
                                                            src="assets/img/avatars/avatar_1.png"
                                                            alt="Avatar"
                                                            className="avatar avatar-md"
                                                        />
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="/profile"
                                                        ><p className="avatars_name color_black">@xander_hall...</p></a>
                                                    <span className="price color_green">16.58 ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="swiper-slide">
                                        <div className="creator_item creator_card rounded_border space-x-10">
                                            <div className="avatars space-x-10">
                                                <div className="media">
                                                    <div className="badge">
                                                        <img src="assets/img/icons/Badge.svg" alt="" />
                                                    </div>
                                                    <a href="/profile">
                                                        <img
                                                            src="assets/img/avatars/avatar_2.png"
                                                            alt="Avatar"
                                                            className="avatar avatar-md"
                                                        />
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="/profile"
                                                        ><p className="avatars_name color_black">@hamza_pitts...</p></a>
                                                    <span className="price color_green">14.55 ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="swiper-slide">
                                        <div className="creator_item creator_card rounded_border space-x-10">
                                            <div className="avatars space-x-10">
                                                <div className="media">
                                                    <div className="badge">
                                                        <img src="assets/img/icons/Badge.svg" alt="" />
                                                    </div>
                                                    <a href="/profile">
                                                        <img
                                                            src="assets/img/avatars/avatar_3.png"
                                                            alt="Avatar"
                                                            className="avatar avatar-md"
                                                        />
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="/profile"
                                                        ><p className="avatars_name color_black">@nathan_walls...</p></a>
                                                    <span className="price color_green">24.13 ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="swiper-slide">
                                        <div className="creator_item creator_card rounded_border space-x-10">
                                            <div className="avatars space-x-10">
                                                <div className="media">
                                                    <div className="badge">
                                                        <img src="assets/img/icons/Badge.svg" alt="" />
                                                    </div>
                                                    <a href="/profile">
                                                        <img
                                                            src="assets/img/avatars/avatar_4.png"
                                                            alt="Avatar"
                                                            className="avatar avatar-md"
                                                        />
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="/profile"
                                                        ><p className="avatars_name color_black">@kelton_collier...</p></a>
                                                    <span className="price color_green">62.68 ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="swiper-slide">
                                        <div className="creator_item creator_card rounded_border space-x-10">
                                            <div className="avatars space-x-10">
                                                <div className="media">
                                                    <div className="badge">
                                                        <img src="assets/img/icons/Badge.svg" alt="" />
                                                    </div>
                                                    <a href="/profile">
                                                        <img
                                                            src="assets/img/avatars/avatar_5.png"
                                                            alt="Avatar"
                                                            className="avatar avatar-md"
                                                        />
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="/profile"
                                                        ><p className="avatars_name color_black">@cade_glover...</p></a>
                                                    <span className="price color_green">32.48 ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="swiper-pagination"></div>
            
                                
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade popup" id="popup_bid_success" tabIndex="-1" role="dialog"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal"
                                aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-body space-y-20 p-40">
                                <h3 className="text-center">Your Bidding
                                    Successfuly Added</h3>
                                <p className="text-center">your bid <span className="color_text txt
                                        _bold">(16ETH) </span> has been listing
                                    to our database</p>
                
                                <a href="" className="btn btn-dark w-full"> Watch the listings</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade popup" id="popup_bid" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal"
                                aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-body space-y-20 p-40">
                                <h3>Place a Bid</h3>
                                <p>You must bid at least <span className="color_black">15 ETH</span>
                                </p>
                                <input type="text" className="form-control" onChange={() => this.handleChange()}
                                    placeholder="00.00 ETH" />
                
                                <p>Enter quantity. <span className="color_green">5 available</span>
                                </p>
                                <input type="text" className="form-control"  onChange={() => this.handleChange()}
                                    value="1" />
                                <div className="hr"></div>
                                <div className="d-flex justify-content-between">
                                    <p> You must bid at least:</p>
                                    <p className="text-right color_black txt _bold"> 67,000 ETH </p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p> service free:</p>
                                    <p className="text-right color_black txt _bold"> 0,901 ETH </p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p> Total bid amount:</p>
                                    <p className="text-right color_black txt _bold"> 56,031 ETH </p>
                                </div>
                                <a href="" className="btn btn-primary w-full"
                                    data-toggle="modal"
                                    data-target="#popup_bid_success"
                                    data-dismiss="modal"
                                    aria-label="Close"> Place a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade popup" id="popup_history" tabIndex="-1" role="dialog"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal"
                                aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-body space-y-20 p-40">
                                <h4> History </h4>
                                <div className="creator_item creator_card space-x-10">
                                    <div className="avatars space-x-10">
                                        <div className="media">
                                            <div className="badge">
                                                <img src="assets/img/icons/Badge.svg"
                                                    alt=""/>
                                            </div>
                                            <a href="/profile">
                                                <img
                                                    src="assets/img/avatars/avatar_1.png"
                                                    alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                        </div>
                                        <div>
                                            <p className="color_black">Bid accepted <span
                                                    className="color_brand">1
                                                    ETH</span> by <a className="color_black txt
                                                    _bold"
                                                    href="/profile">ayoub</a></p>
                                            <span className="date color_text">28/06/2021, 12:08</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="creator_item creator_card space-x-10">
                                    <div className="avatars space-x-10">
                                        <div className="media">
                                            <div className="badge">
                                                <img src="assets/img/icons/Badge.svg"
                                                    alt=""/>
                                            </div>
                                            <a href="/profile">
                                                <img
                                                    src="assets/img/avatars/avatar_2.png"
                                                    alt="Avatar"
                                                    className="avatar avatar-md"/>
                                            </a>
                                        </div>
                                        <div>
                                            <p className="color_black">Bid accepted <span
                                                    className="color_brand">3
                                                    ETH</span> by <a className="color_black txt
                                                    _bold"
                                                    href="/profile">monir</a></p>
                                            <span className="date color_text">22/05/2021, 12:08</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-100">
                    <div className="container">
                        <div className="section__head">
                            <div className="d-md-flex
                                sm:space-y-20
                                space-x-20
                                justify-content-between
                                align-items-center">
                                <h2 className="section__title text-center">Explore</h2>
                                <ul className="menu_categories space-x-20">
                                    <li>
                                        <a href="#" className="color_brand">
                                
                                            <span> All </span>
                                        </a>
                                    </li>
                                    <li> <a href="#">
                                            <i className="ri-gamepad-line"></i> <span> Games </span>
                                        </a>
                                
                                    </li>
                                    <li> <a href="#">
                                            <i className="ri-brush-line"></i> <span> Art </span>
                                        </a>
                                
                                    </li>
                                    <li> <a href="#">
                                            <i className="ri-stock-line"></i> <span> Trading Cards </span>
                                        </a>
                                
                                    </li>
                                    <li> <a href="#">
                                            <i className="ri-music-line"></i> <span> Music </span>
                                        </a>
                                
                                    </li>
                                    <li> <a href="#">
                                            <i className="ri-global-line"></i> <span> Domain Names </span>
                                        </a>
                                
                                    </li>
                                    <li> <a href="#">
                                            <i className="ri-emotion-laugh-line"></i> <span> Memes </span>
                                        </a>
                                
                                    </li>
                                    <li> <a href="#">
                                            <i className="ri-layout-4-line"></i> <span> Collectibles </span>
                                        </a>
                                
                                    </li>
                                </ul>				<div className="dropdown text-center">
                                    <button className="btn btn-white btn-sm dropdown-toggle"
                                        type="button"
                
                                        data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        Recent Active
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card__item four">
                                    <div className="card_body space-y-10">
                                        
                                        <div className="creators space-x-10">
                                            <div className="avatars space-x-3">
                                                <a href="/profile">
                                                    <img
                                                        src="assets/img/avatars/avatar_1.png"
                                                        alt="Avatar"
                                                        className="avatar avatar-sm" />
                                                </a>
                                                <a href="/profile">
                                                    <p className="avatars_name txt_xs">@mickel_fenn</p>
                                                </a>
                                            </div>
                                            <div className="avatars space-x-3">
                                                <a href="/profile">
                                                    <img
                                                        src="assets/img/avatars/avatar_2.png"
                                                        alt="Avatar"
                                                        className="avatar avatar-sm" />
                                                </a>
                                                <a href="/profile">
                                                    <p className="avatars_name txt_xs">@danil_pannini</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card_head">
                                            <a href="/item-details">
                                                <img
                                                    src="assets/img/items/item_1.png"
                                                    alt="item
                                                    img" />
                                            </a>
                                            <a href="#" className="likes space-x-3">
                                                <i className="ri-heart-3-fill"></i>
                                                <span className="txt_sm">1.2k</span>
                                            </a>
                                        </div>
                                        
                
                                        <h6 className="card_title">
                                            <a className="color_black"
                                                href="/item-detail">
                                                Colorful Abstract Painting
                                            </a>
                                        </h6>
                                        <div className="card_footer d-block space-y-10">
                                            <div className="card_footer justify-content-between">
                                                <div className="creators">
                                                    <p className="txt_sm">4 in stock</p>
                                                </div>
                                                <a href="#" className="">
                                                    <p className="txt_sm">
                                                        Price: <span className="color_green txt_sm">2.45
                                                            ETH</span>
                                                    </p>
                                                </a>
                                            </div>
                                            <div className="hr"></div>
                                            <div className="d-flex
                                                align-items-center
                                                space-x-10
                                                justify-content-between">
                                                <div className="d-flex align-items-center
                                                    space-x-5">
                                                    <i className="ri-history-line"></i>
                                                    <a href="#" data-toggle="modal"
                                                        data-target="#popup_history">
                                                        <p className="color_text txt_sm
                                                            view_history" style={{width:'auto'}}>
                                                            View History
                                                        </p>
                                                    </a>
                                                </div>
                                                <a className="btn btn-sm btn-primary" href="#"
                                                    data-toggle="modal"
                                                    data-target="#popup_bid">Place Bid</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card__item four">
                                    <div className="card_body space-y-10">
                                        
                                        <div className="creators space-x-10">
                                            <div className="avatars space-x-3">
                                                <a href="/profile">
                                                    <img
                                                        src="assets/img/avatars/avatar_3.png"
                                                        alt="Avatar"
                                                        className="avatar avatar-sm" />
                                                </a>
                                                <a href="/profile">
                                                    <p className="avatars_name txt_xs">@mazanov_sky</p>
                                                </a>
                                            </div>
                                            <div className="avatars space-x-3">
                                                <a href="/profile">
                                                    <img
                                                        src="assets/img/avatars/avatar_4.png"
                                                        alt="Avatar"
                                                        className="avatar avatar-sm" />
                                                </a>
                                                <a href="/profile">
                                                    <p className="avatars_name txt_xs">@mucky_fennouni</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card_head">
                                            <a href="/item-detail">
                                                <img
                                                    src="assets/img/items/item_2.png"
                                                    alt="item
                                                    img" />
                                            </a>
                                            <a href="#" className="likes space-x-3">
                                                <i className="ri-heart-3-fill"></i>
                                                <span className="txt_sm">13.2k</span>
                                            </a>
                                        </div>
                                        
                
                                        <h6 className="card_title">
                                            <a className="color_black"
                                                href="/item-detail">
                                                The girl with the firefly
                                            </a>
                                        </h6>
                                        <div className="card_footer d-block space-y-10">
                                            <div className="card_footer justify-content-between">
                                                <div className="creators">
                                                    <p className="txt_sm">12 in stock</p>
                                                </div>
                                                <a href="#" className="">
                                                    <p className="txt_sm">
                                                        Price: <span className="color_green txt_sm">2.55
                                                            ETH</span>
                                                    </p>
                                                </a>
                                            </div>
                                            <div className="hr"></div>
                                            <div className="d-flex
                                                align-items-center
                                                space-x-10
                                                justify-content-between">
                                                <div className="d-flex align-items-center
                                                    space-x-5">
                                                    <i className="ri-history-line"></i>
                                                    <a href="#" data-toggle="modal"
                                                        data-target="#popup_history">
                                                        <p className="color_text txt_sm
                                                            view_history" style={{width:'auto'}}>
                                                            View History
                                                        </p>
                                                    </a>
                                                </div>
                                                <a className="btn btn-sm btn-primary" href="#"
                                                    data-toggle="modal"
                                                    data-target="#popup_bid">Place Bid</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card__item four">
                                    <div className="card_body space-y-10">
                                        
                                        <div className="creators space-x-10">
                                            <div className="avatars space-x-3">
                                                <a href="/profile">
                                                    <img
                                                        src="assets/img/avatars/avatar_5.png"
                                                        alt="Avatar"
                                                        className="avatar avatar-sm" />
                                                </a>
                                                <a href="/profile">
                                                    <p className="avatars_name txt_xs">@jimmy_dom</p>
                                                </a>
                                            </div>
                                            <div className="avatars space-x-3">
                                                <a href="/profile">
                                                    <img
                                                        src="assets/img/avatars/avatar_6.png"
                                                        alt="Avatar"
                                                        className="avatar avatar-sm" />
                                                </a>
                                                <a href="/profile">
                                                    <p className="avatars_name txt_xs">@kristian_sefroui</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card_head">
                                            <a href="/item-detail">
                                                <img
                                                    src="assets/img/items/item_3.png"
                                                    alt="item
                                                    img" />
                                            </a>
                                            <a href="#" className="likes space-x-3">
                                                <i className="ri-heart-3-fill"></i>
                                                <span className="txt_sm">1.2k</span>
                                            </a>
                                        </div>
                                        
                
                                        <h6 className="card_title">
                                            <a className="color_black"
                                                href="/item-detail">
                                                Dodo hide the seek
                                            </a>
                                        </h6>
                                        <div className="card_footer d-block space-y-10">
                                            <div className="card_footer justify-content-between">
                                                <div className="creators">
                                                    <p className="txt_sm">6 in stock</p>
                                                </div>
                                                <a href="#" className="">
                                                    <p className="txt_sm">
                                                        Price: <span className="color_green txt_sm">2.45
                                                            ETH</span>
                                                    </p>
                                                </a>
                                            </div>
                                            <div className="hr"></div>
                                            <div className="d-flex
                                                align-items-center
                                                space-x-10
                                                justify-content-between">
                                                <div className="d-flex align-items-center
                                                    space-x-5">
                                                    <i className="ri-history-line"></i>
                                                    <a href="#" data-toggle="modal"
                                                        data-target="#popup_history">
                                                        <p className="color_text txt_sm
                                                            view_history" style={{width:'auto'}}>
                                                            View History
                                                        </p>
                                                    </a>
                                                </div>
                                                <a className="btn btn-sm btn-primary" href="#"
                                                    data-toggle="modal"
                                                    data-target="#popup_bid">Place Bid</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card__item four">
                                    <div className="card_body space-y-10">
                                        
                                        <div className="creators space-x-10">
                                            <div className="avatars space-x-3">
                                                <a href="/profile">
                                                    <img
                                                        src="assets/img/avatars/avatar_1.png"
                                                        alt="Avatar"
                                                        className="avatar avatar-sm" />
                                                </a>
                                                <a href="/profile">
                                                    <p className="avatars_name txt_xs">@Alvin_nov</p>
                                                </a>
                                            </div>
                                            <div className="avatars space-x-3">
                                                <a href="/profile">
                                                    <img
                                                        src="assets/img/avatars/avatar_7.png"
                                                        alt="Avatar"
                                                        className="avatar avatar-sm" />
                                                </a>
                                                <a href="/profile">
                                                    <p className="avatars_name txt_xs">@mucky_holiman</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card_head">
                                            <a href="/item-detail">
                                                <img
                                                    src="assets/img/items/item_4.png"
                                                    alt="item
                                                    img" />
                                            </a>
                                            <a href="#" className="likes space-x-3">
                                                <i className="ri-heart-3-fill"></i>
                                                <span className="txt_sm">4.1k</span>
                                            </a>
                                        </div>
                                        
                
                                        <h6 className="card_title">
                                            <a className="color_black"
                                                href="/item-detail">
                                                Liquid Forest Princess
                                            </a>
                                        </h6>
                                        <div className="card_footer d-block space-y-10">
                                            <div className="card_footer justify-content-between">
                                                <div className="creators">
                                                    <p className="txt_sm">34 in stock</p>
                                                </div>
                                                <a href="#" className="">
                                                    <p className="txt_sm">
                                                        Price: <span className="color_green txt_sm">0.55
                                                            ETH</span>
                                                    </p>
                                                </a>
                                            </div>
                                            <div className="hr"></div>
                                            <div className="d-flex
                                                align-items-center
                                                space-x-10
                                                justify-content-between">
                                                <div className="d-flex align-items-center
                                                    space-x-5">
                                                    <i className="ri-history-line"></i>
                                                    <a href="#" data-toggle="modal"
                                                        data-target="#popup_history">
                                                        <p className="color_text txt_sm
                                                            view_history" style={{width:'auto'}}>
                                                            View History
                                                        </p>
                                                    </a>
                                                </div>
                                                <a className="btn btn-sm btn-primary" href="#"
                                                    data-toggle="modal"
                                                    data-target="#popup_bid">Place Bid</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card__item four">
                                    <div className="card_body space-y-10">
                                        
                                        <div className="creators space-x-10">
                                            <div className="avatars space-x-3">
                                                <a href="/profile">
                                                    <img
                                                        src="assets/img/avatars/avatar_8.png"
                                                        alt="Avatar"
                                                        className="avatar avatar-sm" />
                                                </a>
                                                <a href="/profile">
                                                    <p className="avatars_name txt_xs">@stivan_rominok</p>
                                                </a>
                                            </div>
                                            <div className="avatars space-x-3">
                                                <a href="/profile">
                                                    <img
                                                        src="assets/img/avatars/avatar_9.png"
                                                        alt="Avatar"
                                                        className="avatar avatar-sm" />
                                                </a>
                                                <a href="/profile">
                                                    <p className="avatars_name txt_xs">@danil_pan</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card_head">
                                            <a href="/item-detail">
                                                <img
                                                    src="assets/img/items/item_5.png"
                                                    alt="item
                                                    img" />
                                            </a>
                                            <a href="#" className="likes space-x-3">
                                                <i className="ri-heart-3-fill"></i>
                                                <span className="txt_sm">6.4k</span>
                                            </a>
                                        </div>
                                        
                
                                        <h6 className="card_title">
                                            <a className="color_black"
                                                href="/item-detail">
                                                Spider Eyes Modern Art
                                            </a>
                                        </h6>
                                        <div className="card_footer d-block space-y-10">
                                            <div className="card_footer justify-content-between">
                                                <div className="creators">
                                                    <p className="txt_sm">7 in stock</p>
                                                </div>
                                                <a href="#" className="">
                                                    <p className="txt_sm">
                                                        Price: <span className="color_green txt_sm">1.45
                                                            ETH</span>
                                                    </p>
                                                </a>
                                            </div>
                                            <div className="hr"></div>
                                            <div className="d-flex
                                                align-items-center
                                                space-x-10
                                                justify-content-between">
                                                <div className="d-flex align-items-center
                                                    space-x-5">
                                                    <i className="ri-history-line"></i>
                                                    <a href="#" data-toggle="modal"
                                                        data-target="#popup_history">
                                                        <p className="color_text txt_sm
                                                            view_history" style={{width:'auto'}}>
                                                            View History
                                                        </p>
                                                    </a>
                                                </div>
                                                <a className="btn btn-sm btn-primary" href="#"
                                                    data-toggle="modal"
                                                    data-target="#popup_bid">Place Bid</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card__item four">
                                    <div className="card_body space-y-10">
                                        
                                        <div className="creators space-x-10">
                                            <div className="avatars space-x-3">
                                                <a href="/profile">
                                                    <img
                                                        src="assets/img/avatars/avatar_10.png"
                                                        alt="Avatar"
                                                        className="avatar avatar-sm" />
                                                </a>
                                                <a href="/profile">
                                                    <p className="avatars_name txt_xs">@mazanov_sky</p>
                                                </a>
                                            </div>
                                            <div className="avatars space-x-3">
                                                <a href="/profile">
                                                    <img
                                                        src="assets/img/avatars/avatar_11.png"
                                                        alt="Avatar"
                                                        className="avatar avatar-sm" />
                                                </a>
                                                <a href="/profile">
                                                    <p className="avatars_name txt_xs">@mucky_art</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card_head">
                                            <a href="/item-detail">
                                                <img
                                                    src="assets/img/items/item_6.png"
                                                    alt="item
                                                    img" />
                                            </a>
                                            <a href="#" className="likes space-x-3">
                                                <i className="ri-heart-3-fill"></i>
                                                <span className="txt_sm">13.2k</span>
                                            </a>
                                        </div>
                                        
                
                                        <h6 className="card_title">
                                            <a className="color_black"
                                                href="/item-detail">
                                                Synthwave Painting
                                            </a>
                                        </h6>
                                        <div className="card_footer d-block space-y-10">
                                            <div className="card_footer justify-content-between">
                                                <div className="creators">
                                                    <p className="txt_sm">2 in stock</p>
                                                </div>
                                                <a href="#" className="">
                                                    <p className="txt_sm">
                                                        Price: <span className="color_green txt_sm">0.055
                                                            ETH</span>
                                                    </p>
                                                </a>
                                            </div>
                                            <div className="hr"></div>
                                            <div className="d-flex
                                                align-items-center
                                                space-x-10
                                                justify-content-between">
                                                <div className="d-flex align-items-center
                                                    space-x-5">
                                                    <i className="ri-history-line"></i>
                                                    <a href="#" data-toggle="modal"
                                                        data-target="#popup_history">
                                                        <p className="color_text txt_sm
                                                            view_history" style={{width:'auto'}}>
                                                            View History
                                                        </p>
                                                    </a>
                                                </div>
                                                <a className="btn btn-sm btn-primary" href="#"
                                                    data-toggle="modal"
                                                    data-target="#popup_bid">Place Bid</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card__item four">
                                    <div className="card_body space-y-10">
                                        
                                        <div className="creators space-x-10">
                                            <div className="avatars space-x-3">
                                                <a href="/profile">
                                                    <img
                                                        src="assets/img/avatars/avatar_12.png"
                                                        alt="Avatar"
                                                        className="avatar avatar-sm" />
                                                </a>
                                                <a href="/profile">
                                                    <p className="avatars_name txt_xs">@jimmy_dom</p>
                                                </a>
                                            </div>
                                            <div className="avatars space-x-3">
                                                <a href="/profile">
                                                    <img
                                                        src="assets/img/avatars/avatar_5.png"
                                                        alt="Avatar"
                                                        className="avatar avatar-sm" />
                                                </a>
                                                <a href="/profile">
                                                    <p className="avatars_name txt_xs">@kristian_fel</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card_head">
                                            <a href="/item-detail">
                                                <img
                                                    src="assets/img/items/item_7.png"
                                                    alt="item
                                                    img" />
                                            </a>
                                            <a href="#" className="likes space-x-3">
                                                <i className="ri-heart-3-fill"></i>
                                                <span className="txt_sm">1.6k</span>
                                            </a>
                                        </div>
                                        
                
                                        <h6 className="card_title">
                                            <a className="color_black"
                                                href="/item-detail">
                                                Contemporary Abstract
                                            </a>
                                        </h6>
                                        <div className="card_footer d-block space-y-10">
                                            <div className="card_footer justify-content-between">
                                                <div className="creators">
                                                    <p className="txt_sm">34 in stock</p>
                                                </div>
                                                <a href="#" className="">
                                                    <p className="txt_sm">
                                                        Price: <span className="color_green txt_sm">0.95
                                                            ETH</span>
                                                    </p>
                                                </a>
                                            </div>
                                            <div className="hr"></div>
                                            <div className="d-flex
                                                align-items-center
                                                space-x-10
                                                justify-content-between">
                                                <div className="d-flex align-items-center
                                                    space-x-5">
                                                    <i className="ri-history-line"></i>
                                                    <a href="#" data-toggle="modal"
                                                        data-target="#popup_history">
                                                        <p className="color_text txt_sm
                                                            view_history" style={{width:'auto'}}>
                                                            View History
                                                        </p>
                                                    </a>
                                                </div>
                                                <a className="btn btn-sm btn-primary" href="#"
                                                    data-toggle="modal"
                                                    data-target="#popup_bid">Place Bid</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card__item four">
                                    <div className="card_body space-y-10">
                                        
                                        <div className="creators space-x-10">
                                            <div className="avatars space-x-3">
                                                <a href="/profile">
                                                    <img
                                                        src="assets/img/avatars/avatar_13.png"
                                                        alt="Avatar"
                                                        className="avatar avatar-sm" />
                                                </a>
                                                <a href="/profile">
                                                    <p className="avatars_name txt_xs">@Alvin_nov</p>
                                                </a>
                                            </div>
                                            <div className="avatars space-x-3">
                                                <a href="/profile">
                                                    <img
                                                        src="assets/img/avatars/avatar_14.png"
                                                        alt="Avatar"
                                                        className="avatar avatar-sm" />
                                                </a>
                                                <a href="/profile">
                                                    <p className="avatars_name txt_xs">@mucky_art</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card_head">
                                            <a href="/item-detail">
                                                <img
                                                    src="assets/img/items/item_8.png"
                                                    alt="item
                                                    img" />
                                            </a>
                                            <a href="#" className="likes space-x-3">
                                                <i className="ri-heart-3-fill"></i>
                                                <span className="txt_sm">11.5k</span>
                                            </a>
                                        </div>
                                        
                
                                        <h6 className="card_title">
                                            <a className="color_black"
                                                href="/item-detail">
                                                Valkyrie Abstract Art
                                            </a>
                                        </h6>
                                        <div className="card_footer d-block space-y-10">
                                            <div className="card_footer justify-content-between">
                                                <div className="creators">
                                                    <p className="txt_sm">9 in stock</p>
                                                </div>
                                                <a href="#" className="">
                                                    <p className="txt_sm">
                                                        Price: <span className="color_green txt_sm">3.55
                                                            ETH</span>
                                                    </p>
                                                </a>
                                            </div>
                                            <div className="hr"></div>
                                            <div className="d-flex
                                                align-items-center
                                                space-x-10
                                                justify-content-between">
                                                <div className="d-flex align-items-center
                                                    space-x-5">
                                                    <i className="ri-history-line"></i>
                                                    <a href="#" data-toggle="modal"
                                                        data-target="#popup_history">
                                                        <p className="color_text txt_sm
                                                            view_history" style={{width:'auto'}}>
                                                            View History
                                                        </p>
                                                    </a>
                                                </div>
                                                <a className="btn btn-sm btn-primary" href="#"
                                                    data-toggle="modal"
                                                    data-target="#popup_bid">Place Bid</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="/marketplace" className="btn btn-sm btn-white">
                                <i className="ri-restart-line"></i>
                                View all items
                            </a>
                        </div>
                    </div>
                </div>
                <div className="section mt-100">
                    <div className="container">
                        <div className="section__head">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2 className="section__title"> Collections</h2>
                                <a href="/collections" className="btn btn-dark btn-sm">
                                    View
                                    All</a>
                            </div>
                        </div>
                
                        <div className="row justify-content-center mb-30_reset">
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="collections space-y-10 mb-30">
                                    <a href="/collections">
                                        <div className="collections_item">
                                            <div className="images-box space-y-10">
                                                <div className="top_imgs">
                                                    <img
                                                        src="assets/img/items/item_9.png"
                                                        alt="" />
                                                    <img
                                                        src="assets/img/items/item_10.png"
                                                        alt="" />
                                                    <img
                                                        src="assets/img/items/item_11.png"
                                                        alt="" />
                                                </div>
                                                <img src="assets/img/items/item_12.png"
                                                    alt="" />
                                            </div>
                                        </div>
                                    </a>
                                    <div className="collections_footer justify-content-between">
                                        <h5 className="collection_title"><a href="/collections">Creative Art collection</a></h5>
                                        <a href="#" className="likes space-x-3">
                                            <i className="ri-heart-3-fill"></i>
                                            <span className="txt_md">2.1k</span>
                                        </a>
                                    </div>
                                    <div className="creators space-x-10">
                                        <span className="color_text txt_md"> 5 items · Created by</span>
                                        <div className="avatars space-x-5">
                                            <a href="/profile">
                                                <img
                                                    src="assets/img/avatars/avatar_2.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                        </div>
                                        <a href="/profile">
                                            <p className="avatars_name txt_sm"> @william_jamy... </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="collections space-y-10 mb-30">
                                    <a href="/collections">
                                        <div className="collections_item">
                                            <div className="images-box space-y-10">
                                                <div className="top_imgs">
                                                    <img
                                                        src="assets/img/items/item_13.png"
                                                        alt=""/>
                                                    <img
                                                        src="assets/img/items/item_14.png"
                                                        alt=""/>
                                                    <img
                                                        src="assets/img/items/item_15.png"
                                                        alt=""/>
                                                </div>
                                                <img src="assets/img/items/item_16.png"
                                                    alt=""/>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="collections_footer justify-content-between">
                                        <h5 className="collection_title"><a href="/collections">Colorful Abstract Painting</a></h5>
                                        <a href="#" className="likes space-x-3">
                                            <i className="ri-heart-3-fill"></i>
                                            <span className="txt_md">3.5k</span>
                                        </a>
                                    </div>
                                    <div className="creators space-x-10">
                                        <span className="color_text txt_md"> 7 items · Created by</span>
                                        <div className="avatars space-x-5">
                                            <a href="/profile">
                                                <img
                                                    src="assets/img/avatars/avatar_3.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                        </div>
                                        <a href="/profile">
                                            <p className="avatars_name txt_sm"> @alexis_fenn... </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="collections space-y-10 mb-30">
                                    <a href="/collections">
                                        <div className="collections_item">
                                            <div className="images-box space-y-10">
                                                <div className="top_imgs">
                                                    <img
                                                        src="assets/img/items/item_17.png"
                                                        alt=""/>
                                                    <img
                                                        src="assets/img/items/item_18.png"
                                                        alt=""/>
                                                    <img
                                                        src="assets/img/items/item_19.png"
                                                        alt=""/>
                                                </div>
                                                <img src="assets/img/items/item_20.png"
                                                    alt=""/>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="collections_footer justify-content-between">
                                        <h5 className="collection_title"><a href="/collections">Modern Art collection</a></h5>
                                        <a href="#" className="likes space-x-3">
                                            <i className="ri-heart-3-fill"></i>
                                            <span className="txt_md">7.2k</span>
                                        </a>
                                    </div>
                                    <div className="creators space-x-10">
                                        <span className="color_text txt_md"> 2 items · Created by</span>
                                        <div className="avatars space-x-5">
                                            <a href="/profile">
                                                <img
                                                    src="assets/img/avatars/avatar_1.png"
                                                    alt="Avatar" className="avatar avatar-sm"/>
                                            </a>
                                        </div>
                                        <a href="/profile">
                                            <p className="avatars_name txt_sm"> @Joshua_Bren... </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="call2action">
                    <div className="container">
                        <div className="row justify-content-between align-items-center
                            sm:space-y-20">
                            <div className="col-md-6">
                                <div className="space-y-20">
                                    <h1 className="text-white">Start your own
                                        collection today</h1>
                                    <p className="color_text section__text">raroin is a shared
                                        liquidity NFT
                                        market smart contract
                                        which
                                        is used by multiple websites to provide the users the
                                        best
                                        possible experience.</p>
                                    <a href="/connect-wallet" className="btn
                                        btn-primary">Start
                                        Collecting</a>
                                </div>
                            </div>
                            <div className="col-md-auto">
                                <img className="img-fluid img__logo"
                                    src="assets/img/logos/Logo_illustrstion.png"
                                    alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="logos__wrap">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-auto col-md-12">
                                <h3 className="section__title md:mb-20 text-left d-flex
                                    justify-content-center">Loved
                                    by
                                    the community</h3>
                            </div>
                            <div className="col-lg-auto col-md-12">
                                <div className="d-flex flex-column flex-md-row
                                    justify-content-center
                                    space-x-20 sm:space-x-0 sm:space-y-20 align-items-center">
                                    <img src="assets/img/logos/1.svg" alt="" />
                                    <img src="assets/img/logos/2.svg" alt="" />
                                    <img src="assets/img/logos/3.svg" alt="" />
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

export default connect(mapStateToProps, {dispatch_headerTitle})(withRouter(HomePage));