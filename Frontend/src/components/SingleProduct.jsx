import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from './context';
import { useNavigate } from 'react-router-dom';

const API = 'https://api.pujakaitem.com/api/products/';
const host = 'http://localhost:5000';
const SingleProduct = () => {
	let navigate = useNavigate();
	let { id } = useParams();

	const { currencyConverter, incr, singleProduct, setSingleProduct, getCartProducts, decr, items } = useGlobalContext();
	const getProductSingle = async (url) => {
		let response = await fetch(url);
		let data = await response.json();
		setSingleProduct(data);
		console.log(data);
	};
	let sub__total = 0;
	useEffect(() => {
		let url = `${API}?id=${id}`;
		console.log(singleProduct);
		// console.log('useEffect')
	}, [id]);
	let obj = {
		id: 'thapaserialnok',
		name: 'rolex premium',
		company: 'rolex',
		price: 999999,
		colors: ['#000000', '#CDD0D0'],
		image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		description:
			'This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.',
		category: 'watch',
	};
	const name = 'iPhoneX ',
		price = 156000,
		stars = 3.2,
		image = `https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
		reviews = 52,
		stock = 3,
		colors = ['#ff0000', '#000000', '#CDD0D0'];

	const AddToCart = async () => {
		console.log(name, price, items, sub__total);
		let url = `${host}/api/product/addProduct`;
		if (items <= 0) {
			alert('Please select Quantiy');
			return;
		}
		if (localStorage.getItem('token')) {
			let res = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'auth-token': localStorage.getItem('token'),
				},
				body: JSON.stringify({ name, price, quantity: items, sub__total }),
			});

			let data = await res.json();
			if (data.success) {
				getCartProducts();
				navigate('/cart');
			}
			alert(data.msg);
		} else {
			navigate('/login');
		}
	};
	return (
		<>
			{singleProduct && (
				<div className="grid item-center gtc-2 px-64 py-8">
					<div className="left">
						<div className="flex gap-4">
							<div className="flex gap-2 flex-col">
								{/* <img className="w-28" src={image[0].url} alt="" />
								<img className="w-28" src={image[1].url} alt="" />
								<img className="w-28" src={image[2].url} alt="" />
								<img className="w-28" src={image[3].url} alt="" /> */}
							</div>
							<div className="flex items-center justify-">
								<img className="w-3/4" src={image} alt="" />
							</div>
						</div>
					</div>
					<div className="right">
						<div>
							<p className="my-1 font-medium text-xl">
								Name <span className="font-bold">{name}</span>
							</p>
							<p className="my-1 font-bold text-xl main-color">
								Deal of The Day <span className="font-bold"> &nbsp;&nbsp;&nbsp;{currencyConverter(price)}</span>
							</p>
							<p className="my-1 font-medium text-xl">
								Rating <span className="font-bold">{stars}</span>
							</p>
							<p className="my-1 font-medium text-xl">
								Reviews <span className="font-bold">{reviews}</span>
							</p>
							<p className="my-1 font-medium text-xl">
								MRP{' '}
								<del className=" line-through color-gray font-bold">
									<span className="font-bold">{currencyConverter(price * 0.05 + price)}</span>
								</del>
							</p>
							<p className="my-2">
								The Best Rolex Unisex Watch with premium look & Sleek Design Never Compromise on Personality and Style. This watch is compact
							</p>
						</div>
						<div className="flex justify-between gap-2">
							<div className="div text-center">
								<i className="uil uil-truck  px-min rounded-full bg-white text-4xl service-icon"></i>
								<p className="color-gray mt-1">Free Delivery</p>
							</div>
							<div className="div text-center">
								<i className="uil bg-white px-min rounded-full uil-process text-4xl service-icon"></i>
								<p className="color-gray mt-1">7 Days Replacement</p>
							</div>
							<div className="div text-center">
								<i className="uil uil-money-bill bg-white px-min rounded-full line-through text-4xl service-icon"></i>
								<p className="color-gray mt-1">Fast Shipping</p>
							</div>
							<div className="div text-center">
								<i className="uil uil-shield-check bg-white px-min rounded-full text-4xl service-icon"></i>
								<p className="color-gray mt-1">1 year Warranty</p>
							</div>
						</div>
						<hr className="h-1 shadow-black-900 my-1 bg-slate-300" />
						<div>
							<p className="my-1">
								Available <span className="font-bold">{stock > 0 ? 'In Stock' : 'not Avaiable'}</span>
							</p>
							<p className="my-1">
								Brand <span className="font-bold">Apple</span>
							</p>
						</div>
						<hr className="h-1 shadow-black-900 my-1 bg-slate-300" />
						<p className="color-gray flex items-center gap-1">Colors :</p>
						<div className="flex gap-1 mt-1 items-center">
							<button className="uil uil-minus font-bold text-xl " onClick={decr}></button>
							{items}
							<button className="uil uil-plus font-bold text-xl" onClick={incr}></button>
						</div>
						<button className="btn mt-2" onClick={AddToCart}>
							ADD TO CART
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default SingleProduct;
