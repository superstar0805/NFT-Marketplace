import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import { Redirect, useLocation } from "react-router-dom";
import { NFTmarketplaceAddress, NFTAddress } from "../contract/address";
import MarketAbi from "../contract/abi/MarketAbi.json";
import MintAbi from "../contract/abi/MintAbi.json";
import Moment from "moment";
import Countdown from "react-countdown";
import toastr from "toastr";

const http = axios.create({
  baseURL: "https://deep-index.moralis.io/api/v2",
  headers: {
    "Content-Type": "application/json",
    "X-API-Key":
      "99WFXV4PbRwf0CWzyuKo3s6yfJhAhEhkA6b1Gzs2YRjAFTeGVV7KjRJ4z3a8EIdp",
  },
});

function shortenAddress(address, chars = 4) {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

function Items() {
  // State Variables
  const [marketId, setMarketId] = useState("");
  const [auth, setAuth] = useState("");
  const [listedItems, setListedItems] = useState([]);
  const [timedItems, setTimedItems] = useState([]);
  const [curItem, setCurItem] = useState({});
  const [curAuctionItem, setCurAuctionItem] = useState({});
  const [secItems, setSecItems] = useState([]);
  const [curBidAmount, setCurBidAmount] = useState("");
  const [collections, setCollections] = useState([]);

  const location = useLocation();

  let collection_id;
  if (location.id !== undefined) {
    collection_id = parseInt(location.id._hex, 16);
    console.log('=============== collection id ===============', collection_id);
  }

  useEffect(() => {
    getCollections();
    loadNFTItems();
    getSoldOutItems();
  }, []);

  // Functions
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <button className="btn btn-sm btn-grad">Auction Time Passed</button>
      );
    } else {
      return (
        <div className="d-flex justify-content-center align-items-center">
          <div className="item">
            <div className="number txt">
              {days >= 10 ? days : "0" + days}
              <span></span>
            </div>
          </div>
          <div className="dots">:</div>
          <div className="item">
            <div className="number txt">
              {hours >= 10 ? hours : "0" + hours}
              <span></span>
            </div>
          </div>
          <div className="dots">:</div>
          <div className="item">
            <div className="number txt">
              {minutes >= 10 ? minutes : "0" + minutes}
              <span></span>
            </div>
          </div>
          <div className="dots">:</div>
          <div className="item">
            <div className="number txt">
              {seconds >= 10 ? seconds : "0" + seconds}
              <span></span>
            </div>
          </div>
        </div>
      );
    }
  };

  const loadNFTItems = async () => {
    const { ethereum } = window;

    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setAuth(accounts[0]);

    const rawData = await http.get(
      `/${NFTmarketplaceAddress}/nft?chain=rinkeby&format=decimal`
    );
    const nfts = rawData.data.result;
    // const nfts = [
    //   {
    //     "token_address": "0xf118940d61580431323d05f67d2f42615ebba3ed",
    //     "token_id": "16",
    //     "owner_of": "0x9ac06ac7a8c9ad8f289ef46b9aea5e4a2ce5cf93",
    //     "block_number": "10420077",
    //     "block_number_minted": "10420054",
    //     "token_hash": "106275cfc495f09499b7cdcc2fe80c5f",
    //     "amount": "1",
    //     "contract_type": "ERC721",
    //     "name": "Flewless",
    //     "symbol": "FL",
    //     "token_uri": "https://gateway.moralisipfs.com/ipfs/QmZysNp2aR9LPMFxZcTL2qpeqeJ6iLim3G7aoYm3gGJ8kv",
    //     "metadata": "{\"name\":\"title\",\"description\":\"This is test tile\",\"image\":\"https://gateway.pinata.cloud/ipfs/QmaoHZQG8NTBkCL1cWr8ZR1hzrC6754qLUwfpTZRZAUYQx\"}",
    //     "last_token_uri_sync": null,
    //     "last_metadata_sync": null
    //   },
    //   {
    //     "token_address": "0xf118940d61580431323d05f67d2f42615ebba3ed",
    //     "token_id": "4",
    //     "owner_of": "0x9ac06ac7a8c9ad8f289ef46b9aea5e4a2ce5cf93",
    //     "block_number": "10391253",
    //     "block_number_minted": "10382056",
    //     "token_hash": "287960e3290d51394de54ebf28730f4d",
    //     "amount": "1",
    //     "contract_type": "ERC721",
    //     "name": "Flewless",
    //     "symbol": "FL",
    //     "token_uri": "https://gateway.moralisipfs.com/ipfs/QmR6UucitEQkzd4EMtZEjFyhvVFpb4Acd5UfUK6ciz5DrD",
    //     "metadata": "{\"name\":\"Gentle man\",\"description\":\"This is gentle man\",\"image\":\"https://gateway.pinata.cloud/ipfs/QmRXK5YNUazr5uLu5m1p6n5YFyfS9kREtrwSdBjCtn9izy\"}",
    //     "last_token_uri_sync": null,
    //     "last_metadata_sync": null
    //   },
    //   {
    //     "token_address": "0xf118940d61580431323d05f67d2f42615ebba3ed",
    //     "token_id": "15",
    //     "owner_of": "0x9ac06ac7a8c9ad8f289ef46b9aea5e4a2ce5cf93",
    //     "block_number": "10388636",
    //     "block_number_minted": "10388626",
    //     "token_hash": "2f67c208bc212347aa6c211b9a2497a5",
    //     "amount": "1",
    //     "contract_type": "ERC721",
    //     "name": "Flewless",
    //     "symbol": "FL",
    //     "token_uri": "https://gateway.moralisipfs.com/ipfs/QmPUFq3EFqdqiFLEsTZLtNcQRoLgSRQ5DRKCg6Kh55BrwF",
    //     "metadata": "{\"name\":\"Room \",\"description\":\"This is room\",\"image\":\"https://gateway.pinata.cloud/ipfs/QmNUN3BGGp8U4EggTvX1rjvpxe7TLbZF4JgYRiQoZeAUsw\"}",
    //     "last_token_uri_sync": null,
    //     "last_metadata_sync": null
    //   },
    //   {
    //     "token_address": "0xf118940d61580431323d05f67d2f42615ebba3ed",
    //     "token_id": "13",
    //     "owner_of": "0x9ac06ac7a8c9ad8f289ef46b9aea5e4a2ce5cf93",
    //     "block_number": "10388535",
    //     "block_number_minted": "10388487",
    //     "token_hash": "c6f7983242819b1e8aaf8b64bbaf914b",
    //     "amount": "1",
    //     "contract_type": "ERC721",
    //     "name": "Flewless",
    //     "symbol": "FL",
    //     "token_uri": "https://gateway.moralisipfs.com/ipfs/QmSa5ifT43Er6nzk1x1vy3hJ5qGiuW5c41oDGRWsVWm264",
    //     "metadata": "{\"name\":\"Shark\",\"description\":\"This is shark\",\"image\":\"https://gateway.pinata.cloud/ipfs/Qme3NCsmYyjGpRkCVsHrtreRm48GNc6DAY7Ba3YYSkCYan\"}",
    //     "last_token_uri_sync": null,
    //     "last_metadata_sync": null
    //   },
    //   {
    //     "token_address": "0xf118940d61580431323d05f67d2f42615ebba3ed",
    //     "token_id": "10",
    //     "owner_of": "0x9ac06ac7a8c9ad8f289ef46b9aea5e4a2ce5cf93",
    //     "block_number": "10387370",
    //     "block_number_minted": "10387049",
    //     "token_hash": "0ce7636d25274f1f06c2cbd7cbb04519",
    //     "amount": "1",
    //     "contract_type": "ERC721",
    //     "name": "Flewless",
    //     "symbol": "FL",
    //     "token_uri": "https://gateway.moralisipfs.com/ipfs/QmY8jkU9PGdxjQcBJ2pT5D1M9cJkCVyKEhkxgV3mWMGKfB",
    //     "metadata": "{\"name\":\"Rochester John\",\"description\":\"12\",\"image\":\"https://gateway.pinata.cloud/ipfs/QmbJ7EVMnWfaZzESZ7Q6vA2GmEo28AQZkkCfML7ReKsByW\"}",
    //     "last_token_uri_sync": null,
    //     "last_metadata_sync": null
    //   },
    //   {
    //     "token_address": "0xf118940d61580431323d05f67d2f42615ebba3ed",
    //     "token_id": "1",
    //     "owner_of": "0x9ac06ac7a8c9ad8f289ef46b9aea5e4a2ce5cf93",
    //     "block_number": "10386864",
    //     "block_number_minted": "10381092",
    //     "token_hash": "50f145b4e27f576b32b1514a1d81202a",
    //     "amount": "1",
    //     "contract_type": "ERC721",
    //     "name": "Flewless",
    //     "symbol": "FL",
    //     "token_uri": "https://gateway.moralisipfs.com/ipfs/QmaQWddbKemA87YpdAPCMEuKFVxzHMyA6niokYeQT2Kbt9",
    //     "metadata": "{\"name\":\"NFT Test Item\",\"description\":\"This is an NFT Test Item.\",\"image\":\"https://gateway.pinata.cloud/ipfs/QmbJ7EVMnWfaZzESZ7Q6vA2GmEo28AQZkkCfML7ReKsByW\"}",
    //     "last_token_uri_sync": null,
    //     "last_metadata_sync": null
    //   }
    // ];
    console.log(nfts);

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(
      NFTmarketplaceAddress,
      MarketAbi,
      signer
    );

    if (nfts.length > 0) {
      let fixedItems = [];
      let auctionItems = [];
      const lengthOfItems = await connectedContract.getLengthOfItems();
      const length = parseInt(lengthOfItems, 16);

      // for (let i = 1; i <= length; i++) {
      const gettingItem = await connectedContract.marketItems(lengthOfItems);
      const gettingAuctionItem = await connectedContract.auctionItems(lengthOfItems);
      const fixedItemid = Number(ethers.utils.formatEther(gettingItem["id"]._hex)) * 1e18;
      const fixedTokenId = Number(ethers.utils.formatEther(gettingItem["tokenId"]._hex)) * 1e18;
      const auctionItemid = Number(ethers.utils.formatEther(gettingAuctionItem["id"]._hex)) * 1e18;
      const auctionTokenId = Number(ethers.utils.formatEther(gettingAuctionItem["tokenId"]._hex)) * 1e18;

      if (fixedItemid > 0) {
        let metadata = await getMetaByTokenId(
          nfts,
          fixedTokenId
        );
        const item = {
          id: fixedItemid,
          price: ethers.utils.formatEther(gettingItem["price"]._hex),
          collectionId: parseInt(gettingItem["collectionId"], 16),
          seller: gettingItem["seller"],
          buyer: gettingItem["buyer"],
          creator: gettingItem["creator"],
          contract: gettingItem["nftContract"],
          state: gettingItem["state"],
          tokenId: fixedTokenId,
          metadata: metadata,
          type: "fixed",
          duration: 0,
        };
        fixedItems.push(item);
      }
      if (
        auctionItemid > 0 &&
        auctionTokenId > 0
      ) {
        const tokenId = auctionTokenId;
        let metadata = await getMetaByTokenId(nfts, tokenId);
        const restTime = calcAuctionPeriod(
          gettingAuctionItem["started_at"],
          gettingAuctionItem["auctionBidPeriod"]
        );
        const item = {
          id: auctionItemid,
          price: ethers.utils.formatEther(
            gettingAuctionItem["startPrice"]._hex
          ),
          collectionId: parseInt(gettingAuctionItem["collectionId"]._hex, 16),
          seller: gettingAuctionItem["seller"],
          buyer: gettingAuctionItem["highestBidder"],
          creator: gettingAuctionItem["creator"],
          contract: gettingAuctionItem["nftContract"],
          state: gettingAuctionItem["state"],
          tokenId: tokenId,
          metadata: metadata,
          now: Date.now(),
          type: "auction",
          duration: restTime,
          highestBid: ethers.utils.formatEther(
            gettingAuctionItem["highestBid"]._hex
          ),
        };
        auctionItems.push(item);
      }
      // }
      const fixedItem = fixedItems.filter((item, index) => {
        return item.collectionId === Number(collection_id);
      });
      const auctionItem = auctionItems.filter((item, index) => {
        return item.collectionId === Number(collection_id);
      });
      if (fixedItem.length > 0) {
        setListedItems(fixedItem);
      }
      if (auctionItem.length > 0) {
        setTimedItems(auctionItem);
      }
      console.log(auctionItem, fixedItem);
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
      collections.push(results[index]);
    }
    console.log(collections, "collections");
    setCollections(collections);
  };

  const calcAuctionPeriod = (_startTime, _duration) => {
    const endTime = Number(_startTime) + Number(_duration);
    const now = convertStandardTimeToUnix(Date.now());
    const restTime = endTime - now;
    return restTime;
  };

  const convertStandardTimeToUnix = (_date) => {
    const unixTime = Moment(_date).unix();
    return unixTime;
  };

  const getMetaByTokenId = (_nfts, _tokenId) => {
    console.log(_nfts, _tokenId);
    const nft = _nfts.filter((value, index) => {
      return Number(value.token_id) == _tokenId;
    });
    if (nft.length > 0) {
      return JSON.parse(nft[0].metadata);
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
    let auctionItems = await connectedContract.getAuctionItemSoldOut();
    let itemList = [];
    soldOutItems.forEach((item, index) => {
      let nft = {
        id: parseInt(item["id"], 16),
        contract: item.nftContract,
        tokenId: parseInt(item["tokenId"], 16),
      };
      itemList.push(nft);
    });
    auctionItems.forEach((item, index) => {
      let nft = {
        id: parseInt(item["id"], 16),
        contract: item.nftContract,
        tokenId: parseInt(item["tokenId"], 16),
        type: "auction",
      };
      itemList.push(nft);
    });
    if (itemList.length > 0) {
      setSecItems(itemList);
    }
  };

  const checkItemForSecondarySale = (_tokenId) => {
    let itemId = 0;
    secItems.forEach((item, index) => {
      if (item.tokenId == Number(_tokenId)) {
        itemId = item.id;
      }
    });
    return itemId;
  };

  const buyForFirstSale = async () => {
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
    const price = ethers.utils.parseUnits(curItem.price.toString(), "ether");
    const result = checkItemForSecondarySale(curItem.tokenId);
    if (result > 0) {
      let buying_sec = await marketContract.createMarketSecondarySale(
        NFTAddress,
        curItem.id,
        {
          value: price,
        }
      );
      await buying_sec.wait();
      loadNFTItems();
      toastr.success("You bought an NFT Successfully !");
    } else {
      let buying = await marketContract.createMarketSale(
        NFTAddress,
        curItem.id,
        {
          value: price,
        }
      );
      await buying.wait();
      loadNFTItems();
      toastr.success("You bought an NFT Successfully !");
    }
  };

  const placeBid = async () => {
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

    const checkPrice =
      curAuctionItem.highestBid > 0
        ? curAuctionItem.highestBid
        : curAuctionItem.price;
    if (Number(curBidAmount) < (checkPrice * 1.5).toFixed(5)) {
      toastr.error(
        `Auction Bid amount must be equal or greater than ${curAuctionItem.price *
        1.5} ETH`
      );
    } else {
      const bidAmount = ethers.utils.parseUnits(curBidAmount, "ether");
      let bidding = await marketContract.placeBid(curAuctionItem.id, {
        value: bidAmount,
      });
      await bidding.wait();
      loadNFTItems();
      toastr.success("Place your Bidding successfully!");
    }
  };

  const cancelBid = async () => {
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
    try {
      let cancelling = await marketContract.cancelAuction(curAuctionItem.id);
      await cancelling.wait();
      toastr.success("Cancel your Auction successfully!");
      loadNFTItems();
    } catch (err) {
      toastr.error("The Auction has already started by others!");
    }
  };

  const claimNFT = async () => {
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
    const result = checkItemForSecondarySale(curAuctionItem.tokenId);
    if (result > 0) {
      try {
        let claiming = await marketContract.claimNFTForSecondarySale(
          curAuctionItem.id
        );
        await claiming.wait();
        toastr.success("Claimed your NFT successfully!");
        loadNFTItems();
      } catch (err) {
        toastr.error("Transfer Caller is not an owner nor approved.");
      }
    } else {
      try {
        let claiming = await marketContract.claimNFT(curAuctionItem.id);
        await claiming.wait();
        toastr.success("Claimed your NFT successfully!");
        loadNFTItems();
      } catch (err) {
        toastr.error("Transfer Caller is not an owner nor approved.");
      }
    }
  };

  if (marketId) return <Redirect to={{ pathname: '/item-detail', id: marketId }} />

  return (
    <div>
      <div className="hero_marketplace bg_white">
        <div className="container">
          <h1 className="text-center">Collection Name</h1>
          <h4 className="text-center">Created by 0x5bB28...EBCe171</h4>
        </div>
      </div>
      {/* <div className="bg_white border-b py-20">
        <div className="container">
          <div className="d-flex justify-content-center">
            <ul className="menu_categories space-x-20">
              <li>
                <a href="#" className="color_brand">
                  <span> All </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-gamepad-line"></i> <span> Games </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-brush-line"></i> <span> Art </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-stock-line"></i> <span> Trading Cards </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-music-line"></i> <span> Music </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-global-line"></i> <span> Domain Names </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-emotion-laugh-line"></i> <span> Memes </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-layout-4-line"></i>{" "}
                  <span> Collectibles </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="section mt-100">
          <div className="section__head">
            <div className="row justify-content-between align-items-center">
              {/* <div className="col-lg-auto">
                <div className="d-flex space-x-10 align-items-center">
                  <span
                    className="color_text txt_sm"
                    style={{ minWidth: "max-content" }}
                  >
                    FILTER BY:
                  </span>
                  <ul className="menu_categories space-x-20">
                    <li className="d-flex space-x-10 switch_item">
                      <input
                        type="checkbox"
                        id="switch1"
                        onChange={() => this.checkedhandleChange()}
                      />
                      <label htmlFor="switch1">Toggle</label>
                      <span> Has list price </span>
                    </li>
                    <li className="d-flex space-x-10 switch_item">
                      <input
                        type="checkbox"
                        id="switch2"
                        onChange={() => this.checkedhandleChange()}
                        checked
                      />
                      <label htmlFor="switch2">Toggle</label>
                      <span> Has open offer </span>
                    </li>
                    <li className="d-flex space-x-10 switch_item">
                      <input
                        type="checkbox"
                        id="switch3"
                        onChange={() => this.checkedhandleChange()}
                      />
                      <label htmlFor="switch3">Toggle</label>
                      <span> Owned by creator </span>
                    </li>
                    <li className="d-flex space-x-10 switch_item">
                      <input
                        type="checkbox"
                        id="switch4"
                        onChange={() => this.checkedhandleChange()}
                      />
                      <label htmlFor="switch4">Toggle</label>
                      <span> Has sold </span>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className="col-lg-auto">
                <div className="d-flex space-x-10 align-items-center">
                  <span
                    className="color_text txt_sm"
                    style={{ minWidth: "max-content" }}
                  >
                    1,234 items
                  </span>
                </div>
              </div>
              <div className="col-lg-auto">
                <div className="d-flex space-x-10 align-items-center sm:mt-20">
                  <span className="color_text txt_sm"> SORT BY: </span>
                  <div className="dropdown">
                    <button
                      className="btn btn-dark btn-sm dropdown-toggle"
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
              </div>
            </div>
          </div>

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
                  <h3 className="text-center">
                    Your Bidding Successfuly Added
                  </h3>
                  <p className="text-center">
                    your bid{" "}
                    <span
                      className="color_text txt
                                                    _bold"
                    >
                      (16ETH){" "}
                    </span>{" "}
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
                  <h3>Place a Bid</h3>
                  <p>
                    You must bid at least{" "}
                    <span className="color_black">
                      {curAuctionItem.highestBid > 0
                        ? (curAuctionItem.highestBid * 1.5).toFixed(5)
                        : curAuctionItem.price * 1.5}{" "}
                      ETH
                    </span>
                  </p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="00.00 ETH"
                    value={curBidAmount}
                    onChange={(e) => setCurBidAmount(e.target.value)}
                  />

                  <p>
                    NFT quantity.{" "}
                    <span className="color_green">1 available</span>
                  </p>
                  <input
                    type="text"
                    className="form-control"
                    value="1"
                    readOnly
                  />
                  <div className="hr"></div>

                  <div className="d-flex justify-content-between">
                    <p> service fee:</p>
                    <p className="text-right color_black txt _bold"> 15%</p>
                  </div>

                  <a
                    href="#"
                    className="btn btn-primary w-full"
                    onClick={() => placeBid()}
                  >
                    {" "}
                    Place a bid
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade popup"
            id="popup_cancelbid"
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
                  <h3>Cancel Auction</h3>
                  <p>
                    Your starting price is{" "}
                    <span className="color_black">
                      {curAuctionItem.price} ETH
                    </span>
                  </p>

                  <p>
                    NFT quantity.{" "}
                    <span className="color_green">1 available</span>
                  </p>
                  <input
                    type="text"
                    className="form-control"
                    value="1"
                    readOnly
                  />
                  <div className="hr"></div>

                  <a
                    href="#"
                    className="btn btn-primary w-full"
                    onClick={() => cancelBid()}
                  >
                    {" "}
                    Cancel Auction
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade popup"
            id="popup_buy"
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
                  <h3>Buy Now</h3>
                  <p>
                    <span className="color_black">Price (Ether)</span>
                  </p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="00.00 ETH"
                    value={curItem.price}
                    readOnly
                  />

                  <p>
                    Enter quantity.{" "}
                    <span className="color_green">1 available</span>
                  </p>
                  <input
                    type="text"
                    className="form-control"
                    value="1"
                    readOnly
                  />
                  <div className="hr"></div>
                  <div className="d-flex justify-content-between">
                    <p> service free:</p>
                    <p className="text-right color_black txt _bold">
                      {" "}
                      {curItem.price * 0.15} ETH{" "}
                    </p>
                  </div>
                  <a
                    href=""
                    className="btn btn-primary w-full"
                    data-toggle="modal"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {
                      buyForFirstSale();
                    }}
                  >
                    {" "}
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade popup"
            id="popup_claim"
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
                  <h3>Claim an NFT!</h3>
                  <p>
                    Your bidding price was{" "}
                    <span className="color_black">
                      {curAuctionItem.highestBid} ETH
                    </span>
                  </p>

                  <p>
                    NFT quantity.{" "}
                    <span className="color_green">1 available</span>
                  </p>
                  <input
                    type="text"
                    className="form-control"
                    value="1"
                    readOnly
                  />
                  <div className="hr"></div>

                  <a
                    href="#"
                    className="btn btn-primary w-full"
                    onClick={() => claimNFT()}
                  >
                    {" "}
                    Claim an NFT
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade popup"
            id="popup_history"
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
                  <h4> History </h4>
                  <div className="creator_item creator_card space-x-10">
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
                        <p className="color_black">
                          Bid accepted{" "}
                          <span className="color_brand">1 ETH</span> by{" "}
                          <a
                            className="color_black txt
                                                                _bold"
                            href="/profile"
                          >
                            ayoub
                          </a>
                        </p>
                        <span className="date color_text">
                          28/06/2021, 12:08
                        </span>
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
                          <img
                            src="assets/img/avatars/avatar_2.png"
                            alt="Avatar"
                            className="avatar avatar-md"
                          />
                        </a>
                      </div>
                      <div>
                        <p className="color_black">
                          Bid accepted{" "}
                          <span className="color_brand">3 ETH</span> by{" "}
                          <a
                            className="color_black txt
                                                                _bold"
                            href="/profile"
                          >
                            monir
                          </a>
                        </p>
                        <span className="date color_text">
                          22/05/2021, 12:08
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-30_reset">
            {listedItems.length > 0 &&
              listedItems.map((item, index) => (
                <div
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  key={index}
                >
                  <div className="card__item four">
                    <div className="card_body space-y-10">
                      {/* <div className="creators space-x-10">
                        <div className="avatars space-x-3">
                          <a href="/profile">
                            <img
                              src={"assets/img/avatars/avatar_1.png"}
                              alt="Avatar"
                              className="avatar avatar-sm"
                            />
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
                              className="avatar avatar-sm"
                            />
                          </a>
                          <a href="/profile">
                            <p className="avatars_name txt_xs">
                              @danil_pannini
                            </p>
                          </a>
                        </div>
                      </div> */}
                      <div className="card_head">
                        <a href="#" onClick={() => setMarketId(item.id)}>
                          <img
                            src={
                              item.metadata !== undefined
                                ? item.metadata.image
                                : "assets/img/items/cover_1.png"
                            }
                            alt=""
                          />
                        </a>

                        {/* <a href="#" className="likes space-x-3">
                          <i className="ri-heart-3-fill"></i>
                          <span className="txt_sm">1.2k</span>
                        </a> */}
                      </div>

                      <h6 className="card_title">
                        {item.metadata !== undefined
                          ? item.metadata.name
                          : "NFT Name"}
                      </h6>
                      <div className="card_footer d-block space-y-10">
                        <div className="card_footer justify-content-between">
                          <div className="creators">
                            <p className="txt_sm"> 1 in stock</p>
                          </div>
                          <a href="#" className="">
                            <p className="txt_sm">
                              Price:{" "}
                              <span
                                className="color_green
                                                                txt_sm"
                              >
                                {item.price} ETH
                              </span>
                            </p>
                          </a>
                        </div>
                        <div className="hr"></div>
                        <div
                          className="d-flex align-items-center space-x-10
                                                    justify-content-between"
                        >
                          <div
                            className="d-flex align-items-center
                                                        space-x-10"
                          >
                            <i className="ri-history-line"></i>
                            <a
                              className="view_history"
                              href="#"
                              data-toggle="modal"
                              data-target="#popup_history"
                            >
                              <p
                                className="color_text txt_sm"
                                style={{ width: "auto" }}
                              >
                                View History
                              </p>
                            </a>
                          </div>

                          {item.seller.toLowerCase() !== auth.toLowerCase() && (
                            <a
                              className="btn btn-sm btn-primary"
                              href="#"
                              data-toggle="modal"
                              data-target="#popup_buy"
                              onClick={() => setCurItem(item)}
                            >
                              Buy
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {timedItems.length > 0 &&
              timedItems.map((item, index) => (
                <div
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  key={index}
                >
                  <div className="card__item two">
                    <div className="card_body space-y-10">
                      <div className="card_head">
                        <a href="#" onClick={() => setMarketId(item.id)}>
                          <img
                            src={
                              item.metadata !== undefined
                                ? item.metadata.image
                                : "assets/img/items/cover_1.png"
                            }
                            alt="NFT image"
                          />
                        </a>
                        <div className="block_timer">
                          <Countdown
                            date={item.now + item.duration * 1000}
                            renderer={renderer}
                          />
                        </div>
                        <div className="details d-flex justify-content-between"></div>
                      </div>

                      <h6 className="card_title">
                        <a className="color_black" href="/item-detail">
                          {item.metadata !== undefined
                            ? item.metadata.name
                            : "NFT Name"}
                        </a>
                        {item.seller.toLowerCase() !== auth.toLowerCase() &&
                          item.duration > 0 && (
                            <a
                              style={{ fontSize: '15px' }}
                              className="btn btn-sm btn-primary"
                              href="#"
                              data-toggle="modal"
                              data-target="#popup_bid"
                              onClick={() => setCurAuctionItem(item)}
                            >
                              Place Bid
                            </a>
                          )}
                        {item.seller.toLowerCase() !== auth.toLowerCase() &&
                          item.duration <= 0 &&
                          item.buyer.toLowerCase() === auth.toLowerCase() && (
                            <a
                              style={{ fontSize: '15px' }}
                              className="btn btn-sm btn-grad"
                              href="#"
                              data-toggle="modal"
                              data-target="#popup_claim"
                              onClick={() => setCurAuctionItem(item)}
                            >
                              Claim an NFT
                            </a>
                          )}

                        {item.seller.toLowerCase() === auth.toLowerCase() && (
                          <a
                            style={{ fontSize: '15px' }}
                            className="btn btn-sm btn-warning"
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_cancelbid"
                            onClick={() => setCurAuctionItem(item)}
                          >
                            Cancel Auction
                          </a>
                        )}
                      </h6>
                      <div className="hr"></div>
                      <div className="card_footer justify-content-end">
                        {/* <a
                          href="/profile"
                          className="creators
                                                        space-x-10"
                        >
                          <div className="avatars -space-x-20">
                            <img
                              src="assets/img/avatars/avatar_1.png"
                              alt="Avatar"
                              className="avatar
                                                                avatar-sm"
                            />
                            <img
                              src="assets/img/avatars/avatar_2.png"
                              alt="Avatar"
                              className="avatar
                                                                avatar-sm"
                            />
                          </div>
                          <p className="avatars_name txt_sm">Kelman </p>
                        </a> */}
                        <a href="#" className="space-x-3">
                          <p className="color_green txt_sm">
                            {item.highestBid > 0 ? item.highestBid : item.price}{" "}
                            ETH
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {(listedItems.length === 0 && timedItems.length === 0) && <div>There is no any item yet.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
