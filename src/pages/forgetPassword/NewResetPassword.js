import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { newPasswordApi, reset } from '../../features/auth/authSlice';

// yup schema
const schema = yup
	.object({
		password: yup.string().required('Password is required'),
		confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
	})
	.required();
//End yup schema

const NewResetPassword = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { resetToken } = useParams();

	const { resetNewPassword, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (resetNewPassword != null) {
			toast.success('Password updated');
		}

		// if (newRestPassword) {
		// 	toast.success('Password reset successfully');
		// }

		// dispatch(reset());
	}, [isError, isSuccess, message, navigate, dispatch]);

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
		const { password } = data;
		console.log(resetToken, data);
		await dispatch(newPasswordApi(resetToken, password));
	};

	return (
		<div>
			<div className={div1}>
				<div className={div2}>
					<div className={div3}>
						<h1 className='mb-8 text-3xl text-center'>New Password</h1>
						<form onSubmit={handleSubmit(onSubmit)}>
							<input className={inputs} placeholder='Password' type='password' {...register('password')} />
							<p className=' text-red-800 text-sm'>{errors.password?.message}</p>

							<button type='submit' disabled={isLoading} className={submitButton}>
								Create New Password
							</button>
						</form>
						<div className='text-grey-dark mt-6 text-blue-700'>
							<Link to='/signIn'>Going for Login</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const div1 = 'bg-grey-lighter min-h-screen flex flex-col ';
const div2 = 'container max-w-sm md:max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2';
const div3 = 'bg-white px-6 py-8 rounded shadow-lg  border-2 border-slate-200 text-black w-full';
const inputs = 'block border-2 border-slate-200 w-full p-3 rounded mt-4 mb-1';
const submitButton = 'w-full text-center py-3 rounded bg-green-500 text-white ';
export default NewResetPassword;
