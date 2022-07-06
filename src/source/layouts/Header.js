import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { ListItem } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { ethers } from "ethers";
import logo from "../assets/img/logo.png";
import coin_image from "../assets/img/coin.svg";

import Footer from "./Footer";

function shortenAddress(address, chars = 4) {
	return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

function Header({ children }) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [balance, setBalance] = useState('');
	const [auth, setAuth] = useState('');

	const connectWallet = async () => {
		const { ethereum } = window;

		if (ethereum) {

			// A Web3Provider wraps a standard Web3 provider, which is
			// what MetaMask injects as window.ethereum into each page
			const provider = new ethers.providers.Web3Provider(ethereum);

			// MetaMask requires requesting permission to connect users accounts
			await provider.send("eth_requestAccounts", []);

			// The MetaMask plugin also allows signing transactions to
			// send ether and pay to change state within the blockchain.
			// For this, you need the account signer...
			const signer = provider.getSigner();
			const balance = await signer.getBalance();
			const ethBalance = ethers.utils.formatEther(balance.toString());
			setBalance(ethBalance.slice(0, 4));

			const address = await signer.getAddress();
			setAuth(ethers.utils.getAddress(address));

			setIsAuthenticated(true);

		} else {
			alert("Make sure you have metamask!");
			return;
		}
	};

	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window;

		if (!ethereum) {
			alert("Make sure you have metamask!");
			return;
		} else {
			connectWallet();
			console.log("We have the ethereum object", ethereum);
		}
	}

	return (
		<div>
			<div className="">
				{!isAuthenticated ?
					<header className="header__1 js-header">
						<div className="container">
							<div className="wrapper js-header-wrapper">
								<div className="">
									<a href="/">
										<img className="" id="" width="100" height="95" src={logo} alt="logo" />
									</a>
								</div>
								<div className="mode_switcher space-x-10">
									<a href="#" className="light d-flex align-items-center is_active">
										<i className="ri-sun-fill"></i> Light
									</a>
									<a href="#" className="dark d-flex align-items-center text-muted">
										<i className="ri-moon-fill"></i> Dark
									</a>
								</div>
								<div className="header__menu">
									<ul className="d-flex space-x-20">
										<li>
											<a href="/" className="text-center d-flex">
												<div>
													<i style={{ backgroundColor: "#43cd34" }} className="nav-icon ri-home-5-line nav_icon"></i>
													<br />
													<span className="text-muted text-sm"> Home </span>
												</div>
											</a>
										</li>
										<li>
											<a href="/marketplace" className="text-center d-flex">
												<div>
													<i style={{ backgroundColor: "#1222b8" }} className="nav-icon ri-store-line nav_icon"></i>
													<br />
													<span className="text-muted text-sm"> Marketplace </span>
												</div>
											</a>
										</li>
										<li>
											<a href="/upload" className="text-center d-flex">
												<div>
													<i style={{ backgroundColor: "#bc98aa" }} className="nav-icon ri-lightbulb-line nav_icon"></i>
													<br />
													<span className="text-muted text-sm"> Upload </span>
												</div>
											</a>
										</li>
										<li>
											<a href="/profile" className="text-center d-flex">
												<div>
													<i style={{ backgroundColor: "#efe543" }} className="nav-icon ri-article-line nav_icon"></i>
													<br />
													<span className="text-muted text-sm"> Profile </span>
												</div>
											</a>
										</li>
										<li>
											<a href="/collections" className="text-center d-flex">
												<div>
													<i style={{ backgroundColor: "#ee3232" }} className="nav-icon ri-briefcase-line nav_icon"></i>
													<br />
													<span className="text-muted text-sm"> Collections </span>
												</div>
											</a>
										</li>
									</ul>
								</div>

								<div className="header__search">

									<input type="text" placeholder="Search" />
									<button className="header__result">
										<i className="ri-search-line"></i>
									</button>
								</div>
								<div className="header__btns">
									<a className="btn btn-grad btn-sm" href="/connect-wallet" style={{ marginRight: '5px' }}>
										<i className="ri-wallet-3-line" style={{ marginRight: '4px' }}></i>
										Connect wallet</a>
									<a id="connectbtn" onClick={() => connectWallet()}>
										<img width="45" src="assets/img/icons/metamask.svg" alt="" />
									</a>
								</div>
								<div className="header__burger js-header-burger"></div>

								<div className="header__mobile js-header-mobile">
									<div className="header__mobile__menu space-y-40">
										<ul className="d-flex space-y-20">
											<li> <a className="color_black" href=""> Home</a> </li>
											<li> <a className="color_black" href="/marketplace"> Marketplace</a> </li>
											<li>
												<a className="color_black" href=""> MetaVerse Training</a>
											</li>
											<li> <a className="color_black" href="/collections"> Collections</a> </li>
											<li> <a className="color_black" href="/profile"> Profile</a> </li>
										</ul>
										<div className="space-y-20">
											<div className="header__search in_mobile w-full">
												<input type="text" placeholder="Search" />
												<button className="header__result">
													<i className="ri-search-line"></i>
												</button>
											</div>
											<a className="btn btn-light btn-sm wallet-address" href="/connect-wallet">Connect Wallet</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</header>
					:
					<header className="header__1 js-header">
						<div className="container">
							<div className="wrapper js-header-wrapper space-x-10">
								<div className="">
									<a href="/">
										<img className="" id="" width="100" height="95" src={logo} alt="logo" />
									</a>
								</div>
								<div className="mode_switcher space-x-10">
									<a href="#" className="light d-flex align-items-center is_active btn-light-mode">
										<i className="ri-sun-fill"></i> Light
									</a>
									<a href="#" className="dark d-flex align-items-center text-muted btn-dark-mode">
										<i className="ri-moon-fill"></i> Dark
									</a>
								</div>

								<div className="header__menu">

									<ul className="d-flex space-x-20">
										<li>
											<a href="/" className="text-center d-flex">
												<div>
													<i style={{ backgroundColor: "#43cd34" }} className="nav-icon ri-home-5-line nav_icon"></i>
													<br />
													<span className="text-muted text-sm"> Home </span>
												</div>
											</a>
										</li>
										<li>
											<a href="/marketplace" className="text-center d-flex">
												<div>
													<i style={{ backgroundColor: "#1222b8" }} className="nav-icon ri-store-line nav_icon"></i>
													<br />
													<span className="text-muted text-sm"> Marketplace </span>
												</div>
											</a>
										</li>
										<li>
											<a href="/upload" className="text-center d-flex">
												<div>
													<i style={{ backgroundColor: "#bc98aa" }} className="nav-icon ri-lightbulb-line nav_icon"></i>
													<br />
													<span className="text-muted text-sm"> Upload </span>
												</div>
											</a>
										</li>
										<li>
											<a href="/profile" className="text-center d-flex">
												<div>
													<i style={{ backgroundColor: "#efe543" }} className="nav-icon ri-article-line nav_icon"></i>
													<br />
													<span className="text-muted text-sm"> Profile </span>
												</div>
											</a>
										</li>
										<li>
											<a href="/collections" className="text-center d-flex">
												<div>
													<i style={{ backgroundColor: "#ee3232" }} className="nav-icon ri-briefcase-line nav_icon"></i>
													<br />
													<span className="text-muted text-sm"> Collections </span>
												</div>
											</a>
										</li>
									</ul>
								</div>

								<div className="header__search">
									<input type="text" placeholder="Search" />
									<button className="header__result">
										<i className="ri-search-line"></i>
									</button>
								</div>
								<div className="d-flex align-items-center space-x-20">
									<div className="header__notifications">
										<a href="#">
											<div className="js-notifications-icon">
												<i className="ri-notification-3-line"></i>
											</div>
										</a>
										<div className="notifications_popup space-y-20">
											<div className="d-flex justify-content-between">
												<h5> Notifications</h5>
												<a href="Activity.html" className="badge color_white">View all</a>
											</div>
											<div
												className="item
												space-x-20
												d-flex
												justify-content-between
												align-items-center">
												<img
													className="thumb"
													src="assets/img/notifications/1.png"
													alt="..."
												/>
												<div className="details">
													<a href="activity.html"> <h6>Money revieved</h6> </a>
													<p>0.6 ETH</p>
												</div>
												<span className="circle"></span>
											</div>
										</div>
									</div>
									<div className="header__avatar">
										<div className="price">
											<span>{balance} <strong>ETH</strong> </span>
										</div>
										<img className="avatar" src="https://avatars.dicebear.com/api/identicon/{{rand()}}.svg" alt="avatar" />
										<div className="avatar_popup space-y-20">
											<div className="d-flex align-items-center justify-content-between">
												<span> {shortenAddress(auth, 7)} </span>
												<a href="/" className="ml-2">
													<i className="ri-file-copy-line"></i>
												</a>
											</div>
											<div className="d-flex align-items-center space-x-10">
												<img
													className="coin"
													src={coin_image}
													alt="/"
												/>
												<div className="info">
													<p className="text-sm font-book text-gray-400">Balance</p>
													<p className="w-full text-sm font-bold text-green-500">{balance} ETH</p>
												</div>
											</div>
											<div className="hr"></div>
											<div className="links space-y-10">
												<a href="#">
													<i className="ri-landscape-line"></i> <span> My items</span>
												</a>

												<a id="logout" onClick={() => connectWallet()}>
													<i className="ri-logout-circle-line"></i> <span> Logout</span>
												</a>
											</div>
										</div>
									</div>
									<div className="header__btns">
										<a className="btn btn-primary btn-sm" href="/upload">Create</a>
									</div>
									<div className="header__burger js-header-burger"></div>
								</div>
								<div className="header__mobile js-header-mobile">
									<div className="header__mobile__menu space-y-40">
										<ul className="d-flex space-y-20">
											<li> <a className="color_black" href="/"> Home</a> </li>
											<li> <a className="color_black" href="/marketplace"> Marketplace</a> </li>
											<li>
												<a className="color_black" href="/"> MetaVerse Training</a>
											</li>
											<li> <a className="color_black" href="/collections"> Collections</a> </li>
											<li> <a className="color_black" href="/profile"> Profile</a> </li>
											<li> <a className="color_black" href="#"> My Items</a> </li>
											<li> <a className="color_black" href="#"> My Collections</a> </li>
											<li> <a className="color_black" href="#"> Connect Wallet</a> </li>
										</ul>
										<div className="space-y-20">
											<div className="header__search in_mobile w-full">
												<input type="text" placeholder="Search" />
												<button className="header__result">
													<i className="ri-search-line"></i>
												</button>
											</div>
											<a className="btn btn-primary btn-sm wallet-address" href="/connect-wallet">Connect Wallet</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</header>
				}
			</div>
			<div className='body'>
				{children}
			</div>
			<Footer></Footer>
		</div>
	)
}

export default Header;
