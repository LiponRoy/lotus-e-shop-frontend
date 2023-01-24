import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useGetProfileQuery } from '../../features/authApi';

const RequireAuth = ({ children }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	// if (loading) {
	// 	return <Loading></Loading>;
	// }

	if (!user) {
		return navigate('/login');
	} else {
		return children;
	}
};

export default RequireAuth;
