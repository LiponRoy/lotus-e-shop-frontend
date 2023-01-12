import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useGetTasksQuery } from '../features/ProductApi';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = () => {
	const navigate = useNavigate();
	const { data, isLoading, isSuccess, isError } = useGetTasksQuery();

	// For paagenation
	//const [users, setUsers] = useState(data?.slice(0, 50));
	const [pageNumber, setPageNumber] = useState(0);

	const usersPerPage = 3;
	const pagesVisited = pageNumber * usersPerPage;

	const pageCount = Math.ceil(data?.length / usersPerPage);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	// For paganation

	return (
		<div>
			<div className='w-full text-center text-2xl md:text-4xl font-bold mt-4'>OUR LATEST PRODUCT</div>;
			<div className='w-full text-center text-2xl md:text-2xl font-bold mt-2'>Total Item : {data?.length}</div>;
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-12 mx-16'>
				{data?.slice(pagesVisited, pagesVisited + usersPerPage).map((value) => (
					<div className='relative w-full h-[400px] flex justify-center items-center bg-slate-200 rounded-md'>
						<span className=' absolute bottom-5 left-5'>{value.title}</span>
						<span className=' absolute bottom-5 right-5'>{value.price}</span>
						<span>{value.star}</span>
					</div>
				))}
			</div>
			<div>
				<ReactPaginate
					previousLabel={'<'}
					nextLabel={'>'}
					pageCount={pageCount}
					onPageChange={changePage}
					containerClassName={'paginationBttns'}
					previousLinkClassName={'previousBttn'}
					nextLinkClassName={'nextBttn'}
					disabledClassName={'paginationDisabled'}
					activeClassName={'paginationActive'}
				/>
			</div>
		</div>
	);
};

export default Product;
