import React, { useState } from 'react';
import Item from './Item';
import { useGlobalContext } from './context';

const Products = () => {
	// .. STates
	const [textInput, setTextInput] = useState('');
	const [gridView, setGridView] = useState(true);
	const [listView, setListView] = useState(false);
	const { sortData, data, filtered, setFiltered, sortDataCompanyWise, uniqueColors } = useGlobalContext();
	const change = (e) => {
		setTextInput(e.target.value);
		if (e.target.value === '') {
			setFiltered(data);
			return;
		}
		let newData = data.filter((elem) => {
			let nm = elem.name.toLowerCase();
			let val = textInput.toLowerCase();
			if (nm.includes(val)) {
				return elem;
			}
		});
		setFiltered(newData);
	};

	/* */
	const filterData = (cat) => {
		if (cat === 'all') {
			setFiltered(data);
		} else {
			let newData = data.filter((item) => item.category.toLowerCase() === cat.toLowerCase());
			setFiltered(newData);
		}
	};

	return (
		<div>
			<div className="container  justify-content-center px-12 m-auto service-row gap-4 ">
				<h2 className="center my-4 med-font">OUR PRODUCTS</h2>'
				<div className="navigation mb-3 flex space-between item-center">
					{/* SEARCH Filtration */}
					<div>
						<input type="text" value={textInput} onChange={change} className="search-product plane-input" placeholder="Search Item" />
						{/*  Buttons to change The List veiw */}
						<select name="sort" id="sort" onClick={sortData} className="ml-4 sorting">
							<option value="all">All</option>
							<option value="lowest">Lowest price</option>
							<option value="highest">Highest price</option>
							<option value="hrating">Highest Rating</option>
						</select>
					</div>
					<div className="flex gap-2 view-btns">
						<button
							onClick={() => {
								setGridView(true), setListView(false);
							}}
							className="btn p-0">
							<i className="uil exsmall-font  uil-apps"></i>
						</button>
						<button
							onClick={() => {
								setGridView(false), setListView(true);
							}}
							className="btn p-0">
							<i className="uil exsmall-font uil-list-ul"></i>
						</button>
					</div>
				</div>
				<div className="flex gap-7">
					<div className="left">
						<h2 className="text-xl mb-2 font-medium">Category</h2>
						<ul className="flex product-list gap-1 direction-col">
							<li>
								<button onClick={() => filterData('all')} className="plane-btn">
									All Products
								</button>
							</li>
							<li>
								<button onClick={() => filterData('watch')} className="plane-btn">
									Watches
								</button>
							</li>
							<li>
								<button onClick={() => filterData('laptop')} className="plane-btn">
									Laptop
								</button>
							</li>
							<li>
								<button onClick={() => filterData('computer')} className="plane-btn">
									Computer
								</button>
							</li>
							<li>
								<button onClick={() => filterData('mobile')} className="plane-btn">
									Mobiles
								</button>
							</li>
							<li>
								<button onClick={() => filterData('accessories')} className="plane-btn">
									Accessories
								</button>
							</li>
						</ul>

						<div className="mt-3">
							<h2 className="text-xl mb-2 font-medium">Company</h2>
							<select name="company" onClick={sortDataCompanyWise} id="company">
								<option value="all">All</option>
								<option value="apple">Apple</option>
								<option value="samsung">Samsung</option>
								<option value="dell">Dell</option>
								<option value="lenova">Lenova</option>
								<option value="rolex">Rolex</option>
								<option value="nokia">Nokia</option>
								<option value="asus">Asus</option>
							</select>
						</div>
						<div className="mt-2">
							Colors
							{/* {uniqueColors.map((elm) => {
								return <div className="w-6 h-6 bg-[#000000]"></div>;
								
							})} */}
							<div className="flex mt-min gap-min">
								{Array.from(uniqueColors).map((elm) => {
									return <button className={`w-6 h-6 br-50 bg-[${elm}]`}></button>;
								})}
							</div>
						</div>
					</div>
					{/* {loading && (
						<div className="absolute top-96 right-2/4 z-50">
							<Spinner />
						</div>
					)} */}

					<div className="right width-75p">
						<div className={gridView ? `grid gap-3 gtc-3` : `grid gap-3 gtc-1`}>
							{filtered.map((element, index) => {
								const { name, price, image, id, description } = element;
								return <Item key={index} description={description} id={id} image={image} name={name} price={price} view={listView} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
