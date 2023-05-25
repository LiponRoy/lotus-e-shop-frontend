import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner.js';
import { addToCart } from '../../features/cart/cartSlice.js';
import { productFetchOne, reset } from '../../features/products/ProductSlice.js';

const ProductDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { singleData, isLoading, isError, message } = useSelector((state) => state.productRedux);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		dispatch(productFetchOne(id));
	}, [dispatch]);

	const goBackHomePage = () => {
		navigate('/');
	};
	const addToCartData = (singleProduct) => {
		dispatch(addToCart(singleProduct));
	};

	return (
		<div>
			{isLoading ? (
				<Spinner></Spinner>
			) : (
				<div className='whf fm'>
					<div className='grid grid-cols-1 md:grid-cols-2'>
						<div className='relative overflow-hidden bg-no-repeat bg-cover rounded-3xl'>
							<img src={singleData?.image?.url} className=' w-[300px] md:w-[500px] hover:scale-110 transition duration-300 ease-in-out' alt='noImg' />
						</div>
						<div className=' flex flex-col justify-center items-start mt-4 md:ml-14 my-2 md:gap-y-4'>
							<p className='text-2xl md:text-4xl font-bold capitalize'>{singleData?.name}</p>
							<span className='text-2xl md:text-4xl mt-2 font-semibold '>
								<span className=' mr-4'>TK</span>
								{singleData?.price}
							</span>

							<p className=''>{singleData?.desc + 'something new '} </p>
							<div className=' flex space-x-2'>
								<button onClick={() => goBackHomePage()} className='btn btn-md mt-2'>
									BACK TO HOME
								</button>
								<button onClick={() => addToCartData(singleData)} className='btn btn-md mt-2'>
									Add To Card
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetails;
