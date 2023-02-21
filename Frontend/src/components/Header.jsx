import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
	const [Menu, SetMenu] = useState(false);
	const [open, setOpen] = useState(true);
	const [close, setClose] = useState(false);
	let navigate = useNavigate();
	const LogOut = () => {
		let check = confirm('Are you sure you want to logout?');
		if (check) {
			localStorage.clear('token');
			navigate('/login');
		}
	};
	return (
		<>
			<header className="py-1 flex space-between px-3 item-center">
				<h2 className="logo text-2xl weight-700">
					<Link className="logo" to="/">
						<span className="weight-700 fs-1 main-color">S</span> Mart
					</Link>
				</h2>
				<nav>
					<ul className={`${Menu ? 'navbar-mobile' : ''} flex m-0 gap-2 item-center`}>
						<li>
							<Link
								to="/"
								onClick={() => {
									SetMenu(false), setOpen(true);
									setClose(false);
								}}
								className="nav-link">
								HOME
							</Link>
						</li>
						<li>
							<Link
								to="/about"
								onClick={() => {
									SetMenu(false), setOpen(true);
									setClose(false);
								}}
								className="nav-link">
								ABOUT
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								onClick={() => {
									SetMenu(false), setOpen(true);
									setClose(false);
								}}
								className="nav-link">
								CONTACT
							</Link>
						</li>
						<li>
							<Link
								to="/products"
								onClick={() => {
									SetMenu(false), setOpen(true);
									setClose(false);
								}}
								className="nav-link">
								PRODUCTS
							</Link>
						</li>
						{localStorage.getItem('token') ? (
							<li>
								<button onClick={LogOut} className="btn rounded-0">
									LOGOUT
								</button>
							</li>
						) : (
							<li>
								<Link to="/login" className="btn rounded-0">
									LOGIN
								</Link>
							</li>
						)}
						<li>
							<Link to="/cart" className=" rounded-0">
								<i className="uil small-font uil-shopping-cart-alt"></i>
							</Link>
						</li>
					</ul>
				</nav>
				{open && (
					<i
						className="uil uil-bars"
						onClick={() => {
							SetMenu(true);
							setClose(true);
							setOpen(false);
						}}></i>
				)}
				{close && (
					<i
						className="uil uil-times"
						onClick={() => {
							SetMenu(false), setOpen(true);
							setClose(false);
						}}></i>
				)}
			</header>
		</>
	);
};

export default Header;
