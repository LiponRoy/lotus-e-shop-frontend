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
							{/* <NavLink onClick={closeFunc} className={activeLink} to='/'>
								<span className='everyLink'>Home</span>
							</NavLink> */}

							<div className='md:hidden'>
								{/* <span>/ {user && user.name}</span> */}
								{user ? (
									<button className='text-white border-2 p-2' onClick={onLogout}>
										Logout
									</button>
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
						{user && <span className='m-5 font-bold text-white'>Hi,{user.name}</span>}
						{user ? (
							<button className=' text-white border-2 p-2' onClick={onLogout}>
								Signout
							</button>
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
