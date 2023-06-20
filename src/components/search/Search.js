import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = ({ value, onChange }) => {
	return (
		<div className=' flex justify-end items-center'>
			{/* <BiSearch size={22} /> */}

			<input type='text' placeholder='Search by name' value={value} onChange={onChange} className=' w-1/3 py-2 my-4 pl-2 border border-blue-500' />
		</div>
	);
};

export default Search;
