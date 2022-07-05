import React from 'react';
import {withRouter, Link, Redirect} from "react-router-dom";
import { connect } from 'react-redux';

import {dispatch_headerTitle} from "../actions/dispatch_headerTitle";

class EditProfile extends React.Component{
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
                <div className="modal fade popup" id="popup_social_media" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-body space-y-20 p-40">
                                <h3 className="text-center">Add more Social media</h3>
                                <div className="d-flex flex-column">
                                    <span className="nameInput mb-10">Telegram</span>
                                    <input type="text" className="form-control" placeholder="telegram username" onChange={() => this.handleChange()} />
                                    <a className="telegram-btn btn btn-primary mt-20
                                            btn-sm" href="#">
                                        <i className="ri-telegram-fill"></i>
                                        Connect to Telegram
                                    </a>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="nameInput mb-10">Instagram</span>
                                    <input type="text" className="form-control" placeholder="instagram username" onChange={() => this.handleChange()} />
                                    <a className="instagram-btn btn btn-primary mt-20
                                            btn-sm" href="#">
                                        <i className="ri-instagram-fill"></i>
                                        Connect to Instagram
                                    </a>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="nameInput mb-10">TikTok</span>
                                    <input type="text" className="form-control" placeholder="tiktok username" onChange={() => this.handleChange()} />
                                    <a className="tiktok-btn btn btn-primary mt-20
                                            btn-sm" href="#">
                                        <img className="mr-half" src="assets/img/icons/tiktok.svg" alt="" style={{height: '20px'}} />
                                        Connect to TikTok
                                    </a>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="nameInput mb-10">Youtube</span>
                                    <input type="text" className="form-control" placeholder="youtube username" onChange={() => this.handleChange()} />
                                    <a className="youtube-btn btn btn-primary mt-20
                                            btn-sm" href="#">
                                        <i className="ri-youtube-fill"></i>
                                        Connect to Youtube
                                    </a>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="nameInput mb-10">Medium</span>
                                    <input type="text" className="form-control" placeholder="medium username" onChange={() => this.handleChange()} />
                                    <a className="medium-btn btn btn-primary mt-20
                                            btn-sm" href="#">
                                        <img src="assets/img/icons/medium.svg" alt="" style={{width: '21px'}} />
                                        Connect to Medium
                                    </a>
                                </div>
                                <a className="discord-btn btn btn-primary
                                    w-100" href="#">
                                    Save
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="edit_profile">
                    <div className="mb-50">
                        <div className="hero__profile">
                            <div className="tabs">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb default mb-0">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Edit profile</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="cover">
                                <img src="assets/img/bg/cover.jpg" alt="cover" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="mb-50">
                            <h3 className="mb-30">Choice your Cover image</h3>
                            <div className="row profile-img">
                                <div className="col-6 col-md-2">
                                    <div className="box
                                            in__profile
                                            d-flex
                                            justify-content-center
                                            align-items-center">
                                        <img className="icon" src="assets/img/icons/upload-plus.svg" alt="" />
                                        <input type="file" accept="image/png, image/jpeg" onChange={() => this.handleChange()} />
                                    </div>
                                </div>
                                <div className="col-6 col-md-2">
                                    <div className="pro_img is_active">
                                        <img src="assets/img/bg/cover_active.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-6 col-md-2">
                                    <div className="pro_img">
                                        <img src="assets/img/bg/edit1.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-6 col-md-2">
                                    <div className="pro_img">
                                        <img src="assets/img/bg/edit1.png" alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="avatars space-x-20 mb-30">
                                <div id="profile-container">
                                    <img id="profileImage" src="assets/img/avatars/avatar_3.png" alt="Avatar"
                                        className="avatar avatar-lg border-0" />
                                </div>
                                <div className="space-x-10 d-flex">
                                    <div id="boxUpload">
                                        <a href="#" className="btn btn-dark">
                                            Upload New Photo </a>
                                        <input id="imageUpload" type="file" name="profile_photo" placeholder="Photo" onChange={() => this.handleChange()} required="" capture/>
                                    </div>
                                    <a href="#" className="btn btn-white"> Delete </a>
                                </div>
                            </div>
                            <div className="box edit_box col-lg-9 space-y-30">
                                <div className="row sm:space-y-20">
                                    <div className="col-lg-6 account-info">
                                        <h3 className="mb-20">Account info 🍉</h3>
                                        <div className="form-group space-y-10 mb-0">
                                            <div className="space-y-40">
                                                <div className="space-y-10">
                                                    <span className="nameInput">Display name</span>
                                                    <input type="text" className="form-control" value="Creabik" onChange={() => this.handleChange()} />
                                                </div>
                                                <div className="space-y-10">
                                                    <span className="nameInput">Custom URL</span>
                                                    <input type="text" className="form-control" value="raroin.creabik.com/" onChange={() => this.handleChange()} />
                                                </div>
                                                <div className="space-y-10">
                                                    <span className="nameInput d-flex
                                                            justify-content-between">Email
                                                        <span className="txt_xs">Your email for
                                                            marketplace notifications</span>
                                                    </span>
                                                    <div className="confirm">
                                                        <input type="text" className="form-control"
                                                            placeholder="Enter your email" onChange={() => this.handleChange()} />
                                                        <a href="#" className="confirm-btn btn
                                                                btn-dark btn-sm">Confirm</a>
                                                    </div>
                                                </div>
                                                <div className="space-y-10">
                                                    <span className="nameInput">Bio</span>
                                                    <textarea style={{minHeight: '110px'}} placeholder="Add your bio" onChange={() => this.handleChange()}>
                                                    </textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 social-media">
                                        <h3 className="mb-20">Your Social media</h3>
                                        <div className="form-group space-y-10">
                                            <div className="space-y-40">
                                                <div className="d-flex flex-column">
                                                    <span className="nameInput mb-10">Facebook</span>
                                                    <input type="text" className="form-control" placeholder="facebook username" onChange={() => this.handleChange()} />
                                                    <a className="facebook-btn btn btn-primary mt-20
                                                            btn-sm" href="#">
                                                        <i className="ri-facebook-circle-fill"></i>
                                                        Connect to Facebook
                                                    </a>


                                                </div>
                                                <div className="d-flex flex-column">
                                                    <span className="nameInput mb-10">Twitter</span>
                                                    <input type="text" className="form-control" placeholder="twitter username" onChange={() => this.handleChange()} />
                                                    <a className="twitter-btn btn btn-primary mt-20
                                                            btn-sm" href="#">
                                                        <i className="ri-twitter-fill"></i>
                                                        Connect to Twitter
                                                    </a>

                                                </div>
                                                <div className="d-flex flex-column">
                                                    <span className="nameInput mb-10">Discord</span>
                                                    <input type="text" className="form-control" placeholder="discord username" onChange={() => this.handleChange()} />
                                                    <a className="discord-btn btn btn-primary mt-20
                                                            btn-sm" href="#">
                                                        <i className="ri-discord-fill"></i>
                                                        Connect to Discord
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn btn-white mt-20
                                                btn-sm" href="#" data-toggle="modal" data-target="#popup_social_media">
                                            <i className="ri-add-circle-line color_brand"></i>
                                            Add more Social media
                                        </a>
                                    </div>
                                </div>
                                <div className="hr"></div>
                                <p className="color_black">To update your settings you should
                                    sign message through your wallet. Click 'Update profile'
                                    then sign the message.</p>
                                <div><a href="#" className="btn btn-grad">Update Profile</a></div>
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

export default connect(mapStateToProps, {dispatch_headerTitle})(withRouter(EditProfile));