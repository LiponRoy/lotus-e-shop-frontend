import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Product from '../product/Product';

const Home = () => {
	const navigate = useNavigate();

	return (
		<div>
			<Hero></Hero>
			{/* <Product></Product> */}
		</div>
	);
};

export default Home;
