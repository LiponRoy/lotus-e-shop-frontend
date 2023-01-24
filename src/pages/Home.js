import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Product from '../product/Product';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}

		// return () => {
		// 	dispatch(reset());
		// };
	}, [user, navigate, dispatch]);

	return (
		<div>
			<Hero></Hero>
			{/* <Product></Product> */}
		</div>
	);
};

export default Home;
