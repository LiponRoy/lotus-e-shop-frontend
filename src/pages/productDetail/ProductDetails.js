import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner.js';
import { productFetchOne, reset } from '../../features/products/ProductSlice2.js';

const ProductDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { singleData, isLoading, isSuccess, isError, message } = useSelector((state) => state.products2);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		if (isSuccess) {
			dispatch(productFetchOne(id));
		}

		// return () => {
		// 	dispatch(reset());
		// };
	}, [isError, isSuccess, message, dispatch]);

	const goBackHomePage = () => {
		navigate('/');
	};

	{
		isLoading && (
			<span>
				<Spinner></Spinner>
			</span>
		);
	}

	return (
		<div>
			{isLoading ? (
				<Spinner></Spinner>
			) : (
				<div className=' whf fm'>
					<div className='relative overflow-hidden bg-no-repeat bg-cover max-w-xs rounded-sm'>
						<img src={singleData?.image?.url} width={300} className='hover:scale-110 transition duration-300 ease-in-out' alt='noImg' />
					</div>
					<div className='  flex flex-col items-center content-center'>
						<span className='text-2xl mt-2 font-semibold '>
							{singleData?.price}
							<span className='text-xl'>TK</span>
						</span>
						<button className='btn btn-sm btn-warning m-1 ml-2'>Buy now</button>
						<p className='text-xl font-semibold'>{singleData?.name}</p>
						<p className=''>{singleData?.desc}</p>
						<button onClick={() => goBackHomePage()} className='btn btn-sm m-1 ml-2'>
							BACK TO HOME
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetails;
