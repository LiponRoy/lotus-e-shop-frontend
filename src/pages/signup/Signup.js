import React, { useEffect, useState } from 'react';
import '../signup/Signup.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useSignupAuthMutation } from '../../features/authApi';
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
	const [signupAuth, { data: userData, isSuccess, isError, isLoading, error }] = useSignupAuthMutation();

	useEffect(() => {
		if (isSuccess) {
			navigate('/');
		}
		if (isError) {
			console.log(error);
		}
	}, [isSuccess, error]);

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
		await signupAuth(data);
		console.log(data);
		console.log('next data is : ' + userData);
	};
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
						{/* <label className=' font-bold'>Confirma Password</label>
						<br></br>
						<input className='form-Input-me' type='text' {...register('PasswordConfirmation')} />
						<p className='errMessage'>{errors.PasswordConfirmation?.message}</p> */}

						<button className='signup-form-submit-me rounded-sm' type='submit'>
							Signup
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Signup;
