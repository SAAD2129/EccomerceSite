// ?Create Context {Warehouse}
// ? Provider =>
// ? Consumer =>
import React, { useReducer, useState } from 'react';
import reducer from './reducer';
import DATA from './Api';
const AppContext = React.createContext();
// .. STates

const host = 'http://localhost:5000';
let initialState = {
	name: '',
	image: '',
};

const AppProvider = ({ children }) => {
	const [data, setData] = useState(DATA);
	const [filtered, setFiltered] = useState(DATA);
	const [loading, setLoading] = useState(true);
	const [state, dispatch] = useReducer(reducer, initialState);
	const [items, setItems] = useState(0);
	const [singleProduct, setSingleProduct] = useState({});
	const [cartItems, setCartItems] = useState(null);
	let cols = data.map((elm) => elm.colors);
	cols = cols.flat();
	const [uniqueColors, setUniqueColors] = useState(new Set(cols));

	const updateHome = () => {
		return dispatch({
			type: 'HOME_UPDATE',
			payload: {
				name: 'to S MART',
				image: 'images/hero.jpg',
			},
		});
	};
	const updateAbout = () => {
		return dispatch({
			type: 'ABOUT_UPDATE',
			payload: {
				name: 'PROGRAMMERS',
				image: './register.jpg',
			},
		});
	};
	// ? Func Gets the Users Cart Products from data base
	const getCartProducts = async () => {
		const url = `${host}/api/product/getProduct`;
		if (localStorage.getItem('token')) {
			const res = await fetch(url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'auth-token': localStorage.getItem('token'),
				},
			});

			const data = await res.json();
			// if (data.success) {
			console.log(data.products);
			setCartItems(data.products);
			// navigate('/cart');
			console.log('🚀 ~ file: Cart.jsx ~ line 28 ~ getCartProducts ~ cartItems', cartItems);
		}
	};
	// Converts The Currency
	const currencyConverter = (price) => {
		price = price ;
		let val = new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR' }).format(price);
		return val;
	};
	const sortData = () => {
		let selected = document.querySelector('#sort');
		let valueSort = selected.options[selected.selectedIndex].value;
		let newData;
		if (valueSort === 'all') {
			setFiltered(data);
			return;
		} else if (valueSort === 'hrating') {
			newData = [...data].sort((a, b) => b.rating - a.rating);
		} else if (valueSort === 'lowest') {
			newData = [...data].sort((a, b) => a.price - b.price);
		} else if (valueSort === 'highest') {
			newData = [...data].sort((a, b) => b.price - a.price);
		}
		setFiltered(newData);
	};
	const sortDataCompanyWise = () => {
		let selected = document.querySelector('#company');
		let valueSort = selected.options[selected.selectedIndex].value;
		if (valueSort === 'all') {
			setFiltered(data);
			return;
		}
		let newData = data.filter((elem) => elem.company === valueSort);
		setFiltered(newData);
	};
	// ? Card item Increasing & Decreasing
	const incr = () => {
		setItems(items + 1);
	};
	const decr = () => {
		if (items > 0) {
			setItems(items - 1);
		}
	};
	return (
		<AppContext.Provider
			value={{
				...state,
				updateHome,
				updateAbout,
				sortDataCompanyWise,
				setFiltered,
				setLoading,
				loading,
				data,
				filtered,
				sortData,
				incr,
				decr,
				items,
				currencyConverter,
				singleProduct,
				setSingleProduct,
				uniqueColors,
				getCartProducts,
				cartItems,
				setCartItems,
			}}>
			{children}
		</AppContext.Provider>
	);
};

// ? Custom Hook
export const useGlobalContext = () => {
	return React.useContext(AppContext);
};

export { AppContext, AppProvider };
