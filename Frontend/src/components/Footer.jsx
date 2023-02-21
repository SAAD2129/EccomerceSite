import React from 'react';

const Footer = () => {
	return (
		<>
			<div className="bar flex space-between">
				<div>
					<p>Ready to Get Started ?</p>
					<p>Contact us Today</p>
				</div>
				<div>
					<button className="btn rounded-0">GET STARTED</button>
				</div>
			</div>
			<footer className="footer">
				<div className="grid gap-2 gtc-4">
					<div className="gtc-4">
						<p className=" weight-500 p-font m-0 ">SAAD PROGRAMMER</p>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, provident.</p>
					</div>
					<div className="gtc-4">
						<p className=" weight-500 p-font m-0 ">Subcribe to get Important Code</p>
						<p>
							<input type="text " className="plane-input text-black" placeholder="Your email" />
						</p>
						<button className="btn rounded-0">SUBSCRIBE</button>
					</div>
					<div className="gtc-4">
						<p className=" weight-500 p-font m-0 ">Follow Us</p>
						<div>
							<i className="uil uil-discord"></i>
							<i className="uil uil-youtube"></i>
							<i className="uil uil-instagram"></i>
						</div>
					</div>
					<div className="gtc-4">
						<p className=" weight-500 p-font m-0 ">Call Us</p>
						<p>+934325324234</p>
					</div>
				</div>
				<hr className="color-white bg-white" />
				<div className="grid gtc-2 ">
					<div>
						<p className="m-0">©{new Date().getFullYear()} Saad Programmer. All Rights Reserved.</p>
					</div>
					<div>
						<p>PRIVACY POLICY</p>
						<p>TERMS CONDITIONS</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
