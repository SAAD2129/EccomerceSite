import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import { useGlobalContext } from './context';
import Item from './Item';
const API = 'https://api.pujakaitem.com/api/products';
const Home = () => {
	let { updateHome, filtered } = useGlobalContext();
	const [featured, setFeatured] = useState([]);
	useEffect(() => {
		updateHome();
		let feat = filtered.filter((element) => {
			return element.featured === true;
		});
		setFeatured(feat);
	}, []);

	return (
		<>
			<Hero />
			<div className="container m-auto width-75p">
				<h2 className="center my-4 med-font">OUR FEATURES</h2>
				<div className="grid gap-2 px-12 gtc-3">{featured && featured.map((element,i) => <Item key={i} {...element} />)}</div>
			</div>
			<div className="container width-75 gtc-3 gap-3 grid m-auto py-8">
				<div className="card flex mt-1 p-3 items-center rounded-lg justify-center text-center">
					<div className="card-body">
						<i className="uil main-color text-4xl uil-truck font-bold text"></i>
						<p className="font-medium text-lg">Super Fast and Free Delivery</p>
					</div>
				</div>
				<div>
					<div className="card flex mt-1 p-3 items-center rounded-lg justify-center text-center">
						<div className="card-body">
							<i className="uil main-color text-4xl uil-shield-check font-bold "></i>
							<p className="font-medium text-lg">Non Contact Shipping</p>
						</div>
					</div>
					<div className="card flex mt-1 p-3 items-center rounded-lg justify-center text-center">
						<div className="card-body">
							<i className="uil main-color text-4xl uil-money-bill font-bold "></i>
							<p className="font-medium text-lg">Money Back Guaranteed</p>
						</div>
					</div>
				</div>
				<div className="card  flex mt-1 p-3 items-center rounded-lg justify-center text-center">
					<div className="card-body">
						<i className="uil main-color text-4xl uil-lock font-bold text"></i>
						<p className="font-medium text-lg">Super Secure Payment System</p>
					</div>
				</div>
			</div>
			<h2 className="text-center med-font uppercase">Our Partners</h2>
			<div className="trusted my-3 shadow bg[#eaeff0] p-2 flex gap-5 justify-center ">
				<button className="uil text-9xl main-color uil-apple-alt"></button>
				<button className="uil text-9xl main-color uil-facebook"></button>
				<button className="uil text-9xl main-color uil-amazon"></button>
				<button className="uil text-9xl main-color uil-youtube"></button>
			</div>
		</>
	);
};

export default Home;
