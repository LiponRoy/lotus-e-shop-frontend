import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Product from '../product/Product';
import UpcomingProduct from '../components/upcomingProduct/UpcomingProduct';

const Home = () => {
	return (
		<div>
			<Hero></Hero>
			<UpcomingProduct></UpcomingProduct>
			<Product></Product>
			<Footer></Footer>
		</div>
	);
};

export default Home;
