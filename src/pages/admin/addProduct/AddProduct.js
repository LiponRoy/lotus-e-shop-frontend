// import { useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import { useCreateTaskMutation } from '../../../features/ProductApi';
// //import { PrimaryButton } from './CommonStyled';
// //import { productsCreate } from '../../slices/productsSlice';
// import './AddProduct.css';

// const AddProduct = () => {
// 	const [createTask, { isLoading, isSuccess }] = useCreateTaskMutation();
// 	//const dispatch = useDispatch();
// 	//const { createStatus } = useSelector((state) => state.products);

// 	const [productImg, setProductImg] = useState('');
// 	const [brand, setBrand] = useState('');
// 	const [name, setName] = useState('');
// 	const [price, setPrice] = useState('');
// 	const [desc, setDesc] = useState('');

// 	const handleProductImageUpload = (e) => {
// 		const file = e.target.files[0];

// 		TransformFileData(file);
// 	};

// 	const TransformFileData = (file) => {
// 		const reader = new FileReader();

// 		if (file) {
// 			reader.readAsDataURL(file);
// 			reader.onloadend = () => {
// 				setProductImg(reader.result);
// 			};
// 		} else {
// 			setProductImg('');
// 		}
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		await createTask({
// 			name,
// 			brand,
// 			price,
// 			desc,
// 			image: productImg,
// 		});
// 		console.log(' submitting properly ');
// 	};

// 	return (
// 		<div className='grid grid-cols-1 md:grid-cols-2'>
// 			{/* image preview */}
// 			<div className='hidden md:flex justify-center items-center'>
// 				<div className='bg-slate-500 w-[400px] h-[400px] bg-slate-400 flex justify-center items-center text-white rounded-md'>
// 					{productImg ? (
// 						<>
// 							<img className=' w-[350px] h-[350px] bg-slate-200 flex justify-center items-center rounded-md' src={productImg} alt='error!' />
// 						</>
// 					) : (
// 						<p className=' flex justify-center items-center text-2xl'>Image preview !</p>
// 					)}
// 				</div>
// 			</div>
// 			{/* image preview */}
// 			{/* Form */}
// 			<div className=' flex flex-col items-center justify-center w-full h-screen ' onSubmit={handleSubmit}>
// 				<span className=' text-2xl mb-4 font-bold'>Create a Product</span>
// 				<input className=' w-[400px] h-10 bg-slate-200 pl-2 my-2 ' id='imgUpload' accept='image/*' type='file' onChange={handleProductImageUpload} required />
// 				<select className=' w-[400px] h-8 bg-slate-200 pl-2 my-2' onChange={(e) => setBrand(e.target.value)} required>
// 					<option value=''>Select Brand</option>
// 					<option value='iphone'>iPhone</option>
// 					<option value='samsung'>Samsung</option>
// 					<option value='xiomi'>Xiomi</option>
// 					<option value='other'>Other</option>
// 				</select>
// 				<input className=' w-[400px] h-10 bg-slate-200 pl-2 my-2' type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} required />
// 				<input className=' w-[400px] h-10 bg-slate-200 pl-2 my-2' type='number' placeholder='Price' onChange={(e) => setPrice(e.target.value)} required />
// 				<input className=' w-[400px] h-10 bg-slate-200 pl-2 my-2' type='text' placeholder='Short Description' onChange={(e) => setDesc(e.target.value)} required />

// 				<button type='submit'>{isLoading ? 'Submitting' : 'Submit'}</button>
// 				{/* <button className=' w-[400px] h-10 bg-slate-500 text-white pl-2 my-2' type='submit'>
// 					submit
// 				</button> */}
// 			</div>
// 		</div>
// 	);
// };

// export default AddProduct;
