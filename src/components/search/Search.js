import React from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';

const Search = ({ value, onChange }) => {
	return (
		<div className=' flex justify-end items-center mb-4 '>
			<input type='text' placeholder='Search by name' value={value} onChange={onChange} className='w-full md:w-1/3 py-2 my-4 pl-2 border-2 border-[#FF9F43] rounded-md' />
			<div className=" text-[#FF9F43]">
			<AiOutlineFileSearch size={42} />
			</div>
		</div> 
	);
};

export default Search;
