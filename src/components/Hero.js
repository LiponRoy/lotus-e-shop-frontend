import React from 'react';

function Hero() {
	return (
		<div>
			<div className='h-[470px] md:h-[670px] w-full grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-[#3498DB] to-slate-100'>
				<div className='h-screen w-full flex flex-col justify-center items-center text-6xl text-right font-bold'>
					<div className='flex justify-center items-center'>
						<div className='flex flex-col justify-center items-end text-4xl md:text-6xl'>
							<span className=' text-[#FF9F43]'>UPTO 60% OFF</span>
							<span>ON EVERY NEW</span>
							<span>ARAVEL</span>
							<span>COLLECTION</span>
							<a class='w-32  text-white text-sm text-center bg-yellow-400 p-2 py-4 px-4 mt-8 rounded-full'>Explore Now</a>
						</div>
						<div className='md:hidden textPart h-screen w-full flex flex-col justify-center items-center'>
							<img className='w-[50%]' src='/img/lady.png' alt='no imag' />
						</div>
					</div>
				</div>
				<div className='textPart h-screen w-full hidden md:flex flex-col justify-center items-center'>
					<img className='w-[42%]' src='/img/lady.png' alt='no imag' />
				</div>
			</div>
		</div>
	);
}

export default Hero;
