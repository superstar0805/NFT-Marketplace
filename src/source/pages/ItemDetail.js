import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import Moment from "moment";
import {
  withRouter,
  Link,
  Redirect,
  useParams,
  useLocation,
} from "react-router-dom";
import { connect } from "react-redux";
import { NFTmarketplaceAddress, NFTAddress } from "../contract/address";
import MarketAbi from "../contract/abi/MarketAbi.json";
import MintAbi from "../contract/abi/MintAbi.json";
import Countdown from "react-countdown";
import { dispatch_headerTitle } from "../actions/dispatch_headerTitle";
import toastr from "toastr";

const http = axios.create({
  baseURL: "https://deep-index.moralis.io/api/v2",
  headers: {
    "Content-Type": "application/json",
    "X-API-Key":
      "99WFXV4PbRwf0CWzyuKo3s6yfJhAhEhkA6b1Gzs2YRjAFTeGVV7KjRJ4z3a8EIdp",
  },
});

function ItemDetail(id) {
  // let { id } = useParams();
  const location = useLocation();
  console.log("=============== Item detail id ===============", location.id);
  const [auth, setAuth] = useState("");
  const [listedItems, setListedItems] = useState([]);
  const [timedItems, setTimedItems] = useState([]);
  const [curItem, setCurItem] = useState({});
  const [curBidAmount, setCurBidAmount] = useState("");
  const [secItems, setSecItems] = useState([]);

  useEffect(() => {
    // getSoldOutItems();
    loadNFTItems();
  }, []);

  const loadNFTItems = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setAuth(accounts[0].toLowerCase());
    const rawData = await http.get(
      `/${accounts[0]}/nft?chain=rinkeby&format=decimal`
    );
    const nfts = rawData.data.result;
    // const nfts = [
    //   {
    //     "token_address": "0xf1e3311707f3ba3997805080b0899174c0829ee8",
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
    //     "token_address": "0xf1e3311707f3ba3997805080b0899174c0829ee8",
    //     "token_id": "4",
    //     "owner_of": "0x93735f8715a31e9a3be03a94d77894bcd7110d93",
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
    //     "token_address": "0xf1e3311707f3ba3997805080b0899174c0829ee8",
    //     "token_id": "15",
    //     "owner_of": "0x93735f8715a31e9a3be03a94d77894bcd7110d93",
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
    //     "token_address": "0xf1e3311707f3ba3997805080b0899174c0829ee8",
    //     "token_id": "13",
    //     "owner_of": "0x93735f8715a31e9a3be03a94d77894bcd7110d93",
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
    //     "token_address": "0xf1e3311707f3ba3997805080b0899174c0829ee8",
    //     "token_id": "10",
    //     "owner_of": "0x93735f8715a31e9a3be03a94d77894bcd7110d93",
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
    //     "token_address": "0xf1e3311707f3ba3997805080b0899174c0829ee8",
    //     "token_id": "1",
    //     "owner_of": "0x93735f8715a31e9a3be03a94d77894bcd7110d93",
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
    // const rawData = await http.get(
    //   `/${NFTmarketplaceAddress}/nft?chain=rinkeby&format=decimal`
    // );
    // const nfts = rawData.data.result;
    console.log(nfts);

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(
      NFTmarketplaceAddress,
      MarketAbi,
      signer
    );

    if (nfts.length > 0 && location.id) {
      console.log("location.id", location.id);
      const gettingItem = await connectedContract.marketItems(location.id);
      const gettingAuctionItem = await connectedContract.auctionItems(location.id);
      const fixedItemid = Number(ethers.utils.formatEther(gettingItem["id"]._hex)) * 1e18;
      const fixedTokenId = Number(ethers.utils.formatEther(gettingItem["tokenId"]._hex)) * 1e18;
      const auctionItemid = Number(ethers.utils.formatEther(gettingAuctionItem["id"]._hex)) * 1e18;
      const auctionTokenId = Number(ethers.utils.formatEther(gettingAuctionItem["tokenId"]._hex)) * 1e18;
      let item;
      console.log("getItem", gettingItem);
      if (fixedItemid > 0) {
        let metadata = await getMetaByTokenId(
          nfts,
          fixedTokenId
        );
        item = {
          id: fixedItemid,
          price: ethers.utils.formatEther(gettingItem["price"]._hex),
          seller: gettingItem["seller"].toLowerCase(),
          buyer: gettingItem["buyer"],
          creator: gettingItem["creator"],
          contract: gettingItem["nftContract"],
          state: gettingItem["state"],
          tokenId: fixedTokenId,
          metadata: metadata,
          type: "fixed",
          duration: 0,
        };
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
        item = {
          id: auctionItemid,
          price: ethers.utils.formatEther(
            gettingAuctionItem["startPrice"]._hex
          ),
          seller: gettingAuctionItem["seller"].toLowerCase(),
          buyer: gettingAuctionItem["highestBidder"].toLowerCase(),
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
      }
      console.log("item", item);
      setCurItem(item);

    }
  };

  const getSoldOutItems = async () => {
    // get current wallet address
    const { ethereum } = window;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setAuth(accounts[0].toLowerCase());

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
      console.log(itemList);
      setSecItems(itemList);
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
    const result = checkItemForSecondarySale(curItem.tokenId);
    console.log(result);
    if (result > 0) {
      try {
        let claiming = await marketContract.claimNFTForSecondarySale(
          curItem.id
        );
        await claiming.wait();
        toastr.success("Claimed your NFT successfully!");
        window.location.href = '/marketplace';
      } catch (err) {
        toastr.error("Transfer Caller is not an owner nor approved.");
      }
    } else {
      try {
        let claiming = await marketContract.claimNFT(curItem.id);
        await claiming.wait();
        toastr.success("Claimed your NFT successfully!");
        window.location.href = '/marketplace';
      } catch (err) {
        toastr.error("Transfer Caller is not an owner nor approved.");
      }
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
      curItem.highestBid > 0
        ? curItem.highestBid
        : curItem.price;
    if (Number(curBidAmount) < (checkPrice * 1.5).toFixed(5)) {
      toastr.error(
        `Auction Bid amount must be equal or greater than ${curItem.price *
        1.5} ETH`
      );
    } else {
      const bidAmount = ethers.utils.parseUnits(curBidAmount, "ether");
      try {
        let bidding = await marketContract.placeBid(curItem.id, {
          value: bidAmount,
        });
        await bidding.wait();
        loadNFTItems();
        toastr.success("Place your Bidding successfully!");
      } catch (err) {
        toastr.error('The period of Auction has already passed!');
      }

    }
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
    console.log(result);
    if (result > 0) {
      let buying_sec = await marketContract.createMarketSecondarySale(
        NFTAddress,
        curItem.id,
        {
          value: price,
        }
      );
      await buying_sec.wait();
      toastr.success("You bought an NFT Successfully !");
      window.location.href = '/marketplace';
    } else {
      let buying = await marketContract.createMarketSale(
        NFTAddress,
        curItem.id,
        {
          value: price,
        }
      );
      await buying.wait();
      toastr.success("You bought an NFT Successfully !");
      window.location.href = '/marketplace';
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
      let cancelling = await marketContract.cancelAuction(curItem.id);
      await cancelling.wait();
      toastr.success("Cancel your Auction successfully!");
      window.location.href = '/marketplace';
    } catch (err) {
      toastr.error("The Auction has already started by others!");
    }
  };

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
                  {curItem.highestBid} ETH
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
                Your starting price was{" "}
                <span className="color_black">
                  {curItem.price} ETH
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
                  {curItem.highestBid > 0
                    ? (curItem.highestBid * 1.5).toFixed(5)
                    : curItem.price * 1.5}{" "}
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
        id="popup_report"
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
              <h3>Report this item</h3>
              <div className="hr"></div>
              <div className="form-group space-y-10">
                <span className="variationInput">reason:</span>
                <select
                  className="form-select custom-select"
                  aria-label="Default select example"
                >
                  <option> Select a reason</option>
                  <option>Purchase</option>
                  <option>Support</option>
                  <option>Technique</option>
                  <option>Service Request</option>
                </select>
              </div>
              <div className="form-group space-y-10">
                <span className="variationInput">Additional comments:</span>
                <textarea
                  name="..."
                  cols="30"
                  rows="10"
                  placeholder="Explain why you are concerned about it."
                ></textarea>
              </div>
              <a href="" className="btn btn-dark">
                {" "}
                Report
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <a href="/marketplace" className="btn btn-white btn-sm my-40">
          Back to Marketplace
        </a>
        <div className="item_details">
          {curItem && (
            <div className="row sm:space-y-20">
              <div className="col-lg-6">
                <img
                  className="item_img"
                  src={
                    curItem.metadata
                      ? curItem.metadata.image
                      : "assets/img/items/item_2.png"
                  }
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div className="space-y-20">
                  <h3>
                    {curItem.metadata ? curItem.metadata.name : "NFT Name"}
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="space-x-10 d-flex align-items-center">
                      <p>1 of 1</p>
                      <a href="#" className="likes space-x-3">
                        <i className="ri-heart-3-fill"></i>
                        <span className="txt_sm">2.1k</span>
                      </a>
                    </div>
                    <div className="space-x-10 d-flex align-items-center">
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
                              <a href="">
                                {" "}
                                <i className="ri-facebook-line"></i>
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a href="">
                                {" "}
                                <i className="ri-messenger-line"></i>
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a href="">
                                {" "}
                                <i className="ri-whatsapp-line"></i>
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a href="">
                                {" "}
                                <i className="ri-youtube-line"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
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
                                data-toggle="modal"
                                data-target="#popup_report"
                              >
                                <i className="ri-flag-line"></i>
                                <span> Report</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn btn-white btn-sm
                                            dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      View proof of authenticity
                    </button>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item"
                        href="https://ipfs.io/"
                        target="_blank"
                      >
                        <span>
                          <img
                            src="assets/img/icons/ipfs.svg"
                            width="20"
                            alt=""
                            style={{ marginRight: "5px" }}
                          />
                          View on IPFS
                        </span>
                        <i className="ri-external-link-line color_brand"></i>
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://etherscan.io/"
                        target="_blank"
                      >
                        <span>
                          <img
                            src="assets/img/icons/ether.png"
                            width="20"
                            alt=""
                            style={{ marginRight: "5px" }}
                          />
                          View on Etherscan
                        </span>
                        <i className="ri-external-link-line color_brand"></i>
                      </a>
                    </div>
                  </div>
                  <div className="box">
                    <div className="space-y-20">
                      <div
                        className="d-flex justify-content-between
                                                mb-30_reset"
                      >
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
                              Details
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="btn btn-white btn-sm"
                              data-toggle="tab"
                              href="#tabs-2"
                              role="tab"
                            >
                              Bids
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="btn btn-white btn-sm"
                              data-toggle="tab"
                              href="#tabs-3"
                              role="tab"
                            >
                              History
                            </a>
                          </li>
                        </ul>

                        <div className="dropdown d-none d-sm-block">
                          <button
                            className="btn btn-white btn-sm
                                                        dropdown-toggle"
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
                      <div className="hr"></div>
                      <div className="tab-content">
                        <div
                          className="tab-pane active"
                          id="tabs-1"
                          role="tabpanel"
                        >
                          <p>
                            {curItem.metadata ? curItem.metadata.description : "NFT Description"}
                          </p>
                        </div>
                        <div className="tab-pane" id="tabs-2" role="tabpanel">
                          <p>No active bids yet. Be the first to make a bid!</p>
                        </div>
                        <div
                          className="tab-pane space-y-20"
                          id="tabs-3"
                          role="tabpanel"
                        >
                          <div
                            className="creator_item creator_card
                                                        space-x-10"
                          >
                            <div className="avatars space-x-10">
                              <div className="media">
                                <div className="badge">
                                  <img
                                    src="assets/img/icons/Badge.svg"
                                    alt=""
                                  />
                                </div>
                                <a href="/profile">
                                  <img
                                    src="assets/img/avatars/avatar_1.png"
                                    alt="Avatar"
                                    className="avatar
                                                                        avatar-md"
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
                          <div
                            className="creator_item creator_card
                                                        space-x-10"
                          >
                            <div className="avatars space-x-10">
                              <div className="media">
                                <div className="badge">
                                  <img
                                    src="assets/img/icons/Badge.svg"
                                    alt=""
                                  />
                                </div>
                                <a href="/profile">
                                  <img
                                    src="assets/img/avatars/avatar_2.png"
                                    alt="Avatar"
                                    className="avatar
                                                                        avatar-md"
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
                  <div className="numbers">
                    {curItem.type == "auction" ? (
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="space-y-5">
                            <p className="color_text">Minimum bid</p>
                            <h4>
                              {Number(curItem.highestBid) > 0
                                ? Number(curItem.highestBid)
                                : curItem.price}{" "}
                              <span className="txt_sm color_text">ETH</span>
                            </h4>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="space-y-5">
                            <p className="color_text">countdown</p>
                            <Countdown
                              date={curItem.now + curItem.duration * 1000}
                              renderer={renderer}
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="space-y-5">
                            <p className="color_text">Price</p>
                            <h4>
                              {curItem.price}{" "}
                              <span className="txt_sm color_text">ETH</span>
                            </h4>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="hr2"></div>
                  <div className="creators">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="avatars space-x-5">
                          <div className="media">
                            <a href="/profile">
                              <img
                                src="assets/img/avatars/avatar_3.png"
                                alt="Avatar"
                                className="avatar
                                                                avatar-sm"
                              />
                            </a>
                          </div>
                          <div>
                            <a href="/profile">
                              <p className="avatars_name color_black">
                                {curItem.creator}
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {curItem.seller !== auth && (
                    <div className="d-flex space-x-20">
                      {curItem.type == "auction" && curItem.duration > 0 && (
                        <a
                          href=""
                          className="btn btn-grad btn-lg"
                          data-toggle="modal"
                          data-target="#popup_bid"
                        >
                          Place bid
                        </a>
                      )}
                      {curItem.type == "auction" && curItem.duration <= 0 && curItem.buyer == auth && (
                        <a
                          href=""
                          className="btn btn-grad btn-lg"
                          data-toggle="modal"
                          data-target="#popup_claim"
                        >
                          Claim an NFT
                        </a>
                      )}
                      {curItem.type == "fixed" && (
                        <a
                          href=""
                          className="btn btn-primary btn-lg"
                          data-toggle="modal"
                          data-target="#popup_buy"
                        >
                          Buy Now
                        </a>
                      )}
                    </div>
                  )}
                  {console.log(curItem.seller, auth)}
                  {curItem.seller === auth && curItem.type == "auction" && (
                    <div className="d-flex space-x-20">
                      <a
                        href=""
                        className="btn btn-grad btn-lg"
                        data-toggle="modal"
                        data-target="#popup_cancelbid"
                      >
                        Cancel Auction
                      </a>
                    </div>
                  )}

                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
