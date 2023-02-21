import React from 'react';

const Spinner = () => {
	return (
		<div className="my-3 d-flex items-center justify-center load">
			<img src="./images/loading.gif" width="50" alt="Loading..." />
		</div>
	);
};

export default Spinner;
