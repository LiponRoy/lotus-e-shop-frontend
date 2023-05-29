import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import Spinner from '../components/Spinner';
import { GET_PRICE_RANGE, productsFetch } from '../features/products/ProductSlice';
import { addToCart } from '../features/cart/cartSlice';
import { BsFillBasket2Fill } from 'react-icons/bs';
import Search from '../components/search/Search';
import { FILTER_BY_SEARCH, FILTER_BY_SORT } from '../features/filter/filterSlice';
import FilterByCategory from '../components/filterByCategory/FilterByCategory';
import Pagination from '../components/pagination/Pagination';

const Product = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { dataAll, isLoading, isError, message } = useSelector((state) => state.productRedux);
	const { filteredProducts } = useSelector((state) => state.filterS);

	// for search item
	const [searchProduct, setSearchProduct] = useState('');
	const [sort, setSort] = useState('latest');

	// Pagination states
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(9);
	// Get Current Products
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
	// Pagination end

	useEffect(() => {
		dispatch(productsFetch());
		dispatch(GET_PRICE_RANGE({ dataAll }));
	}, []);

	useEffect(() => {
		dispatch(FILTER_BY_SORT({ dataAll, sort }));
	}, [dispatch, dataAll, sort]);

	useEffect(() => {
		dispatch(FILTER_BY_SEARCH({ dataAll, searchProduct }));
	}, [dispatch, dataAll, searchProduct]);

	// add to cart
	const addToCartItem = (product) => {
		// if (user) {

		// } else {
		// 	navigate('/login');
		// }
		dispatch(addToCart(product));

		// navigate('/cartDetaials');
	};

	return (
		<div>
			<div className='w-full text-center text-2xl md:text-2xl font-bold'>
				<div className=' text-2xl m-1'>OUR LATEST PRODUCT'S </div>
				{/* <div className='text-md'>Total Item : {data.length}</div> */}
				<div className='text-md'>{dataAll.length === 0 && <span>No Data Found</span>}</div>
			</div>
			<section className='text-gray-600 body-font'>
				<div className='container mx-auto flex px-2  md:flex-row flex-col items-center'>
					<div className='lg:max-w-lg lg:w-64 lg:h-screen'>
						<div className=' flex flex-col items-center justify-center '>
							<div className=''>search</div>
							<Search value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} />
							<span className=' my-2'>Sort product</span>
							<select value={sort} onChange={(e) => setSort(e.target.value)}>
								<option value='latest'>Latest</option>
								<option value='lowest-price'>Lowest-Price</option>
								<option value='hight-price'>High-Price</option>
								<option value='a-z'>A-Z</option>
								<option value='z-a'>Z-A</option>
							</select>
							<span className=' mt-4'>Filter By Category :</span>
							<FilterByCategory />
						</div>
					</div>
					{isLoading ? (
						<Spinner></Spinner>
					) : (
						<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center '>
							<div className='w-auto'>
								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-12 mx-16'>
									{currentProducts?.map((value, i) => (
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
				<Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} productsPerPage={productsPerPage} totalProducts={filteredProducts.length} />;
			</section>
			;<div className='flex items-center content-center'></div>
		</div>
	);
};

export default Product;
