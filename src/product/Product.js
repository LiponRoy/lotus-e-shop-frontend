import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import Spinner from '../components/Spinner';
import { productsFetch } from '../features/products/ProductSlice';
import { addToCart } from '../features/cart/cartSlice';
import { BsFillBasket2Fill } from 'react-icons/bs';
import Search from '../components/search/Search';
import { FILTER_BY_SEARCH } from '../features/filter/filterSlice';

const Product = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { dataAll, isLoading, isError, message } = useSelector((state) => state.productRedux);
	const { filteredProducts } = useSelector((state) => state.filterS);

	// for search item
	const [searchProduct, setSearchProduct] = useState('');

	useEffect(() => {
		dispatch(productsFetch());
	}, []);

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
						<Search value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} />
					</div>
					{isLoading ? (
						<Spinner></Spinner>
					) : (
						<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center '>
							<div className='w-auto'>
								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-12 mx-16'>
									{filteredProducts?.map((value, i) => (
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
		</div>
	);
};

export default Product;
