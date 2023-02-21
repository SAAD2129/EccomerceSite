import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useGlobalContext } from './context';
const Item = ({ image, name, price, view, id, description }) => {
	const { currencyConverter } = useGlobalContext();

	return (
		<>
			<Link to={`/product/${id}`}>
				<div className={`product ${view ? 'width-100p' : ''}`} id={id}>
					<div className="card">
						<div className={!view ? 'card-body p-0' : 'card-body item-end listView flex p-0'}>
							<div className="card-img">
								<img className="product-image block m-auto" src={image} alt="" />
							</div>
							<div className={`flex  px-1 my-min space-between item-center ${view ? 'flex-col items-baseline  py-3 px-2' : ''}`}>
								<p className="p-font weight-600">{name}</p>
								{view && (
									<div>
										<p>{description.slice(0, 120)} </p>
										<div className="my-1 b center">
											<NavLink to={`/product/${id}`} className=" btn outline font-bold mt-1">
												Read More
											</NavLink>
										</div>
									</div>
								)}

								<p className="weight-600 flex space-between">
									<span className="weight-500 main-color">{currencyConverter(price)}</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Item;
