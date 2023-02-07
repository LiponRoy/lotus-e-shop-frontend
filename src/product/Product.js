import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import { useGetProductTasksQuery } from '../features/products/GetProductsApi';
import { productsFetch } from '../features/products/productsSlice';

const Product = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	//const { data, isLoading, isSuccess, isError } = useGetProductTasksQuery();
	const { items, status, createStatus } = useSelector((state) => state.products);

	useEffect(() => {
		if (status === 'success') {
			dispatch(productsFetch());
		}
		console.log(items);
	}, [items, dispatch]);

	// for category
	const [data, setData] = useState(items);

	const selectBrand = (brandItem) => {
		const filterResult = items.filter((curData) => {
			return curData.brand === brandItem;
		});
		setData(filterResult);
	};
	// for all brands
	const allBrand = () => {
		setData(items);
	};
	// end for category
	useEffect(() => {}, [items, dispatch]);

	// For paagenation
	//const [users, setUsers] = useState(data?.slice(0, 50));
	const [pageNumber, setPageNumber] = useState(0);

	const usersPerPage = 4;
	const pagesVisited = pageNumber * usersPerPage;

	const pageCount = Math.ceil(items?.length / usersPerPage);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	// For paganation

	return (
		<div>
			<div className='w-full text-center text-2xl md:text-4xl font-bold mt-4'>OUR LATEST PRODUCT</div>;
			<div className=' flex flex-col items-center justify-center text-blue-800'>
				<button onClick={() => selectBrand('samsung')}>Samsung</button>
				<br></br>
				<button onClick={() => selectBrand('iphone')}>iPhone</button>
				<br></br>
				<button onClick={() => selectBrand('xiomi')}>Xiomi</button>
				<br></br>
				<button onClick={() => allBrand()}>All</button>
				<br></br>
			</div>
			<div className='w-full text-center text-2xl md:text-2xl font-bold mt-2'>Total Item : {items?.length}</div>;
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-12 mx-16'>
				{data?.slice(pagesVisited, pagesVisited + usersPerPage).map((value, i) => (
					<div key={i} className='card w-96 bg-base-100 shadow-xl'>
						<figure className='px-10 pt-10'>
							<img src={value?.image.url} alt='Shoes' className='rounded-xl' />
						</figure>
						<div className='card-body items-center text-center'>
							<h2 className='card-title'>{value?.brand}</h2>
							<p>{value?.name}</p>
							<p>{value?.price}</p>
							<p>{value?.desc}</p>
							<div className='card-actions'>
								<button className='btn btn-primary'>Buy Now</button>
							</div>
						</div>
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
