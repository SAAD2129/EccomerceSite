import React, { useEffect } from 'react';
import { useGlobalContext } from './context';
import Hero from './Hero';

const About = () => {
	let { updateAbout } = useGlobalContext();
	useEffect(() => {
		updateAbout();
	}, []);

	return (
		<>
			<Hero />
		</>
	);
};

export default About;
