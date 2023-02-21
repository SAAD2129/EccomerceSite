import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<>
			<div className="notfound">
				<h2 className="large-font">404 NOT FOUND !</h2>
				<Link to='/' className="btn btn outline">GO HOME</Link>
			</div>
		</>
	);
};

export default Error;
