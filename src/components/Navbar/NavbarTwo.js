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
					<div className='middleSide'></div>
					<div className='rightSide'>
						<div className='allLink' id={showLinks ? 'notHidden' : ''}>
							<Link onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : ' myLink')} to='/'>
								Home
							</Link>
							<Link onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : ' myLink')} to='/products'>
								Product
							</Link>
							<Link onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : ' myLink')} to='/about'>
								About
							</Link>
							<span>/ {user && user.name}</span>
							{user ? (
								<button className='btn' onClick={onLogout}>
									<FaSignOutAlt /> Logout
								</button>
							) : (
								<span className='mx-2 text-2xl'>
									<Link onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : ' myLink')} to='/login'>
										<FaSignInAlt /> Login
									</Link>
								</span>
							)}
						</div>
						<div className='toggleBut' onClick={() => setShowLink(!showLinks)}>
							{showLinks ? <FaRegWindowClose></FaRegWindowClose> : <FaBars></FaBars>}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavbarTwo;
