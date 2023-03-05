import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner.js';
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
	}, []);

	const goBackHomePage = () => {
		navigate('/');
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
						<div className=' flex flex-col justify-center items-start ml-14'>
							<span className='text-4xl mt-2 font-semibold '>
								{singleData?.price}
								<span className='text-xl'>TK</span>
							</span>
							<button className='btn btn-md btn-warning mt-2'>Buy now</button>
							<p className='text-xl font-semibold'>{singleData?.name}</p>
							<p className=''>{singleData?.desc}</p>
							<button onClick={() => goBackHomePage()} className='btn btn-md mt-2'>
								BACK TO HOME
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetails;
