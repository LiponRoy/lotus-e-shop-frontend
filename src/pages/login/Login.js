import React, { useEffect, useState } from 'react';
import '../login/Login.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// yup schema
const schema = yup
	.object({
		Email: yup.string().email('Invalid email format').required('Email is required'),
		Password: yup.string().required('Password is required'),
	})
	.required();
//End yup schema

const Login = () => {
	// yup schema and hook form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	// End yup schema and hook form

	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<>
			<div className='form-container bg-gradient-to-b from-[#3498DB] to-slate-100'>
				<div className=' my-signup-form bg-gradient-to-b from-[#B0D6EF] to-slate-100'>
					<h1 className='heading_text text-center'>Login</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label className=' font-bold'>Email</label>
						<br></br>
						<input className='form-Input-me' type='text' {...register('Email')} />
						<p className='errMessage'>{errors.Email?.message}</p>
						<label className=' font-bold'>Password</label>
						<br></br>
						<input className='form-Input-me' type='text' {...register('Password')} />
						<p className='errMessage'>{errors.Password?.message}</p>

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
