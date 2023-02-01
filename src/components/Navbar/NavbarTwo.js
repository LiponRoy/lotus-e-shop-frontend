import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
							<Link onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : ' myLink')} to='/'>
								<span className='everyLink'>Home</span>
							</Link>
							<Link onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : ' myLink')} to='/products'>
								<span className='everyLink'>Product</span>
							</Link>
							<Link onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : ' myLink')} to='/about'>
								<span className='everyLink'>About</span>
							</Link>
							<div className='md:hidden'>
								{/* <span>/ {user && user.name}</span> */}
								{user ? (
									<button className='btn btn-warning' onClick={onLogout}>
										Logout
									</button>
								) : (
									<span className='mx-2 text-2xl btn btn-warning'>
										<Link onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : ' myLink')} to='/login'>
											Login
										</Link>
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
						{/* <span>/ {user && user.name}</span> */}
						{user ? (
							<button className='btn btn-warning ' onClick={onLogout}>
								Signout
							</button>
						) : (
							<span className='mx-2 text-2xl'>
								<Link onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : ' myLink')} to='/login'>
									Signin
								</Link>
							</span>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default NavbarTwo;
