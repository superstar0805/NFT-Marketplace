import React, {useEffect, useState} from 'react';
import { withRouter, Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import axios from "axios";
import { ethers } from "ethers";
import { Bars } from  'react-loader-spinner';

import { NFTAddress } from '../contract/address';
import NFT from '../contract/abi/MintAbi.json';
import { pinataApiKey, pinataSecretKey } from '../contract/pinataApiKey';

import { dispatch_headerTitle } from "../actions/dispatch_headerTitle";

function CreateCollection() {

    const pinataUrl = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    const pinataBaseUrl = 'https://gateway.pinata.cloud/ipfs/';

    const [state, setState] = useState({
        name: '',
        description: ''
    });
    const [imgSrc, setImgSrc] = useState('');
    const [imgFile, setImgFile] = useState('');
    const [imgRequired, setImgRequired] = useState(false);
    const [nameRequired, setNameRequired] = useState(false);
    const [descriptionRequired, setDescriptionRequired] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event, index) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
	};

    const handleImgChange = (e, index) => {
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/jpg'];

        if(validImageTypes.includes(e.target.files[0].type)) {
            setImgRequired(false); 
            setImgFile(e.target.files[0]);

            const reader = new FileReader();
            reader.addEventListener("load", () => {
              setImgSrc(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        } else {
            toastr.error('You should upload image file!');
        }
	};

    async function addImageMetadata(file) {
        try {
    
            let data = new FormData();
            data.append('file', file);
            
            const result = await axios.post(pinataUrl,
                data,
                {
                    headers: {
                        'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
                        'pinata_api_key': pinataApiKey,
                        'pinata_secret_api_key': pinataSecretKey
                    }
                }
            )
            console.log("========== Image pinata upload success! ==========");

            return result;
        } catch (error) {
            setIsLoading(false);
            toastr.error('Failed image upload. Try again later.');    
            console.log(error);
            
            return false;
        }
    }

    const createCollection = async (event, index) => {
		if(!imgFile) {
            setImgRequired(true);
            return ;
        } else { 
            setImgRequired(false); 
        }
        if(!state.name) {
            setNameRequired(true);
            return ;
        } else { 
            setNameRequired(false); 
        }
		if(!state.description) {
            setDescriptionRequired(true);
            return ;
        } else { 
            setDescriptionRequired(false); 
        }

        toastr.options = {
            "positionClass": "toast-top-full-width mt-3",
        }

        try {
            setIsLoading(true);

            const successImgUpload = await addImageMetadata(imgFile);

            if(successImgUpload) {
                const { ethereum } = window;

                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const connectedContract = new ethers.Contract(NFTAddress, NFT, signer);
        
                let imgIpfsUrl = pinataBaseUrl + successImgUpload.data.IpfsHash;
                let nftTxn = await connectedContract.addCollection(state.name, state.description, imgIpfsUrl, '', '', '');
                await nftTxn.wait();
                setIsLoading(false);
    
                toastr.success('Successfully created new collection!');
            }
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            toastr.error('Error, try again later.');
        }
	};
    
    return (
        <div>
            <div className="hero__upload">
                <div className="container">
                    <div className="space-y-20">
                        <h2 className="title">Create New Collection</h2>
                    </div>
                </div>
            </div>
            <div className="modal fade popup" id="popup_preview" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body space-y-20 p-0">
                            <div className="card__item three m-0 in__popup">
                                <div className="card_body space-y-10">

                                    <div className="card_head">
                                        <img src="assets/img/items/item_4.png" alt="" />
                                        <a href="#" className="likes space-x-3">
                                            <i className="ri-heart-3-fill"></i>
                                            <span className="txt_sm">2.1k</span>
                                        </a>
                                        <div className="action">
                                            <a href="#" className="btn btn-primary btn-sm">
                                                <i className="ri-pie-chart-line color_white"></i>
                                                Place Your Bid
                                            </a>
                                        </div>
                                    </div>

                                    <h6 className="card_title">
                                        Colorful Abstract Painting
                                    </h6>
                                    <div className="card_footer d-block space-y-10">
                                        <div className="d-flex justify-content-between">
                                            <div className="creators space-x-10">
                                                <div className="avatars -space-x-20">
                                                    <a href="Profile.html">
                                                        <img src="assets/img/avatars/avatar_3.png" alt="Avatar" className="avatar
                                                                avatar-sm"/>
                                                    </a>
                                                    <a href="Profile.html">
                                                        <img src="assets/img/avatars/avatar_2.png" alt="Avatar" className="avatar
                                                                avatar-sm"/>
                                                    </a>
                                                </div>
                                                <a href="Profile.html">
                                                    <p className="avatars_name txt_sm">
                                                        @makinzi_jamy... </p>
                                                </a>
                                            </div>
                                            <a href="#" className="space-x-3">
                                                <p className="color_green txt_sm">0.001 ETH</p>
                                            </a>
                                        </div>
                                        <div className="hr"></div>
                                        <a href="#" className="d-flex align-items-center
                                                space-x-10">
                                            <i className="ri-vip-crown-line"></i>
                                            <p className="color_text txt_sm" style={{ width: "auto" }}>Highest bid</p>
                                            <span className="color_black txt_sm">0.001 ETH</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="box in__upload mb-120">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left__part space-y-40 md:mb-20 upload_file">
                                <div className="space-y-20 d-flex m-auto h-100">
                                    { imgSrc ? 
                                        <img className="icon w-100" style={{objectFit: 'contain'}} src={imgSrc} alt="" /> : 
                                        <div className='m-auto'>
                                            <img className="icon mb-3" src="assets/img/icons/upload.svg" alt="" />
                                            <h5>Drag and drop your file</h5>
                                            <p className="color_text mb-4">PNG, GIF, WEBP. Max
                                                100mb.</p>
                                            <p className="color_text">or choose a file</p>
                                            <a href="#" className="btn btn-white"> Browse files </a>
                                        </div>
                                    }
                                </div>
                                <div className="space-y-20 m-0">
                                    <input type="file" onChange={handleImgChange} />
                                </div>
                                {imgRequired && <p className='warning'>You should upload collection image!</p>}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group space-y-10">
                                <div className="space-y-20">
                                    <div className="space-y-10">
                                        <span className="nameInput">Name</span>
                                        <input type="text" onChange={handleChange} name="name" value={state.name} className="form-control" placeholder="Name" />
                                        {nameRequired && <p className='warning'>This field is required!</p>}
                                    </div>
                                    <div className="space-y-10">
                                        <span className="nameInput">Description <span className="color_text">
                                            </span></span>
                                        <input type="text" onChange={handleChange} name="description" value={state.description} className="form-control" placeholder="Description" />
                                        {descriptionRequired && <p className='warning'>This field is required!</p>}
                                    </div>
                                    <div className="space-y-10 text-right mt-5">
                                        {!isLoading ? 
                                            <a onClick={createCollection} className="btn btn-grad btn_create"> 
                                                Create Collection
                                            </a> :
                                            <a href='#' className="btn btn-grad btn_create loading-opacity"> 
                                                <Bars
                                                    heigth="10"
                                                    width="30"
                                                    color='white'
                                                    ariaLabel='loading'
                                                />
                                            </a>
                                        }
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

export default CreateCollection;