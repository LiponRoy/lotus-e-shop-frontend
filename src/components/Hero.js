import React from 'react';

const Hero = () => {
	return (
		<div>
			<section className='px-3 py-5 bg-neutral-100 lg:py-10'>
				<div className='grid lg:grid-cols-2 items-center justify-items-center gap-5'>
					<div className='order-2 lg:order-1 flex flex-col justify-center items-center md:items-start'>
						<span className='text-4xl font-bold md:text-7xl text-[#FF9F43]'>UPTO 60% OFF</span>
						<span className='text-3xl font-bold md:text-5xl mt-4'>ON EVERY NEW</span>
						<span className='text-3xl font-bold md:text-5xl mt-2'>ARAVEL</span>
						<span className='text-3xl font-bold md:text-5xl mt-2'>COLLECTION</span>
						<button className='text-md md:text-2xl btn btn-md btn-warning text-white py-2 px-5 mt-2 md:mt-10 hover:bg-zinc-800'>Explore Now</button>
					</div>
					<div className='order-1 lg:order-2 bg-[#FF9F43] rounded-full'>
						<img className='h-80 w-80 object-contain lg:w-[500px] lg:h-[500px]' src='/img/lady.png' alt='' />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Hero;
