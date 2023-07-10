import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaRegWindowClose, FaSearch } from 'react-icons/fa';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutApi, reset } from '../../features/auth/authSlice';
import { BsBasket3Fill } from 'react-icons/bs';
import { removeAllCart } from '../../features/cart/cartSlice';

const NavbarTwo = () => {
	const [showLinks, setShowLink] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	const { cartProducts } = useSelector((state) => state.cartAll);

	const onLogout = () => {
		dispatch(logoutApi());
		dispatch(reset());
		navigate('/');

		// remove this user all cart also
		dispatch(removeAllCart());
	};

	const closeFunc = () => {
		setShowLink(false);
	};

	const activeLink = ({ isActive }) => (isActive ? ' active-myLink' : ' myLink');
	const cartAdding = (
		<div className=' text-white mr-8 p-[4px] px-[8px] text-lg border-2 border-gray-400'>
			<NavLink className='flex gap-x-1' to='/cartDetaials '>
				<BsBasket3Fill></BsBasket3Fill>
				 Cart Detail : <span className='text-red-200 font-bold'>{cartProducts.length}</span>
			</NavLink>
		</div>
	);

	return (
		<>
			<div className='container-fluid'>
				<div className='liponNav'>
					<div className='leftSide '>
						<NavLink className=' text-[1rem] md:text-[1.2rem]  xl:text-[1.5rem] text-white font-bold' to='/'>
							Lotus <span className=' bg-[#FF9F43] p-1 md:px-4 rounded-md'>E Shop</span>
						</NavLink>
					</div>
					<div className='middleSide '>
						<div className='allLink' id={showLinks ? 'notHidden' : ''}>
							<div className='md:hidden'>
								{user ? (
									<div className=' flex flex-col items-center justify-center gap-y-4  text-2xl'>
										<div className=' gap-y-4'>
											<NavLink className='flex gap-x-1' to='/cartDetaials '>
											Cart Detail : <span className='text-red-200 font-bold'>{cartProducts.length}</span>
											</NavLink>
										</div>
										
										<button className='text-white  p-2' onClick={onLogout}>
											Logout
										</button>
									</div>
								) : (
									<div className=' flex flex-col justify-center items-center '>
										<span className='m-4'>
											<NavLink onClick={closeFunc} className={activeLink} to='/cartDetaials '>
												Cart Detail : <span className='text-red-200 font-bold'>{cartProducts.length}</span>
											</NavLink>
										</span>
										<span className='m-4'>
											<NavLink onClick={closeFunc} className={activeLink} to='/login'>
												Login
											</NavLink>
										</span>
										<span className='m-4'>
											<NavLink onClick={closeFunc} className={activeLink} to='/signup'>
												Signup
											</NavLink>
										</span>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className='rightSide'>
						<div className='toggleBut' onClick={() => setShowLink(!showLinks)}>
							{showLinks ? <FaRegWindowClose></FaRegWindowClose> : <FaBars></FaBars>}
						</div>
					</div>
					<div className='hidden md:block flex'>
						{user ? (
							<div className=' flex items-center gap-4'>
								{cartAdding}
								<span className=' font-bold text-white'>Hi,{user.name}</span>
								<span className='m-4'>
											
										</span>
								<button className=' text-white border-2 p-2 border-gray-300' onClick={onLogout}>
									Signout
								</button>
							</div>
						) : (
							<span className='fm'>
								{cartAdding}
								<div className='mx-2'>
									<NavLink onClick={closeFunc} className={activeLink} to='/login'>
										Signin
									</NavLink>
								</div>
								<div className='mx-2'>
									<NavLink onClick={closeFunc} className={activeLink} to='/signup'>
										Signup
									</NavLink>
								</div>
							</span>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default NavbarTwo;
