import React, { useState, useEffect } from 'react';
import { withRouter, Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import axios from "axios";
import { ethers } from "ethers";
import { Bars } from 'react-loader-spinner';

import { NFTAddress } from '../contract/address';
import NFT from '../contract/abi/MintAbi.json';
import { pinataApiKey, pinataSecretKey } from '../contract/pinataApiKey';

import { dispatch_headerTitle } from "../actions/dispatch_headerTitle";

function shortenAddress(address, chars = 4) {
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

function Upload() {

    const pinataUrl = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    const pinataBaseUrl = 'https://gateway.pinata.cloud/ipfs/';

    const [collections, setCollections] = useState([]);
    const [auth, setAuth] = useState('');
    const [imgRequired, setImgRequired] = useState(false);
    const [nameRequired, setNameRequired] = useState(false);
    const [descriptionRequired, setDescriptionRequired] = useState(false);
    const [priceRequired, setPriceRequired] = useState(false);
    const [collectionRequired, setCollectionRequired] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [imgSrc, setImgSrc] = useState('');
    const [imgFile, setImgFile] = useState('');
    const [state, setState] = useState({
        name: '',
        description: '',
        price: 0,
        collection: null
    });

    useEffect(() => {
        getCollection();
    }, []);

    const getCollection = async () => {
        const { ethereum } = window;

        // get current wallet address
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        setAuth(accounts[0]);

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
        if (collections.length != 0) setState({ collection: parseInt(collections[0][0]._hex.toString(16), 16) });
        setCollections(collections);
    };

    const handleChange = (event, index) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const handleImgChange = (e, index) => {
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/jpg'];

        if (validImageTypes.includes(e.target.files[0].type)) {
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

    async function uploadMetadataJson() {
        try {

            let data = new FormData();
            data.append('file', imgFile);

            var result = await axios.post(pinataUrl,
                data,
                {
                    headers: {
                        'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
                        'pinata_api_key': pinataApiKey,
                        'pinata_secret_api_key': pinataSecretKey
                    }
                }
            );
            console.log("========== Image Upload Success ===========", result);

            //You'll need to make sure that the metadata is in the form of a JSON object that's been convered to a string
            //metadata is optional
            const metadata = JSON.stringify({
                name: state.name,
                description: state.description,
                image: pinataBaseUrl + result.data.IpfsHash
            });

            let finalData = new FormData();
            const blob = new Blob([metadata], { type: "application/json" });
            finalData.append('file', blob);

            result = await axios.post(pinataUrl,
                finalData,
                {
                    headers: {
                        'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
                        'pinata_api_key': pinataApiKey,
                        'pinata_secret_api_key': pinataSecretKey
                    }
                }
            );
            console.log("========== Metadata Upload Success ===========", result);

            return result;
        } catch (error) {
            setIsLoading(false);
            toastr.error('Failed file upload. Try again later.');
            console.log(error);

            return false;
        }
    }

    const createItem = async () => {
        if (!imgFile) { setImgRequired(true); return; } else setImgRequired(false);
        if (!state.name) { setNameRequired(true); return; } else setNameRequired(false);
        if (!state.description) { setDescriptionRequired(true); return; } else setDescriptionRequired(false);
        // if(!state.price) {setPriceRequired(true); return;} else setPriceRequired(false);
        if (!state.collection) { setCollectionRequired(true); return; } else setCollectionRequired(false);

        try {
            setIsLoading(true);

            const successMetadataUpload = await uploadMetadataJson();

            if (successMetadataUpload) {
                const { ethereum } = window;

                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const connectedContract = new ethers.Contract(NFTAddress, NFT, signer);

                let metadataUrl = pinataBaseUrl + successMetadataUpload.data.IpfsHash;
                let nftTxn = await connectedContract.mintToken(state.collection, metadataUrl);
                await nftTxn.wait();
                setIsLoading(false);

                toastr.success('Successfully created new item!');
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
                        {/* <a href="upload-type.html" className="btn btn-white btn-sm
                                switch">
                            Switch
                            to Multiple</a> */}
                        <h2 className="title">Create single collectible</h2>

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
                                        <img src={imgSrc} style={{ objectFit: 'contain' }} alt="" />
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
                                        {state.name}
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
                                                        {shortenAddress(auth, 5)} </p>
                                                </a>
                                            </div>
                                            <a href="#" className="space-x-3">
                                                <p className="color_green txt_sm">{state.price} BNB</p>
                                            </a>
                                        </div>
                                        <div className="hr"></div>
                                        <a href="#" className="d-flex align-items-center
                                                space-x-10">
                                            <i className="ri-vip-crown-line"></i>
                                            <p className="color_text txt_sm" style={{ width: "auto" }}>Highest bid</p>
                                            <span className="color_black txt_sm">0.001 BNB</span>
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
                                    {imgSrc ?
                                        <img className="icon w-100" style={{ objectFit: 'contain' }} src={imgSrc} alt="" /> :
                                        <div className='m-auto'>
                                            <img className="icon" src="assets/img/icons/upload.svg" alt="" />
                                            <h5>Drag and drop your file</h5>
                                            <p className="color_text mb-4">PNG, GIF, WEBP, MP4 or MP3. Max
                                                100MB.</p>
                                            <p className="color_text">or choose a file</p>
                                            <a href="#" className="btn btn-white"> Browse files </a>
                                            {imgRequired && <p className='warning mt-4'>You should upload collection image!</p>}
                                        </div>
                                    }
                                </div>
                                <div className="space-y-20">
                                    <input type="file" onChange={handleImgChange} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group space-y-10">
                                <div className="space-y-20">
                                    <div className="space-y-10">
                                        <span className="nameInput">Title</span>
                                        <input type="text" className="form-control" name="name" onChange={handleChange} placeholder="e. g. `raroin design art`" />
                                        {nameRequired && <p className='warning'>This field is required!</p>}
                                    </div>
                                    <div className="space-y-10">
                                        <span className="nameInput">Description <span className="color_text">
                                            (optional) </span></span>
                                        <input type="text" className="form-control" name="description" onChange={handleChange} placeholder="e. g. `raroin design art`" />
                                        {descriptionRequired && <p className='warning'>This field is required!</p>}
                                    </div>
                                    {/* <div className="space-y-10">
                                        <span className="nameInput">Price</span>
                                        <input type="number" className="form-control" min="0" name="price" onChange={handleChange} placeholder="" />
                                        {priceRequired && <p className='warning'>This field is required!</p>}
                                    </div> */}
                                    <div className="space-y-10">
                                        <span className="variationInput">Choose collection</span>
                                        <div className="d-flex">
                                            <select className="form-select custom-select w-50" name="collection" onChange={handleChange} aria-label="Default select example">
                                                {collections.map((collection, i) => (
                                                    <option key={i} value={collection[0]}>{collection[1]}</option>
                                                ))}
                                            </select>
                                            <div className="d-flex flex-column flex-md-row w-50" style={{ justifyContent: 'right' }}>
                                                <a href="/create-collection" className="choose_collection mb-10 mb-md-0 mr-0 mr-md-3 mr-0">
                                                    <div className="icon">
                                                        <i className="ri-add-line"></i>
                                                    </div>
                                                    New collection
                                                </a>
                                            </div>
                                        </div>
                                        {collectionRequired && <p className='warning'>You should create at least 1 collection!</p>}
                                    </div>
                                </div>
                            </div>
                            <p className="color_black">
                                <span className="color_text text-bold"> Service fee : </span>
                                1.5%
                            </p>
                            {/* <p className="color_black">
                                <span className="color_text text-bold"> You will receive :
                                </span>
                                22.425 ETH $41,637.78
                            </p> */}
                            <p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed_row bottom-0 left-0 right-0">
                <div className="container">
                    <div className="row content justify-content-end mb-20_reset">
                        {/* <div className="col-md-auto col-12 mb-20">
                            <div className="space-x-10">
                                <a href="Upload.html" className="btn btn-white
                                        others_btn"> Cancel</a>
                                <a href="#" className="btn btn-dark others_btn" data-toggle="modal"
                                    data-target="#popup_preview"> Preview</a>

                            </div>
                        </div> */}
                        <div className="col-md-auto col-12 mb-20">
                            {!isLoading ?
                                <a onClick={createItem} className="btn btn-grad btn_create"> Create item</a> :
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
    )
}
export default Upload;