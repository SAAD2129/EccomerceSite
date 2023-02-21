import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context';

const Hero = () => {
	const { name, image } = useGlobalContext();
	
	return (
		<>
			<div className="container m-5auto px-12">
				<div className="grid-hero gtc-2 gap-5 flex item-center">
					<div className="">
						<p className="weight-500 m-0 color-gray p-0 ">WELCOME</p>
						<h1 className="bold heading">{name}</h1>
						<p className="color-gray">
							Hey! My name is Saad a MERN Stack Developer & An Enthusiast Tech Person A Freelancer & a Full Stack Developer. I am a passionate
							learner who's always willing to learn and work across technologies and domains.
						</p>
						<NavLink to='/products' className="btn mt-3 block px-2 py-1 rounded-0">SHOP NOW</NavLink>
					</div>
					<div className="">
						<picture>
							<img src={image} alt="IMG" />
						</picture>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
