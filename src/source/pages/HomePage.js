import React from 'react';
import { withRouter, Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import hero_image from "../assets/img/hero.jpeg";
import { dispatch_headerTitle } from "../actions/dispatch_headerTitle";

function HomePage(props) {
    return (
        <React.Fragment>
            <div>
                <div className="modal fade popup" id="popup_bid_success" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-body space-y-20 p-40">
                                <h3 className="text-center">Your Bidding
                                    Successfuly Added</h3>
                                <p className="text-center">your bid <span className="color_text txt _bold">(16ETH) </span> has been listing
                                    to our database</p>

                                <a href="" className="btn btn-dark w-full"> Watch the listings</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade popup" id="popup_bid" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-body space-y-20 p-40">
                                <h3>Place a Bid</h3>
                                <p>You must bid at least <span className="color_black">15 ETH</span>
                                </p>
                                <input type="text" className="form-control" placeholder="00.00 ETH" onChange={() => this.handleChange()} />

                                <p>Enter quantity. <span className="color_green">5 available</span>
                                </p>
                                <input type="text" className="form-control" value="1" onChange={() => this.handleChange()} />
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
                                <a href="" className="btn btn-primary w-full" data-toggle="modal" data-target="#popup_bid_success"
                                    data-dismiss="modal" aria-label="Close"> Place a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero__1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="hero__left space-y-20">
                                    <h1 className="hero__title">
                                        Klandestino Band Presents the K-NFTS at Klandestino Art
                                    </h1>
                                    <p className="hero__text txt">Visit our marketplace klandestino and its tools to create K-NFTs, Metaverse Defi Training and its great training content with automatic access to K-NFT key.</p>
                                    <div className="space-x-20 d-flex flex-column flex-md-row
                                                    sm:space-y-20">
                                        <a className="btn btn-primary" href="#">View
                                            market</a>
                                        <a className="btn btn-white" href="#">
                                            Upload your item</a>
                                        <a className="btn btn-white" href="#">
                                            MetaVerse Defi Training</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <br /><br />
                                <img className="img-fluid w-full" id="img_js" src={hero_image} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="modal fade popup" id="popup_bid_success" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-body space-y-20 p-40">
                                <h3 className="text-center">Your Bidding
                                    Successfuly Added</h3>
                                <p className="text-center">your bid <span className="color_text txt _bold">(16ETH) </span> has been listing
                                    to our database</p>

                                <a href="" className="btn btn-dark w-full"> Watch the listings</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade popup" id="popup_bid" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-body space-y-20 p-40">
                                <h3>Place a Bid</h3>
                                <p>You must bid at least <span className="color_black">15 ETH</span>
                                </p>
                                <input type="text" className="form-control" placeholder="00.00 ETH" onChange={() => this.handleChange()} />

                                <p>Enter quantity. <span className="color_green">5 available</span>
                                </p>
                                <input type="text" className="form-control" value="1" onChange={() => this.handleChange()} />
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
                                <a href="" className="btn btn-primary w-full" data-toggle="modal" data-target="#popup_bid_success"
                                    data-dismiss="modal" aria-label="Close"> Place a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade popup" id="popup_history" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-body space-y-20 p-40">
                                <h4> History </h4>
                                <div className="creator_item creator_card space-x-10">
                                    <div className="avatars space-x-10">
                                        <div className="media">
                                            <div className="badge">
                                                <img src="assets/img/icons/Badge.svg" alt="" />
                                            </div>
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_1.png" alt="Avatar"
                                                    className="avatar avatar-md" />
                                            </a>
                                        </div>
                                        <div>
                                            <p className="color_black">Bid accepted <span className="color_brand">1
                                                ETH</span> by <a className="color_black txt _bold" href="/profile">ayoub</a></p>
                                            <span className="date color_text">28/06/2021, 12:08</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="creator_item creator_card space-x-10">
                                    <div className="avatars space-x-10">
                                        <div className="media">
                                            <div className="badge">
                                                <img src="assets/img/icons/Badge.svg" alt="" />
                                            </div>
                                            <a href="/profile">
                                                <img src="assets/img/avatars/avatar_2.png" alt="Avatar"
                                                    className="avatar avatar-md" />
                                            </a>
                                        </div>
                                        <div>
                                            <p className="color_black">Bid accepted <span className="color_brand">3
                                                ETH</span> by <a className="color_black txt _bold" href="/profile">monir</a></p>
                                            <span className="date color_text">22/05/2021, 12:08</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section mt-100">
                    <div className="container">
                        <div className="section__head">
                            <div className="d-flex justify-content-between sm-column
                                    align-items-center mb-20">
                                <h2 className="section__title"> Collections</h2>
                                <a href="/collections" className="btn btn-dark btn-sm">
                                    View
                                    All</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card__item four">
                                    <div className="card_body space-y-10">

                                        <div className="creators space-x-10">
                                            <div className="avatars space-x-3">
                                                <a href="/profile">
                                                    <img src="assets/img/avatars/avatar_1.png" alt="Avatar"
                                                        className="avatar avatar-sm" />
                                                </a>
                                                <a href="/profile">
                                                    <p className="avatars_name txt_xs">@mickel_fenn</p>
                                                </a>
                                            </div>
                                            <div className="avatars space-x-3">
                                                <a href="/profile">
                                                    <img src="assets/img/avatars/avatar_2.png" alt="Avatar"
                                                        className="avatar avatar-sm" />
                                                </a>
                                                <a href="/profile">
                                                    <p className="avatars_name txt_xs">@danil_pan</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card_head">
                                            <a href="/item-detail">
                                                <img src="assets/img/items/item_1.png" alt="" />
                                            </a>

                                            <a href="#" className="likes space-x-3">
                                                <i className="ri-heart-3-fill"></i>
                                                <span className="txt_sm">1.2k</span>
                                            </a>
                                        </div>

                                        <h6 className="card_title">
                                            <a className="color_black" href="/item-detail">
                                                Colorful Abstract Painting
                                            </a>
                                        </h6>

                                        <div className="card_footer d-block space-y-10">
                                            <div className="card_footer justify-content-between">
                                                <div className="creators">
                                                    <p className="txt_sm"> 4 in stock</p>
                                                </div>
                                                <a href="#" className="">
                                                    <p className="txt_sm">Price: <span className="color_green
                                                                txt_sm">2.45 ETH</span></p>
                                                </a>
                                            </div>
                                            <div className="hr"></div>
                                            <div className="d-flex align-items-center space-x-10
                                                    justify-content-between">
                                                <div className="d-flex align-items-center
                                                        space-x-10">
                                                    <i className="ri-history-line"></i>
                                                    <a href="#" data-toggle="modal" data-target="#popup_history">
                                                        <p className="color_text txt_sm" style={{ width: "auto" }}>
                                                            View History
                                                        </p>
                                                    </a>
                                                </div>
                                                <a className="btn btn-sm btn-primary" href="#" data-toggle="modal"
                                                    data-target="#popup_bid">Place
                                                    Bid</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="modal fade popup" id="popup_bid_success" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-body space-y-20 p-40">
                                <h3 className="text-center">Your Bidding
                                    Successfuly Added</h3>
                                <p className="text-center">your bid <span className="color_text txt _bold">(16ETH) </span> has been listing
                                    to our database</p>

                                <a href="" className="btn btn-dark w-full"> Watch the listings</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade popup" id="popup_bid" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-body space-y-20 p-40">
                                <h3>Place a Bid</h3>
                                <p>You must bid at least <span className="color_black">15 ETH</span>
                                </p>
                                <input type="text" className="form-control" placeholder="00.00 ETH" onChange={() => this.handleChange()} />

                                <p>Enter quantity. <span className="color_green">5 available</span>
                                </p>
                                <input type="text" className="form-control" value="1" onChange={() => this.handleChange()} />
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
                                <a href="" className="btn btn-primary w-full" data-toggle="modal" data-target="#popup_bid_success"
                                    data-dismiss="modal" aria-label="Close"> Place a bid</a>
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
                                    <p className="color_text section__text">Klandestino Art is a shared
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
                                    <img src="{{ asset('assets/img/logo.png') }}" width="100" height="100" className="img-thumbnail rounded-full" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>

    );
}



export default HomePage;