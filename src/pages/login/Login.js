import React, { useEffect, useState } from 'react';
import '../login/Login.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLoginAuthMutation } from '../../features/authApi';
import { useNavigate } from 'react-router-dom';

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
	const [loginAuth, { isSuccess, isError, isLoading, error }] = useLoginAuthMutation();
	// yup schema and hook form

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	// End yup schema and hook form

	useEffect(() => {
		if (isSuccess) {
			console.log('login success');
			navigate('/');
		}
	}, [isSuccess]);

	const onSubmit = async (data) => {
		await loginAuth(data);
		//  console.log(data);

		if (isSuccess) {
			console.log('login success');
		}
	};
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

						<button className='login-form-submit-me rounded-sm' type='submit'>
							Login
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
