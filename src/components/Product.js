import React, { useState } from 'react';
import { data } from '../dataMe';
import Pagination from '../pagination/Pagination';

const Product = () => {
	// for paignetion
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(4);
	//..
	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
	const currentPosts = data.slice(firstPostIndex, lastPostIndex);
	// for paignetion end
	return (
		<div className=''>
			<div className='w-full text-center text-2xl md:text-4xl font-bold mt-4'>OUR LATEST PRODUCT</div>;
			<div className='w-full text-center text-2xl md:text-2xl font-bold mt-2'>Total Item : {data.length}</div>;
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-12 mx-16'>
				{currentPosts.map((value) => (
					<div className='relative w-full h-[400px] flex justify-center items-center bg-slate-200 rounded-md'>
						<span className=' absolute bottom-5 left-5'>{value.id}</span>
						<span className=' absolute bottom-5 right-5'>{value.name}</span>
						<span>{value.city}</span>
					</div>
				))}
			</div>
			<Pagination totalPosts={data.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
		</div>
	);
};

export default Product;
