import React from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from "../assets/img/logo.png";

// import '../../assets/sass/components/_footer.scss';

// class Footer extends React.Component {
// 	state = {
// 		value: 0
// 	};
function Footer() {


	return (

		<footer className="footer__1">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 space-y-20">
						<div className="footer__logo mx0auto">
							<a href="/">
								<img src={logo} width="100" height="100" className="img-circle" alt="logo" id="logo_js_f" />
							</a>
						</div>
						<p className="footer__text text-center">
							Welcome to the world of NFTs, we are KLANDESTINO ARTS
						</p>
						<div style={{ display: "block" }}>
							<li style={{ display: "inline-block" }}><a href="https://medium.com/@KlandestinoFinance"> <i className="ri-4x ri-medium-line"></i></a></li>
							<li style={{ display: "inline-block" }}><a href="https://t.me/KlandestinoFinanceAnnouncements"> <i className="ri-4x ri-telegram-line"></i></a></li>
							<li style={{ display: "inline-block" }}><a href="https://twitter.com/KlandestinoF"><i className="ri-4x ri-twitter-line"></i></a></li>
							<li style={{ display: "inline-block" }}><a href="https://klandestinoswap.finance"> <i className="ri-4x ri-global-line"></i></a></li>
							<li style={{ display: "inline-block" }}><a href="https://klandestino.com/klandestinoarts"> <i className="ri-4x ri-global-line"></i></a></li>
							<li style={{ display: "inline-block" }}><a href="https://app.airnfts.com/creators/Klandestino_Finance"> <i className="ri-4x ri-at-line"></i></a></li>
							<li style={{ display: "inline-block" }}><a href="https://app.airnfts.com/creators/Klandestino_Arts"> <i className="ri-4x ri-at-line"></i></a></li>
						</div>
					</div>
					<div className="col-lg-2 col-6">
						<h6 className="footer__title">Pages</h6>
						<ul className="footer__list">
							<li> <a href="/"> Home </a>
							</li>
							<li> <a href="#"> Contact Us
							</a> </li>
							<li> <a href="#"> FAQs </a> </li>
							<li> <a href="#"> Privacy Policy
							</a>
							</li>
						</ul>
					</div>
					<div className="col-lg-2 col-6">
						<h6 className="footer__title">Account</h6>
						<ul className="footer__list">
							<li> <a href="#"> My Profile </a>
							</li>
							<li> <a href="#"> My Collections </a>
							</li>
							<li> <a href="#"> My Items </a>
							</li>
							<li> <a href="#"> Activity
							</a> </li>
						</ul>
					</div>
					<div className="col-lg-2 col-6">
						<h6 className="footer__title">Company</h6>
						<ul className="footer__list">
							<li> <a href="#"> Marketplace </a>
							</li>

							<li>
								<a href="#"> MetaVerse Training</a>
							</li>
							<li> <a href="#"> Collections </a> </li>
							<li> <a href="#"> Rankings
							</a> </li>

						</ul>
					</div>
				</div>
				<p className="copyright text-center">
					Copyright © 2022
				</p>
			</div>
		</footer>
	);

}



export default Footer;
