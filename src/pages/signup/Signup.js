import React, { useEffect, useState } from 'react';
import '../signup/Signup.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// yup schema
const schema = yup
	.object({
		Name: yup
			.string()
			.matches(/^[A-Za-z ]*$/, 'Please enter valid name')
			.max(40)
			.min(3)
			.required('Name is required'),
		Email: yup.string().email('Invalid email format').required('Mail is required'),
		Password: yup.string().required('Password is required'),
		PasswordConfirmation: yup.string().oneOf([yup.ref('Password'), null], 'Passwords must match'),
	})
	.required();
//End yup schema

const Signup = () => {
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
				<div className='my-signup-form bg-gradient-to-b from-[#B0D6EF] to-slate-100'>
					<h1 className='heading_text'>SIGNUP</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input className='form-Input-me' placeholder='Name' type='text' {...register('Name')} />
						<p className='errMessage'>{errors.Name?.message}</p>
						<input className='form-Input-me' placeholder='Email' type='text' {...register('Email')} />
						<p className='errMessage'>{errors.Email?.message}</p>
						<input className='form-Input-me' placeholder='Password' type='text' {...register('Password')} />
						<p className='errMessage'>{errors.Password?.message}</p>
						<input className='form-Input-me' placeholder='Confirma Password' type='text' {...register('PasswordConfirmation')} />
						<p className='errMessage'>{errors.PasswordConfirmation?.message}</p>

						<input className='form-submit-me' type='submit' />
					</form>
				</div>
			</div>
		</>
	);
};

export default Signup;
