import React, { useEffect, useState } from 'react';
import '../signup/Signup.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { registerApi, reset } from '../../features/auth/authSlice';
import Spinner from '../../components/Spinner';
// yup schema
const schema = yup
	.object({
		name: yup
			.string()
			.matches(/^[A-Za-z ]*$/, 'Please enter valid name')
			.max(40)
			.min(3)
			.required('Name is required'),
		email: yup.string().email('Invalid email format').required('Email is required'),
		password: yup.string().required('Password is required'),
		// PasswordConfirmation: yup.string().oneOf([yup.ref('Password'), null], 'Passwords must match'),
	})
	.required();
//End yup schema

const Signup = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess || user) {
			navigate('/');
		}

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	// yup schema and hook form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	// End yup schema and hook form
	const onSubmit = async (data) => {
		await dispatch(registerApi(data));

		// await signupAuth(data);
		// console.log(data);
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<div className='form-container bg-gradient-to-b from-[#3498DB] to-slate-100'>
				<div className='my-signup-form bg-gradient-to-b from-[#B0D6EF] to-slate-100'>
					<h1 className='heading_text text-center'>SIGNUP</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label className=' font-bold'>Name</label>
						<br></br>
						<input className='form-Input-me' type='text' {...register('name')} />
						<p className='errMessage'>{errors.name?.message}</p>
						<label className=' font-bold'>Email</label>
						<br></br>
						<input className='form-Input-me' type='text' {...register('email')} />
						<p className='errMessage'>{errors.email?.message}</p>
						<label className=' font-bold'>Password</label>
						<br></br>
						<input className='form-Input-me' type='text' {...register('password')} />
						<p className='errMessage'>{errors.password?.message}</p>
						<div className=' flex items-center justify-between'>
							<button className='signup-form-submit-me rounded-sm text-black' type='submit'>
								Signup
							</button>
							<span className=' cursor-pointer underline text-slate-900' onClick={() => navigate('/login')}>
								Go for login
							</span>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Signup;
