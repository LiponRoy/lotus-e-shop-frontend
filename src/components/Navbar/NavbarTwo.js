import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaRegWindowClose, FaSearch } from 'react-icons/fa';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
const NavbarTwo = () => {
	const [showLinks, setShowLink] = useState(false);
	const navigate = useNavigate();

	const closeFunc = () => {
		setShowLink(false);
	};
	return (
		<>
			<div className='container-fluid fixed-top'>
				<div className='liponNav'>
					<div className='leftSide'>
						<div className='logo'>
							<span>LR Furniture</span>
						</div>
					</div>
					<div className='middleSide'>
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
							<button onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : ' myLink')}>
								SignIn
							</button>
						</div>
					</div>
					<div className='rightSide'>
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
