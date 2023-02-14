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
						<div className='logo'>
							<span>Lotus E Shop</span>
						</div>
					</div>
					<div className='middleSide'>
						<div className='allLink' id={showLinks ? 'notHidden' : ''}>
							<NavLink onClick={closeFunc} className={activeLink} to='/'>
								<span className='everyLink'>Home</span>
							</NavLink>
							<NavLink onClick={closeFunc} className={activeLink} to='/products'>
								<span className='everyLink'>Product</span>
							</NavLink>
							<NavLink onClick={closeFunc} className={activeLink} to='/about'>
								<span className='everyLink'>About</span>
							</NavLink>
							<div className='md:hidden'>
								{/* <span>/ {user && user.name}</span> */}
								{user ? (
									<button className='btn-sm m-4 md:btn btn-warning ' onClick={onLogout}>
										Logout
									</button>
								) : (
									<span className='mx-2 text-2xl btn-sm m-4 md:btn btn-warning'>
										<NavLink onClick={closeFunc} className={activeLink} to='/login'>
											Login
										</NavLink>
									</span>
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
						{user && <span className='m-5 font-bold text-white'>Hi,{user.name}</span>}
						{user ? (
							<button className='btn btn-warning ' onClick={onLogout}>
								Signout
							</button>
						) : (
							<span className='mx-2 text-2xl btn btn-warning'>
								<NavLink onClick={closeFunc} className={activeLink} to='/login'>
									Signin
								</NavLink>
							</span>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default NavbarTwo;
