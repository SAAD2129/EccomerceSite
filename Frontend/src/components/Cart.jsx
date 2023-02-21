import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useGlobalContext } from './context';
const host = 'http://localhost:5000/api/product/deleteItems';

const Cart = () => {
	// ? Destructing form global Context
	const { incr, decr, currencyConverter, setCartItems, cartItems, getCartProducts } = useGlobalContext();
	let navigate = useNavigate();

	// ? GEtting the User Specific Products to Cart

	useEffect(() => {
		console.log('cart page');
	}, []);

	let total = 0;
	if (cartItems) {
		cartItems.map((elem) => {
			total += elem.price * elem.quantity;
		});
	}
	const shipping = Math.round((total * 0.5) / 100);
	const Order__total = currencyConverter(shipping + total);

	const DeleteItems = async () => {
		try {
			const response = await fetch(host, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					'auth-token': localStorage.getItem('token'),
				},
			});
			const data = await response.json();

			if (data.success) {
				// alert('items Removed Successfully');
				setCartItems(null);
				// navigate('/products');
			}
		} catch (error) {
			alert('Internal Error Occurred');
		}
	};
	return (
		<>
			<h1 className="text-3xl center my-2">Your Shopping CART</h1>
			{/* // ? Checking if the cartItems is null or not */}
			{!cartItems || cartItems.length === 0 ? (
				<div className="center mt-5">
					<p className="mb-2 text-xl">Your Cart is Empty</p>
					<NavLink className=" btn" to="/products">
						Go to Shop
					</NavLink>
				</div>
			) : (
				<div className="container py-5 m-auto width-50">
					<table>
						<thead>
							<tr className="border-b-2 h- border-b-neutral-300">
								<th className="w-44 color-gray">ITEM</th>
								<th className="w-44 color-gray">PRICE</th>
								<th className="w-44 color-gray">QUANTITY</th>
								<th className="w-44 color-gray">SUB TOTAL </th>
								<th className="w-44 color-gray">REMOVE</th>
							</tr>
						</thead>
						<tbody className="py-1">
							{cartItems.map((elem) => {
								return (
									<tr className="text-center border-b-2 border-b-neutral-300">
										<td className="w-44 flex h-20 item-center">{elem.name}</td>
										<td className="w-44">{currencyConverter(elem.price)}</td>
										<td className="w-44">
											<button className="uil mr-1 uil-minus font-bold text-xl " onClick={decr}></button>
											<b> {elem.quantity}</b>
											<button className="uil ml-1 uil-plus font-bold text-xl" onClick={incr}></button>
										</td>
										<td className="w-44">{currencyConverter(elem.price * elem.quantity)}</td>
										<td className="w-44">
											<button onClick={DeleteItems} className="uil text-orange-800 text-2xl uil-trash-alt colo"></button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
					<div className="flex mt-2 justify-between">
						<NavLink to="/products" className="btn">
							Continue Shopping
						</NavLink>
						<NavLink to="" className="btn">
							Clear Cart
						</NavLink>
					</div>
					<div className="flex justify-end flex-col item-end">
						<div className="card px-2 py-1 mt-3 w-fit">
							<p className="my-1 color-gray  flex justify-between">
								Subtotal <span className="font-bold text-end">{currencyConverter(total)}</span>
							</p>
							<p className="my-1 color-gray">
								Shipping Fee <span className="font-bold text-end pl-4">{currencyConverter(shipping)} </span>
							</p>
							<hr className="bg-neutral-300" />
							<p className="mt-2 color-gray flex justify-between">
								Order Total <span className="font-bold ">{Order__total} </span>
							</p>
						</div>
						<div>
							<button className="btn mt-2 width-100p">Buy Now</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Cart;
