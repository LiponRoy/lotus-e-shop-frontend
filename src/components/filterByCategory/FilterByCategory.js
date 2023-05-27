import React from 'react';
import { Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { FILTER_BY_CATEGORY } from '../../features/filter/filterSlice';

const FilterByCategory = () => {
	const dispatch = useDispatch();
	const { dataAll, isLoading, isError, message } = useSelector((state) => state.productRedux);

	const allCategory = ['All', ...new Set(dataAll.map((prod) => prod.brand))];

	const [category, setCategory] = useState('All');

	const filterProduct = (cat) => {
		setCategory(cat);
		dispatch(FILTER_BY_CATEGORY({ dataAll, cat }));
	};

	return (
		<div>
			{
				<div className=' flex flex-col justify-center items-start '>
					{allCategory.map((cat, index) => (
						// <button className=' bg-green-400 p-2'>{cat}</button>
						<Button onClick={() => filterProduct(cat)} key={index} className={`${category === cat ? 'bg-teal-500 text-white' : ' my-2'} `}>
							{cat}
						</Button>
					))}
				</div>
			}
		</div>
	);
};

export default FilterByCategory;
