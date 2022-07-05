import React from 'react';
import {withRouter, Link, Redirect} from "react-router-dom";
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

import {dispatch_headerTitle} from "../actions/dispatch_headerTitle";

function ConnectWallet() {

    const connectWallet = async (event, wallet_name) => {
        if(wallet_name == 'metamask') {

            // A Web3Provider wraps a standard Web3 provider, which is
            // what MetaMask injects as window.ethereum into each page
            const provider = new ethers.providers.Web3Provider(window.ethereum)

            // MetaMask requires requesting permission to connect users accounts
            await provider.send("eth_requestAccounts", []);

            // The MetaMask plugin also allows signing transactions to
            // send ether and pay to change state within the blockchain.
            // For this, you need the account signer...
            const signer = provider.getSigner();

        } else if(wallet_name == 'walletconnect') {

        }
	};

    const checkedhandleChange = (event, index) => {
		
	};
  
    
    return (
        <div>
            <div className="modal fade popup" id="popup_connected" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body space-y-20 p-40">
                            <h3 className="text-center">Wallet Connected!</h3>
                            <p className="text-center">You have sucessfully connected your
                                wallet,
                                now you can start bidding or upload your own art!</p>
                            <div className="d-flex justify-content-center space-x-20">
                                <a href="#" data-dismiss="modal" className="btn btn-dark">
                                    Discover Assets</a>
                                <a href="" className="btn btn-grad"> Create item</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade popup" id="popup_error" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body space-y-20 p-40">
                            <h3 className="color_red">Error!</h3>
                            <p>User rejected the request.. <br></br>
                                If the problem persist please Contact support</p>

                            <a href="" className="btn btn-primary"> Try again</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="effect">
                <div className="container">
                    <a href="/" className="btn btn-white btn-sm mt-20">
                        Back to home</a>
                    <div className="hero__wallets pt-100 pb-50">
                        <div className="space-y-20 d-flex flex-column align-items-center">
                            <div className="logo">
                                <img src="assets/img/icons/logo.svg" alt=""/>
                            </div>
                            <h2 className="text-center">Connect your wallet</h2>
                            <p className="text-center">Connect with one of available wallet
                                providers or create a new wallet.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="wallets">
                                <div className="row mb-20_reset">
                                    
                                    <div className="col-lg-4">
                                        <a href="#" className="box in__wallet space-y-10" data-toggle="modal"
                                            data-target="#popup_connected">
                                            <div className="logo">
                                                <img src="assets/img/icons/coibase.svg" alt="logo_community"/>
                                            </div>
                                            <h5 className="text-center">coibase</h5>
                                            <p className="text-center">wallet that works on both mobile and through a browser
                                                extension</p>
                                        </a>
                                    </div>
                                    
                                    <div className="col-lg-4">
                                        <a onClick={(event) => connectWallet(event, 'metamask')} className="box in__wallet space-y-10" >
                                            <div className="logo">
                                                <img src="assets/img/icons/metamask.svg" alt="logo_community"/>
                                            </div>
                                            <h5 className="text-center">metamask</h5>
                                            <p className="text-center">A browser extension with great flexibility. The
                                                web&#x27;s popular wallet</p>
                                        </a>
                                    </div>
                                    
                                    <div className="col-lg-4">
                                        <a onClick={(event) => connectWallet(event, 'walletconnect')} className="box in__wallet space-y-10" data-toggle="modal"
                                            data-target="#popup_error">
                                            <div className="logo">
                                                <img src="assets/img/icons/walletconnect.svg" alt="logo_community"/>
                                            </div>
                                            <h5 className="text-center">walletconnect</h5>
                                            <p className="text-center">Log in with Google, Facebook, or other OAuth provider</p>
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

export default ConnectWallet;