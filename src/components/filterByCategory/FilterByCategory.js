import React from 'react';
import { Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { FILTER_BY_CATEGORY, FILTER_BY_PRICE } from '../../features/filter/filterSlice';
import { useEffect } from 'react';

const FilterByCategory = () => {
	const dispatch = useDispatch();
	const { dataAll, minPrice, maxPrice } = useSelector((state) => state.productRedux);

	const allCategory = [ ...new Set(dataAll.map((prod) => prod.brand)),'All'];

	const [category, setCategory] = useState('All');
	const [price, setPrice] = useState(maxPrice);

	const filterProduct = (cat) => {
		setCategory(cat);
		dispatch(FILTER_BY_CATEGORY({ dataAll, cat }));
	};

	useEffect(() => {
		dispatch(FILTER_BY_PRICE({ dataAll, price }));
	}, [dispatch, dataAll, price]);

	const clearFilters = () => {
		setCategory('All');
		// setBrand("All");
		setPrice(maxPrice);
	};

	return (
		<div>
			{
				<div className=' flex flex-col justify-center items-center mb-8'>
					<div className='flex md:flex-col justify-center items-start mx-2'>
						{allCategory.map((cat, index) => (
							// <button className=' bg-green-400 p-2'>{cat}</button>
							<Button onClick={() => filterProduct(cat)} key={index} className={`${category === cat ? 'bg-[#FF9F43] text-white my-2 text-center px-2 my-2 w-28 h-11 ' : 'my-2 text-center px-2 w-28 h-11 '} `}>
								{cat}
							</Button>
						))}
					</div>
					{/* <div className='my-4 flex flex-col justify-center items-center'>
						<h4>Price</h4>
						<p>{`$${price}`}</p>
						<div className='text-blue-700'>
							<input type='range' value={price} onChange={(e) => setPrice(e.target.value)} min={minPrice} max={maxPrice} />
						</div>
					</div> */}
					{/* <Button className=' mt-6' onClick={clearFilters}>
						Clear Filter
					</Button> */}
				</div>
			}
		</div>
	);
};

export default FilterByCategory;
