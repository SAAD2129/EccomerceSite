import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AppProvider } from './components/context';
import './Utility.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Products from './components/Products';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import Error from './components/Error';
import Login from './components/Login';
import Cart from './components/Cart';
import Register from './components/Register';
import SingleProduct from './components/SingleProduct';

function App() {
	const [isVisible, setIsVisible] = useState(false);
	const goToTop = () => {
		window.scrollTo(0, 0);
	};

	const listenScroll = () => {
		let heightToHide = 250;
		let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		if (winScroll > heightToHide) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', listenScroll);
		return () => window.removeEventListener('scroll', listenScroll);
	}, []);

	return (
		<>
			<AppProvider>
				<Router>
					<Header />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/about" element={<About />} />
						<Route exact path="/contact" element={<Contact />} />
						<Route exact path="/products" element={<Products />} />
						<Route exact path="/product/:id" element={<SingleProduct />} />
						<Route exact path="/cart" element={<Cart />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/register" element={<Register />} />
						<Route exact path="/*" element={<Error />} />
					</Routes>
					{
						//  ? Scroll button For
					}
					{isVisible && (
						<div className="container justify-content-end flex">
							<i className="uil gotop color-light uil-arrow-up" onClick={goToTop}></i>
						</div>
					)}

					<Footer />
				</Router>
			</AppProvider>
		</>
	);
}

export default App;
