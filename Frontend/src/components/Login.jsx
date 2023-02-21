import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from './context';

const host = 'http://localhost:5000';
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	let navigate = useNavigate();

	const {		getCartProducts	} = useGlobalContext();
	const loginTheUser = async (e) => {
		e.preventDefault();
		let url = `${host}/api/auth/login`;
		console.log(email, password);
		let res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});

		let data = await res.json();
		if (data.success) {
			localStorage.setItem('token', data.authtoken);
			navigate('/');
			getCartProducts();
			alert(data.msg);
		} else {
			alert('Invalid Credentials');
		}
	};
	const Email = (e) => {
		setEmail(e.target.value);
	};
	const Password = (e) => {
		setPassword(e.target.value);
	};
	return (
		<>
			<div className="container">
				<h2 className="center text-3xl font-bold mt-3 mb-5">
					Welcome to <span className="main-color">S </span>Mart Login
				</h2>
				<h2 className="text-bg-secondary"></h2>

				<form onSubmit={loginTheUser} className="login-form flex gap-1 direction-col">
					<input autoComplete='off' value={email} onChange={Email} type="email" className="input-group" placeholder="email@example.com" required />
					<input autoComplete='off' type="password" onChange={Password} value={password} className="input-group" placeholder="Password" required />
					<div className="div m-auto width-50p">
						<button className="btn my-2 width-100p d-block" type="submit">
							LOGIN
						</button>
					</div>
					<div className="center">
						<p className="p-font my-min">Don't Have an Account Create One ?</p>
						<Link to="/register" className="main-color weight-500 mt-1 inline-block exsmall-font">
							Register
						</Link>
					</div>
				</form>
			</div>
		</>
	);
};

export default Login;
