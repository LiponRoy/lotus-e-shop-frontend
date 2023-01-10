import React from 'react';

const Product = () => {
	return (
		<div className=''>
			<div className='w-full text-center text-2xl md:text-4xl font-bold mt-4'>OUR LATEST PRODUCT</div>;
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-12 mx-16'>
				<div className='relative w-full h-[400px] flex justify-center items-center bg-slate-200 rounded-md'>
					<span>Product 1</span>
				</div>
				<div className='relative w-full h-[400px] flex justify-center items-center bg-slate-200 rounded-md'>
					<span>Product 2</span>
				</div>
				<div className='relative w-full h-[400px] flex justify-center items-center bg-slate-200 rounded-md'>
					<span>Product 3</span>
				</div>
				<div className='relative w-full h-[400px] flex justify-center items-center bg-slate-200  rounded-md'>
					<span>Product 4</span>
				</div>
			</div>
		</div>
	);
};

export default Product;
