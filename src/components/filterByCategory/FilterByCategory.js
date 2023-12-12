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
				<div className='flex  justify-center items-center'>
				{allCategory.map((cat, index) => (
					// <button className=' bg-green-400 p-2'>{cat}</button>
					<Button onClick={() => filterProduct(cat)} key={index} className={` mx-2 ${category === cat ? 'bg-[#FF9F43] text-white m-1 text-center px-2 w-20 h-11 ' : ' text-center px-1  w-20 h-11 '} `}>
						{cat}
					</Button>
				))}
			</div>
			}
		</div>
	);
};

export default FilterByCategory;
