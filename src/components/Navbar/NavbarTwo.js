import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaRegWindowClose, FaSearch } from 'react-icons/fa';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutApi, reset } from '../../features/auth/authSlice';

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
	};

	const closeFunc = () => {
		setShowLink(false);
	};

	const activeLink = ({ isActive }) => (isActive ? ' active-myLink' : ' myLink');

	return (
		<>
			<div className='container-fluid fixed-top'>
				<div className='liponNav'>
					<div className='leftSide'>
						<NavLink className=' text-xl md:text-2xl text-white font-bold' to='/'>
							Lotus <span className=' bg-[#FF9F43] p-1 md:px-4 rounded-md'>E Shop</span>
						</NavLink>
					</div>
					<div className='middleSide'>
						<div className='allLink' id={showLinks ? 'notHidden' : ''}>
							<div className='md:hidden'>
								{user ? (
									<div className=''>
										<button className='text-white border-2 p-2' onClick={onLogout}>
											Logout
										</button>
									</div>
								) : (
									<div className=''>
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
					<div className='hidden md:block'>
						{user ? (
							<div className=' flex items-center gap-4'>
								<div className=' text-white'>
									<NavLink to='/cartDetaials '>
										Cart : <span className='text-red-200 font-bold'>{cartProducts.length}</span>
									</NavLink>
								</div>
								<span className=' font-bold text-white'>Hi,{user.name}</span>

								<button className=' text-white border-2 p-2' onClick={onLogout}>
									Signout
								</button>
							</div>
						) : (
							<span className='fm'>
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
