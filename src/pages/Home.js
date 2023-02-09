import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Product from '../product/Product';
import Exam from '../product/Exam';

const Home = () => {
	return (
		<div>
			<Hero></Hero>
			<Product></Product>
			{/* <Exam></Exam> */}
		</div>
	);
};

export default Home;
