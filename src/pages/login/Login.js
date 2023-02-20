import React, { useEffect, useState } from 'react';
import '../login/Login.css';
import { useForm } from 'react-hook-form';
import { FaSignInAlt } from 'react-icons/fa';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginApi, reset } from '../../features/auth/authSlice';
import Spinner from '../../components/Spinner';

// yup schema
const schema = yup
	.object({
		email: yup.string().email('Invalid email format').required('Email is required'),
		password: yup.string().required('Password is required'),
	})
	.required();
//End yup schema

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (user) {
			navigate('/');
		}

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	// End yup schema and hook form

	const onSubmit = async (data) => {
		console.log(data);
		dispatch(loginApi(data));

		// await loginAuth(data);
		// //  console.log(data);
		// if (isSuccess) {
		// 	console.log('login success');
		// }
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<div className='form-container bg-gradient-to-b from-[#3498DB] to-slate-100'>
				<div className=' my-signup-form bg-gradient-to-b from-[#B0D6EF] to-slate-100'>
					<h1 className='heading_text text-center'>Login</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label className=' font-bold'>Email</label>
						<br></br>
						<input className='form-Input-me' type='text' {...register('email')} />
						<p className='errMessage'>{errors.email?.message}</p>
						<label className=' font-bold'>Password</label>
						<br></br>
						<input className='form-Input-me' type='text' {...register('password')} />
						<p className='errMessage'>{errors.password?.message}</p>

						<div className=' flex items-center justify-between'>
							<button className='login-form-submit-me rounded-sm text-black' type='submit'>
								Login
							</button>
							<span className=' cursor-pointer underline text-slate-900' onClick={() => navigate('/signup')}>
								Go for signup
							</span>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
