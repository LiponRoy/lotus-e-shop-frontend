import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaRegWindowClose, FaSearch } from 'react-icons/fa';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useGetProfileQuery, useLogOutMutation } from '../../features/authApi';

const NavbarTwo = () => {
	const [showLinks, setShowLink] = useState(false);
	const navigate = useNavigate();
	const { data: profileInfo, isLoading } = useGetProfileQuery();
	const [logOut, { isSuccess, isError }] = useLogOutMutation();

	const logOutUser = () => {
		logOut();
		console.log('logout');
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
							<button onClick={() => logOutUser()} className={({ isActive }) => (isActive ? ' active-myLink' : ' myLink')}>
								{profileInfo ? 'Logout' : 'Login'}
							</button>
							<span className=' text-orange-400'>{profileInfo && profileInfo.user.name}</span>
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
