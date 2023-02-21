import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Constants
const host = 'http://localhost:5000';



const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setcPassword] = useState('');
	const [contact, setContact] = useState('');
	const [name, setName] = useState('');
	const registerTheUser = async (e) => {
		e.preventDefault();
		console.log();
		e.preventDefault();
		let url = `${host}/api/auth/register`;
		console.log(email, password);
		if (password !== cpassword) {
			alert('Password and Confirm Password must be same');
		} else {
			let res = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, email, password, contact }),
			});

			let data = await res.json();
			alert(data.msg);
		}
	};
	const Contact = (e) => {
		setContact(e.target.value);
	};
	const Password = (e) => {
		setPassword(e.target.value);
	};
	const Confirm = (e) => {
		setcPassword(e.target.value);
	};
	const Name = (e) => {
		setName(e.target.value);
	};
	const Email = (e) => {
		setEmail(e.target.value);
	};
	return (
		<div>
			<div className="container">
				<h2 className=" center text-3xl font-bold mt-3 mb-5">
					Welcome to <span className="main-color">S </span>Mart Registration
				</h2>

				<form onSubmit={registerTheUser} className="login-form flex gap-1 direction-col">
					<input type="text" className="input-group" placeholder="User Name" value={name} onChange={Name} required />
					<input value={email} onChange={Email} type="email" className="input-group" placeholder="email@example.com" required />
					<input value={contact} onChange={Contact} type="tel" className="input-group" placeholder="Contact Number" required />
					<input value={password} onChange={Password} type="password" className="input-group" placeholder="Password" required />
					<input value={cpassword} onChange={Confirm} type="password" className="input-group" placeholder="Confirm Password" required />
					<div className="div m-auto width-50p">
						<button className="btn  my-3 width-100p d-block" type="submit">
							REGISTER
						</button>
					</div>
					<div className="center">
						<p className="p-font my-min">Already Have an Account</p>
						<Link to="/login" className="main-color weight-500 mt-1 inline-block exsmall-font">
							Login
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
