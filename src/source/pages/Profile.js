import React, { useState, useEffect } from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ethers } from "ethers";
import { Bars } from "react-loader-spinner";
import axios from "axios";
import Moment from "moment";
import toastr from "toastr";

import { NFTAddress, NFTmarketplaceAddress } from "../contract/address";
import MarketAbi from "../contract/abi/MarketAbi.json";
import MintAbi from "../contract/abi/MintAbi.json";

import { dispatch_headerTitle } from "../actions/dispatch_headerTitle";
import { DvrOutlined } from "@material-ui/icons";
import { ToastHeader } from "react-bootstrap";

function shortenAddress(address, chars = 4) {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

const http = axios.create({
  baseURL: "https://deep-index.moralis.io/api/v2",
  headers: {
    "Content-Type": "application/json",
    "X-API-Key":
      "99WFXV4PbRwf0CWzyuKo3s6yfJhAhEhkA6b1Gzs2YRjAFTeGVV7KjRJ4z3a8EIdp",
  },
});

function Profile() {

  const [auth, setAuth] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [NFTitems, setNFTItems] = useState([]);
  const [collections, setCollections] = useState([]);
  const [listType, setListType] = useState("fixed");
  const [fixedPrice, setFixedPrice] = useState(1);
  const [serviceFee, setServiceFee] = useState(15);
  const [auctionPrice, setAuctionPrice] = useState(1);
  const [duration, setDuration] = useState("3");
  const [currentItem, setCurrentItem] = useState({});
  const [secItems, setSecItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [btnText, setBtnText] = useState("Complete Listing");

  useEffect(() => {
    getSoldOutItems();
    getNFTItems();
    getCollections();
  }, []);

  const getNFTItems = async () => {
    const { ethereum } = window;

    try {
      setIsLoading(true);

      // get current wallet address
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAuth(accounts[0]);

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(
        NFTAddress,
        MintAbi,
        signer
      );
      let nftItems = await connectedContract.fetchAllNFTS();
      const rawData = await http.get(
        `/${accounts[0]}/nft?chain=rinkeby&format=decimal`
      );
      const nfts = rawData.data.result;
      console.log(nfts);
      // const nfts = [
      //   {
      //     "token_address": "0xf118940d61580431323d05f67d2f42615ebba3ed",
      //     "token_id": "31",
      //     "owner_of": "0x1d507a4386ceeefa177353f3a95c3e0eaf047163",
      //     "block_number": "10974168",
      //     "block_number_minted": "10974168",
      //     "token_hash": "097f2571c4b01edfa814a13f6a6eaad3",
      //     "amount": "1",
      //     "contract_type": "ERC721",
      //     "name": "Flewless",
      //     "symbol": "FL",
      //     "token_uri": "https://ipfs.moralis.io:2053/ipfs/QmeyhbiXm2xy9SdKNGgC3aYu2nEVr295Yydi44cqeBwu2H",
      //     "metadata": "{\"name\":\"Auction ITEM2\",\"description\":\"Auction ITEM2\",\"image\":\"https://gateway.pinata.cloud/ipfs/QmcYEw7o1Q1vka6NGq6A3WvqaLdC3rAodtA8RemMPmo1Cp\"}",
      //     "last_token_uri_sync": "2022-07-06T01:08:44.860Z",
      //     "last_metadata_sync": "2022-07-06T01:08:56.227Z"
      //   },
      //   {
      //     "token_address": "0xf118940d61580431323d05f67d2f42615ebba3ed",
      //     "token_id": "30",
      //     "owner_of": "0x1d507a4386ceeefa177353f3a95c3e0eaf047163",
      //     "block_number": "10974157",
      //     "block_number_minted": "10974157",
      //     "token_hash": "695f0c3038c1262dff1b97c517caf290",
      //     "amount": "1",
      //     "contract_type": "ERC721",
      //     "name": "Flewless",
      //     "symbol": "FL",
      //     "token_uri": "https://ipfs.moralis.io:2053/ipfs/QmeyhbiXm2xy9SdKNGgC3aYu2nEVr295Yydi44cqeBwu2H",
      //     "metadata": "{\"name\":\"Auction ITEM2\",\"description\":\"Auction ITEM2\",\"image\":\"https://gateway.pinata.cloud/ipfs/QmcYEw7o1Q1vka6NGq6A3WvqaLdC3rAodtA8RemMPmo1Cp\"}",
      //     "last_token_uri_sync": "2022-07-06T01:06:18.376Z",
      //     "last_metadata_sync": "2022-07-06T01:06:24.849Z"
      //   },
      //   {
      //     "token_address": "0xf118940d61580431323d05f67d2f42615ebba3ed",
      //     "token_id": "29",
      //     "owner_of": "0x1d507a4386ceeefa177353f3a95c3e0eaf047163",
      //     "block_number": "10974153",
      //     "block_number_minted": "10974153",
      //     "token_hash": "ceead126b4cf8fd33b0bd6a4f8d3f148",
      //     "amount": "1",
      //     "contract_type": "ERC721",
      //     "name": "Flewless",
      //     "symbol": "FL",
      //     "token_uri": "https://ipfs.moralis.io:2053/ipfs/QmdHCzdVcXzQoFZ2DZUYTPsk4pRAnd7iE7Cpw8epXuV4aT",
      //     "metadata": "{\"name\":\"FIXED ITEM2\",\"description\":\"FIXED ITEM2\",\"image\":\"https://gateway.pinata.cloud/ipfs/QmRYJbDmd6BaKyoYo5PsA7wUZPYFbJr3X2BjdozNDhLtcG\"}",
      //     "last_token_uri_sync": "2022-07-06T01:05:00.855Z",
      //     "last_metadata_sync": "2022-07-06T01:05:11.174Z"
      //   },
      //   {
      //     "token_address": "0xf118940d61580431323d05f67d2f42615ebba3ed",
      //     "token_id": "28",
      //     "owner_of": "0x1d507a4386ceeefa177353f3a95c3e0eaf047163",
      //     "block_number": "10974149",
      //     "block_number_minted": "10974149",
      //     "token_hash": "8bc11c4a86dfd7062cc1b98e956c8ed3",
      //     "amount": "1",
      //     "contract_type": "ERC721",
      //     "name": "Flewless",
      //     "symbol": "FL",
      //     "token_uri": "https://ipfs.moralis.io:2053/ipfs/QmUjdwbS1hY1EK4k6xTC9SxgruJcJm2gfv81n6pCFgiWrZ",
      //     "metadata": "{\"name\":\"Auction ITEM\",\"description\":\"Auction ITEM\",\"image\":\"https://gateway.pinata.cloud/ipfs/QmaxRpMTpdKubGEmhPJGTVYT76rvmjiPMSVEgvdTZEYYLY\"}",
      //     "last_token_uri_sync": "2022-07-06T01:04:09.468Z",
      //     "last_metadata_sync": "2022-07-06T01:04:20.159Z"
      //   },
      //   {
      //     "token_address": "0xf118940d61580431323d05f67d2f42615ebba3ed",
      //     "token_id": "27",
      //     "owner_of": "0x1d507a4386ceeefa177353f3a95c3e0eaf047163",
      //     "block_number": "10974143",
      //     "block_number_minted": "10974143",
      //     "token_hash": "ad6bd4be54aef573ede578ef74bad996",
      //     "amount": "1",
      //     "contract_type": "ERC721",
      //     "name": "Flewless",
      //     "symbol": "FL",
      //     "token_uri": "https://ipfs.moralis.io:2053/ipfs/QmZ1zs28qFeUq14G1doEz2sFtNBNUYUb2ESPHMg2EQ8BLF",
      //     "metadata": "{\"name\":\"FIXED\",\"description\":\"Fixed ITEM\",\"image\":\"https://gateway.pinata.cloud/ipfs/QmbPyheHwLxFaTKrJ6Xyj3J3G6W5M99QCKCSJRWU59dfiX\"}",
      //     "last_token_uri_sync": "2022-07-06T01:02:43.623Z",
      //     "last_metadata_sync": "2022-07-06T01:02:51.855Z"
      //   }

      // ]
      const myNFTs = nfts.filter((el, index) => {
        return (el.token_address).toLowerCase() == NFTAddress.toLowerCase();
      });
      console.log(myNFTs);
      let myNFTList = [];
      if (myNFTs && nftItems) {

        myNFTs?.forEach((value, index) => {

          const collectionIds = nftItems.filter((item, index) => {

            let tokenID = Number(ethers.utils.formatEther(item["tokenId"]._hex)) * 1e18;
            return Number(tokenID) === Number(value.token_id);

          });
          if (collectionIds[0] && value) {
            let tId = Number(ethers.utils.formatEther(collectionIds[0]['tokenId']._hex)) * 1e18;
            let nft = {
              tokenId: Number(value.token_id),
              collectionId: tId,
              owner: value.owner_of,
              imgInfo: JSON.parse(value.metadata),
            };
            myNFTList.push(nft);
          }


        });
      }

      console.log(myNFTList);
      setNFTItems(myNFTList);
      setIsLoading(false);
    } catch (error) {
      toastr.error("Error, can't get NFT items. Try again later.");
      console.log(error);

      setIsLoading(false);
    }
  };

  const getSoldOutItems = async () => {
    const { ethereum } = window;

    // get current wallet address
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setAuth(accounts[0]);

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(
      NFTmarketplaceAddress,
      MarketAbi,
      signer
    );
    let soldOutItems = await connectedContract.getItemIdByTokenId();
    console.log(soldOutItems);
    let auctionItems = await connectedContract.getAuctionItemSoldOut();
    let itemList = [];
    soldOutItems.forEach((item, index) => {
      let nft = {
        id: Number(ethers.utils.formatEther(item['id']._hex)) * 1e18,
        contract: item.nftContract,
        tokenId: Number(ethers.utils.formatEther(item["tokenId"])) * 1e18,
        type: "fixed",
      };
      itemList.push(nft);
    });
    auctionItems.forEach((item, index) => {
      let nft = {
        id: Number(ethers.utils.formatEther(item['id']._hex)) * 1e18,
        contract: item.nftContract,
        tokenId: Number(ethers.utils.formatEther(item["tokenId"])) * 1e18,
        type: "auction",
      };
      itemList.push(nft);
    });
    if (itemList.length > 0) {
      console.log(itemList, 'soldout');
      setSecItems(itemList);
    }
  };

  const getCollections = async () => {
    const { ethereum } = window;

    // get current wallet address
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(NFTAddress, MintAbi, signer);

    let results = await connectedContract.fetchCollections();
    let collections = [];
    for (let index = 0; index < results.length; index++) {
      if (results[index][7].toLowerCase() == accounts[0].toLowerCase()) {
        collections.push(results[index]);
      }
    }
    console.log(collections);
    setCollections(collections);
  };

  const completeList = async () => {

    const { ethereum } = window;

    // get current wallet address
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const marketContract = new ethers.Contract(
      NFTmarketplaceAddress,
      MarketAbi,
      signer
    );
    const mintContract = new ethers.Contract(NFTAddress, MintAbi, signer);

    if (listType === "fixed") {
      listFixed(marketContract, mintContract);
    } else {
      listAuction(marketContract, mintContract);
    }
  };

  const listFixed = async (_marketContract, _mintContract) => {
    setLoading(true);
    setBtnText('Approving an NFT...');

    setIsLoading(true);

    let approving = await _mintContract.approve(
      NFTmarketplaceAddress,
      currentItem.tokenId
    );
    await approving.wait();
    toastr.success("Successfully Approved!");

    setBtnText('Listing an NFT...');
    const price = "0x" + (fixedPrice * 10 ** 18).toString(16);
    const result = checkItemForSecondarySale(currentItem.tokenId, 'fixed');
    console.log(result);
    if (result > 0) {
      let listing = await _marketContract.createMarketItemForSecondary(
        price,
        result
      );
      await listing.wait();
      // toastr.success("Successfully Listed!");
      getNFTItems();
    } else {
      let listing = await _marketContract.createMarketItem(
        NFTAddress,
        currentItem.collectionId,
        currentItem.tokenId,
        price
      );
      await listing.wait();
      // toastr.success("Successfully Listed for First Sale!");
      getNFTItems();
    }
    setBtnText('Complete Listing');
    setLoading(false);
    setIsLoading(false);
  };

  const checkItemForSecondarySale = (_tokenId, _type) => {
    let itemId = [];

    secItems.forEach((item, index) => {
      if (item.tokenId == Number(_tokenId) && item.type == _type) {
        itemId.push(item.id);
      }
    });

    if (itemId.length > 0) {
      return Number(itemId[0]);
    } else {
      return 0;
    }

  };

  const listAuction = async (_marketContract, _mintContract) => {
    setLoading(true);
    setBtnText('Approving an NFT...');
    setIsLoading(true);
    let approving = await _mintContract.approve(
      NFTmarketplaceAddress,
      currentItem.tokenId
    );
    await approving.wait();
    toastr.success("Successfully Approved!");
    setBtnText('Listing an NFT...');
    const startPrice = "0x" + (auctionPrice * 10 ** 18).toString(16);
    const auctionPeriod = calcDuration(Number(duration));
    const result = checkItemForSecondarySale(currentItem.tokenId, 'auction');
    console.log(result);
    if (result > 0) {
      let listing = await _marketContract.createAuctionItemForSecondarySale(
        result,
        startPrice,
        auctionPeriod
      );
      await listing.wait();
      getNFTItems();
      toastr.success("Successfully Listed as timed Auction.");
    } else {
      let listing = await _marketContract.createAuctionItem(
        NFTAddress,
        currentItem.collectionId,
        currentItem.tokenId,
        startPrice,
        auctionPeriod
      );
      await listing.wait();
      getNFTItems();
      toastr.success("Successfully Listed as first timed Auction.");
    }
    setBtnText('Complete Listing');
    setLoading(false);
    setIsLoading(false);
  };

  const calcDuration = (_duration) => {
    const seconds = parseInt(_duration * 24 * 3600);
    console.log(seconds);
    return seconds;
  };

  const removeItemsFromState = () => {

  };

  return (
    <div>
      <div
        className="modal fade popup"
        id="popup_bid_success"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-body space-y-20 p-40">
              <h3 className="text-center">Your Bidding Successfuly Added</h3>
              <p className="text-center">
                your bid <span className="color_text txt_bold">(16ETH) </span>{" "}
                has been listing to our database
              </p>

              <a href="" className="btn btn-dark w-full">
                {" "}
                Watch the listings
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade popup"
        id="popup_bid"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-body space-y-20 p-40">
              <h3>List Item for Sale</h3>
              <div className="form-group space-y-10">
                <span className="variationInput">Type</span>
                <select
                  className="form-select custom-select"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setListType(e.target.value);
                    console.log(e.target.value);
                  }}
                  value={listType}
                >
                  <option value="fixed">Fixed Price</option>
                  <option value="auction">Timed Auction</option>
                </select>
              </div>
              {listType === "fixed" ? (
                <div>
                  <p>
                    <span className="color_black">Price (ETH)</span>
                  </p>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setFixedPrice(e.target.value)}
                    placeholder="00.00 ETH"
                    value={fixedPrice}
                  />
                </div>
              ) : (
                <div>
                  <p>
                    <span className="color_black">Starting Price (ETH)</span>
                  </p>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setAuctionPrice(e.target.value)}
                    placeholder="00.00 ETH"
                    value={auctionPrice}
                  />
                  <div className="form-group space-y-10 mt-3">
                    <span className="variationInput">Duration</span>
                    <select
                      className="form-select custom-select"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setDuration(e.target.value);
                      }}
                      value={duration}
                    >
                      <option value="0.002">Test (172s)</option>
                      <option value="1">One day</option>
                      <option value="3">3 days</option>
                      <option value="7">7 days</option>
                      <option value="31">One Month</option>
                      <option value="93">3 Months</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="hr"></div>
              <div className="d-flex justify-content-between">
                <p> Service Fee:</p>
                <p className="text-right color_black txt _bold">
                  {" "}
                  {serviceFee}%{" "}
                </p>
              </div>
              <button
                className="btn btn-primary w-full"
                onClick={() => completeList()}
                disabled={loading}
              >
                {" "}
                {btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-100">
        <div className="hero__profile">
          <div className="cover">
            <img src="assets/img/bg/prrofile.png" alt="" />
          </div>
          <div className="infos">
            <div className="container">
              <div
                className="row flex-wrap align-items-center
                                    justify-content-between"
              >
                <div className="col-md-auto mr-20">
                  <div
                    className="avatars d-flex space-x-20
                                            align-items-center"
                  >
                    {/* <div className="avatar_wrap">
                      <img
                        className="avatar avatar-lg"
                        src="assets/img/avatars/avatar_4.png"
                        alt="avatar"
                      />
                    </div> */}
                    <h5>{auth}</h5>
                  </div>
                </div>
                <div className="col-md-auto">
                  <div
                    className="d-flex flex-wrap align-items-center
                                            space-x-20 mb-20_reset"
                  >
                    <div className="mb-20">
                      <div className="copy">
                        <span className="color_text">
                          {" "}
                          {shortenAddress(auth, 6)}
                        </span>
                        <a href="#">
                          <i className="ri-file-copy-line color_text"></i>
                        </a>
                      </div>
                    </div>
                    <div
                      className="d-flex flex-wrap align-items-center
                                                space-x-20"
                    >
                      <div className="mb-20">
                        <a href="btn" className="btn btn-dark btn-sm">
                          Follow
                        </a>
                      </div>
                      <div className="mb-20">
                        <div className="share">
                          <div className="icon">
                            <a href="#">
                              {" "}
                              <i className="ri-share-line"></i>
                            </a>
                          </div>
                          <div className="dropdown__popup">
                            <ul className="space-y-10">
                              <li>
                                {" "}
                                <a href="https://facebook.com">
                                  {" "}
                                  <i className="ri-facebook-line"></i>
                                </a>
                              </li>
                              <li>
                                {" "}
                                <a href="https://facebook.com">
                                  {" "}
                                  <i className="ri-messenger-line"></i>
                                </a>
                              </li>
                              <li>
                                {" "}
                                <a href="https://whatsapp.com">
                                  {" "}
                                  <i className="ri-whatsapp-line"></i>
                                </a>
                              </li>
                              <li>
                                {" "}
                                <a href="https://youtube.com">
                                  {" "}
                                  <i className="ri-youtube-line"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mb-20">
                        <div className="more">
                          <div className="icon">
                            <a href="#">
                              {" "}
                              <i className="ri-more-fill"></i>
                            </a>
                          </div>
                          <div className="dropdown__popup">
                            <ul className="space-y-10">
                              <li>
                                <a
                                  href="#"
                                  className="space-x-10
                                                                        d-flex"
                                >
                                  <i className="ri-flag-line"></i>
                                  <span> Report </span>
                                </a>
                              </li>
                            </ul>
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

      <div className="container">
        <div className="row justify-content-center">
          {/* <div className="col-lg-3 col-md-7 order-md-0 order-1">
            <div className="profile__sidebar">
              <div className="space-y-40">
                <div className="space-y-10">
                  <h5>About me</h5>
                  <div className="box space-y-20">
                    <p>
                      I make art with the simple goal of giving you something
                      pleasing to look at for a few seconds.
                    </p>
                    <div className="row">
                      <div className="col-6">
                        <span className="txt_sm color_text">Collections</span>
                        <h4>105</h4>
                      </div>
                      <div className="col-6">
                        <span className="txt_sm color_text">Creations</span>
                        <h4>406</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-10">
                  <h5>Follow me</h5>
                  <div className="box">
                    <ul className="social_profile space-y-10 overflow-hidden">
                      <li>
                        <a href="#">
                          <i className="ri-facebook-line"></i>
                          <span className="color_text">facebook/</span>
                          @creabik
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-messenger-line"></i>
                          <span className="color_text"> messenger/</span>
                          @creabik
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-whatsapp-line"></i>
                          <span className="color_text"> whatsapp/</span>
                          @creabik
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-youtube-line"></i>
                          <span className="color_text">youtube/</span>
                          @creabik
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-center txt_sm mt-20 color_text">Since 2021</p>
            </div>
          </div> */}
          <div className="col-lg-12 col-md-12 order-md-1 order-0">
            <div className="profile__content">
              <div className="d-block justify-content-between">
                <div className="space-x-10">
                  <div className="d-flex justify-content-between">
                    <ul
                      className="nav nav-tabs d-flex space-x-10 mb-30"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="btn btn-white btn-sm active"
                          data-toggle="tab"
                          href="#tabs-1"
                          role="tab"
                        >
                          Creations
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="btn btn-white btn-sm"
                          data-toggle="tab"
                          href="#tabs-2"
                          role="tab"
                        >
                          Collections
                        </a>
                      </li>
                    </ul>

                    <div className="dropdown d-none d-sm-block">
                      <button
                        className="btn btn-white btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Recent Active
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="tabs-1"
                      role="tabpanel"
                    >
                      <div className="row mb-30_reset">
                        {isLoading ? (
                          <div className="loading-bar">
                            <Bars
                              heigth="10"
                              width="30"
                              color="white"
                              ariaLabel="loading"
                            />
                          </div>
                        ) : (
                          NFTitems.length > 0 &&
                          NFTitems.map((item, i) => (
                            <div key={i} className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                              <div className="card__item three">
                                <div className="card_body space-y-10">
                                  <div className="card_head">
                                    <img src={(item.imgInfo !== null) ? item.imgInfo.image : 'assets/img/items/cover_1.png'} alt="" />
                                    <a
                                      href="#"
                                      className="likes
                                                                                space-x-3"
                                    >
                                      <i className="ri-heart-3-fill"></i>
                                      <span className="txt_sm">1.2k</span>
                                    </a>
                                    <div className="action">
                                      <a

                                        className="btn
                                                                                    btn-primary btn-sm
                                                                                    btn_auction"
                                        data-toggle="modal"
                                        data-target="#popup_bid"
                                        onClick={() => setCurrentItem(item)}
                                      >
                                        Sell
                                      </a>
                                    </div>
                                  </div>

                                  <h6 className="card_title">
                                    <a
                                      className="color_black"
                                      href="/item-detail"
                                    >
                                      {(item.imgInfo !== null) ? item.imgInfo.name : 'NFT Name'}
                                    </a>
                                  </h6>

                                  <div
                                    className="card_footer d-block
                                                                            space-y-10"
                                  >
                                    <div
                                      className="d-flex
                                                                                justify-content-between
                                                                                align-items-center"
                                    >
                                      <div
                                        className="creators
                                                                                    space-x-10"
                                      >
                                        <div
                                          className="avatars
                                                                                        -space-x-20"
                                        >
                                          <a href="/profile">
                                            <img
                                              src="assets/img/avatars/avatar_1.png"
                                              alt="Avatar"
                                              className="avatar
                                                                                                avatar-sm"
                                            />
                                          </a>
                                          <a href="/profile">
                                            <img
                                              src="assets/img/avatars/avatar_2.png"
                                              alt="Avatar"
                                              className="avatar
                                                                                                avatar-sm"
                                            />
                                          </a>
                                        </div>
                                        <a href="/profile">
                                          <p
                                            className="avatars_name
                                                                                            txt_sm"
                                          >
                                            {shortenAddress(item.owner, 6)}
                                          </p>
                                        </a>
                                      </div>
                                      <a href="#" className="space-x-3">
                                        <p
                                          className="color_green
                                                                                        txt_sm"
                                        >
                                          0.001 ETH
                                        </p>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                      <div className="row mb-30_reset">
                        {collections.map((collection, i) => (
                          <div key={i} className="col-xl-4 col-lg-6 col-md-6 col-sm-8">
                            <div className="collections space-y-10 mb-30">
                              <div className="collections_item">
                                <div className="images-box space-y-10">
                                  <div className="d-flex space-x-10">
                                    <img
                                      style={{ width: "33.33%" }}
                                      src={collection[3]}
                                      className="collection-sub-img"
                                      alt=""
                                    />
                                    <img
                                      style={{ width: "33.33%" }}
                                      src={collection[3]}
                                      className="collection-sub-img"
                                      alt=""
                                    />
                                    <img
                                      style={{ width: "33.33%" }}
                                      src={collection[3]}
                                      className="collection-sub-img"
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    <img
                                      className="collection-main-img"
                                      src={collection[3]}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="collections_footer justify-content-between">
                                <h5 className="collection_title">
                                  <a href="/profile">{collection[1]}</a>
                                </h5>
                                <a href="#" className="likes space-x-3">
                                  <i className="ri-heart-3-fill"></i>
                                  <span className="txt_md">2.1k</span>
                                </a>
                              </div>
                              <div className="creators space-x-10">
                                <span className="color_text txt_md">
                                  {" "}
                                  {parseInt(
                                    collection[8]._hex.toString(16),
                                    16
                                  )}{" "}
                                  items · Created by
                                </span>
                                <div className="avatars space-x-5">
                                  <a href="/profile">
                                    <img
                                      src="assets/img/avatars/avatar_1.png"
                                      alt="Avatar"
                                      className="avatar avatar-sm"
                                    />
                                  </a>
                                </div>
                                <a href="/profile">
                                  <p className="avatars_name txt_sm">
                                    {" "}
                                    {shortenAddress(collection[7], 6)}{" "}
                                  </p>
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
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
  );
}

export default Profile;
