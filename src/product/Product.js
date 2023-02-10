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

	const usersPerPage = 8;
	const pagesVisited = pageNumber * usersPerPage;

	const pageCount = Math.ceil(items?.length / usersPerPage);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	// For paganation

	return (
		<div>
			<div className='w-full text-center text-2xl md:text-2xl font-bold'>
				<div className=''>OUR LATEST PRODUCT</div>
				<div className='text-xl'>Total Item {data.length}</div>
			</div>
			<section className='text-gray-600 body-font'>
				<div className='container mx-auto flex px-2 py-2 md:flex-row flex-col items-center'>
					<div className='lg:max-w-lg lg:w-64 lg:h-screen mt-5'>
						<div className=' flex flex-col items-center justify-start text-blue-800'>
							<span className='mb-2 text-2xl'>categories</span>
							<button className='my-1 bg-slate-500 w-32 text-white' onClick={() => selectBrand('men')}>
								men
							</button>

							<button className='my-1 bg-slate-500 w-32 text-white' onClick={() => selectBrand('women')}>
								women
							</button>

							<button className='my-1 bg-slate-500 w-32 text-white' onClick={() => selectBrand('shirt')}>
								shirt
							</button>
							<button className='my-1 bg-slate-500 w-32 text-white' onClick={() => selectBrand('tshirt')}>
								tshirt
							</button>

							<button className='my-1 bg-slate-500 w-32 text-white' onClick={() => allBrand()}>
								All
							</button>
						</div>
					</div>
					<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center '>
						<div className='w-auto'>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-12 mx-16'>
								{data?.slice(pagesVisited, pagesVisited + usersPerPage).map((value, i) => (
									<div key={i}>
										<div className='relative overflow-hidden bg-no-repeat bg-cover max-w-xs'>
											<img src={value?.image.url} width={300} className='hover:scale-110 transition duration-300 ease-in-out' alt='noImg' />
										</div>

										<span className='text-2xl mt-2 font-semibold '>
											{value?.price}
											<span className='text-xl'>TK</span>
										</span>
										<button className='btn btn-sm btn-warning m-1 ml-2'>Buy now</button>
										<p className='text-xl font-semibold'>{value?.name}</p>
										<p className=''>{value?.desc}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			;<div className='flex items-center content-center'></div>
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
