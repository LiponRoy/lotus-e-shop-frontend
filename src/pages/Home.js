import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Product from '../product/Product';

const Home = () => {
	return (
		<div>
			<Hero></Hero>
			<Product></Product>
			<Footer></Footer>
		</div>
	);
};

export default Home;
