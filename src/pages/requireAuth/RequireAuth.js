import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useGetProfileQuery } from '../../features/authApi';

const RequireAuth = ({ children }) => {
	const { data: user, isLoading } = useGetProfileQuery();
	const location = useLocation();
	//const navigate = useNavigate();

	// if (loading) {
	// 	return <Loading></Loading>;
	// }

	if (!user) {
		return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
	} else {
		return children;
	}
};

export default RequireAuth;
