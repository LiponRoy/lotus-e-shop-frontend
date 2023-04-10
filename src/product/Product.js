import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import Spinner from '../components/Spinner';
import { productsFetch } from '../features/products/ProductSlice';
import { addToCart } from '../features/cart/cartSlice';
import { BsFillBasket2Fill } from 'react-icons/bs';

const Product = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { dataAll, isLoading, isError, message } = useSelector((state) => state.productRedux);

	// for search item
	const [search, setSearch] = useState('');
	// for category
	const [data, setData] = useState(dataAll);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}
		dispatch(productsFetch());
	}, [dispatch]);

	const selectBrand = (brandItem) => {
		const filterResult = dataAll.filter((curData) => {
			return curData.brand === brandItem;
		});
		setData(filterResult);
	};
	// for all brands
	const allBrand = () => {
		setData(dataAll);
	};

	// end for category

	// For paagenation
	const [pageNumber, setPageNumber] = useState(0);

	const usersPerPage = 8;
	const pagesVisited = pageNumber * usersPerPage;

	const pageCount = Math.ceil(dataAll?.length / usersPerPage);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	// add to cart
	const addToCartItem = (product) => {
		if (user) {
			dispatch(addToCart(product));
		} else {
			navigate('/login');
		}

		// navigate('/cartDetaials');
	};

	useEffect(() => {
		data.length === 0 &&
			setTimeout(() => {
				window.location.reload();
			}, 300);
	}, []);

	return (
		<div>
			<div className='w-full text-center text-2xl md:text-2xl font-bold'>
				<div className=' text-2xl m-1'>OUR LATEST PRODUCT'S </div>
				{/* <div className='text-md'>Total Item : {data.length}</div> */}
				<div className='text-md'>{data.length === 0 && <span>No Data Found</span>}</div>
			</div>
			<section className='text-gray-600 body-font'>
				<div className='container mx-auto flex px-2  md:flex-row flex-col items-center'>
					<div className='lg:max-w-lg lg:w-64 lg:h-screen'>
						<div className=' flex flex-col items-center justify-center  text-blue-800'>
							{/* search here */}
							<span className='mb-2 mt-4 text-[17px] text-black '>Search here :</span>

							<input onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search by name...' className='input input-bordered input-warning w-52 mb-4' />

							<span className='mb-2 text-[17px] text-black'>Categories :</span>
							<button className='my-1 bg-[#646464] w-52 h-8 rounded-md text-white' onClick={() => selectBrand('men')}>
								men
							</button>

							<button className='my-1 bg-[#646464] w-52 h-8 rounded-md text-white' onClick={() => selectBrand('women')}>
								women
							</button>

							<button className='my-1 bg-[#646464] w-52 h-8 rounded-md text-white' onClick={() => selectBrand('shirt')}>
								shirt
							</button>
							<button className='my-1 bg-[#646464] w-52 h-8 rounded-md text-white' onClick={() => selectBrand('tshirt')}>
								tshirt
							</button>

							<button className='my-1 bg-[#646464] w-52 h-8 rounded-md text-white' onClick={() => allBrand()}>
								All
							</button>
						</div>
					</div>
					{isLoading ? (
						<Spinner></Spinner>
					) : (
						<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center '>
							<div className='w-auto'>
								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-12 mx-16'>
									{/* here slice() for categories and filter() for search option
								  and map() for showing data */}

									{data
										?.slice(pagesVisited, pagesVisited + usersPerPage)
										.filter((item) => {
											return search.toLowerCase() === '' ? data : item.name.toLowerCase().includes(search);
										})
										.map((value, i) => (
											<div className=' flex flex-col' key={i}>
												<div className='relative overflow-hidden bg-no-repeat bg-cover max-w-xs rounded-sm'>
													<img src={value?.image.url} width={300} className='hover:scale-110 transition duration-300 ease-in-out' alt='noImg' />
												</div>
												<div className=' flex items-center justify-between mt-4 bg-[#646464] text-white p-2'>
													<button onClick={() => navigate(`/productDetail/${value?._id}`)} className=' underline'>
														{/* <BsFillBasket2Fill size='24px'></BsFillBasket2Fill> */}
														Detail
													</button>

													<button onClick={() => addToCartItem(value)} className=' underline flex items-center'>
														{/* <BsFillBasket2Fill size='24px'></BsFillBasket2Fill> */}
														Add-To-Cart
													</button>
												</div>

												<span className='text-2xl mt-2 font-semibold '>
													{value?.price}
													<span className='text-xl'>TK</span>
												</span>
												<p className='text-xl font-semibold'>{value?.name}</p>
											</div>
										))}
								</div>
							</div>
						</div>
					)}
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
