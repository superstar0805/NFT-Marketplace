import React, { useState, useEffect } from 'react';
import { withRouter, Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { ethers } from "ethers";

import { NFTAddress } from '../contract/address';
import NFT from '../contract/abi/MintAbi.json';

import { dispatch_headerTitle } from "../actions/dispatch_headerTitle";

function shortenAddress(address, chars = 4) {
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

function Collection() {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        getCollectionList();
    }, []);

    const getCollectionList = async () => {
        const { ethereum } = window;
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(NFTAddress, NFT, signer);

        let results = await connectedContract.fetchCollections();
        let collections = [];
        for (let index = 0; index < results.length; index++) {
            if (results[index][7].toLowerCase() == accounts[0].toLowerCase()) {
                collections.push(results[index]);
            }
        }
        setCollections(collections);
    };

    const checkedhandleChange = (event, index) => {

    };
    console.log(collections);
    return (
        <div>
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
                        {collections.map((collection, i) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={i}>
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
                                            <a href="/items">
                                                <img src={collection[3]} alt="" />
                                            </a>

                                            <a href="#" className="likes space-x-3">
                                                <i className="ri-heart-3-fill"></i>
                                                <span className="txt_sm">1.2k</span>
                                            </a>
                                        </div>

                                        <h6 className="card_title text-center">
                                            <a className="color_black" href="/item-detail">
                                                {collection[1]}
                                            </a>
                                        </h6>
                                        <div className='d-flex justify-content-between'>
                                            <div className="creators">
                                                <p className="txt_sm"> {parseInt(collection[8]._hex.toString(16), 16)} Items</p>
                                            </div>
                                            <div>
                                                <a href="#" className="">
                                                    <p className="txt_sm">Price: <span className="color_green
                                                                    txt_sm">2.45 ETH</span></p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card_footer d-block space-y-10">
                                            <div className="card_footer justify-content-between">
                                                <div className="avatars space-x-5">
                                                    <span className="color_text txt_md"> Created by</span>
                                                </div>
                                                <div className="avatars space-x-3 d-flex">
                                                    <a href="/profile">
                                                        <img src="assets/img/avatars/avatar_2.png" alt="Avatar"
                                                            className="avatar avatar-sm" />
                                                    </a>
                                                    <a href="/profile">
                                                        <p className="avatars_name txt_sm"> {shortenAddress(collection[7], 6)} </p>
                                                    </a>
                                                </div>
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
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Collection;