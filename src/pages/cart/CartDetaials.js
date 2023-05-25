import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeCart, removeAllCart, decreaseQuantity, IncreaseQuantity, TotalsAmmount } from '../../features/cart/cartSlice';
import { FcFullTrash } from 'react-icons/fc';

const CartDetaials = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { cartProducts, totalQuantity, totalPrice } = useSelector((state) => state.cartAll);

	useEffect(() => {
		dispatch(TotalsAmmount());
	}, [cartProducts]);

	const removeItem = (item) => {
		dispatch(removeCart(item));
	};
	const allRemove = (item) => {
		dispatch(removeAllCart(item));
	};
	const decrease = (item) => {
		dispatch(decreaseQuantity(item));
	};
	const increase = (item) => {
		dispatch(IncreaseQuantity(item));
	};
	return (
		<div>
			<div className=' flex justify-center items-center '>
				<div className=' grid grid-cols-1 md:grid-cols-2 gap-24 mt-20'>
					<div className=' mx-6'>
						{cartProducts.length === 0 && <spn> Your Cart is Empty</spn>}
						{cartProducts?.map((item) => (
							<div key={item._id} className=' flex items-center  w-full my-4'>
								<div>
									<img className=' rounded-md' src={item?.image.url} alt='' width='160px' height='160px' />
								</div>

								<div className=' flex flex-col justify-center  ml-10 '>
									<span className=' text-xl'>{item.name}</span>
									{/* <span>{item.brand}</span> */}
									<span>Price: {item.price} TK</span>
									<span>Quantity: {item.cartQuantity} </span>
									<span>Total Price: {item.price * item.cartQuantity} TK</span>
									<div className='mt-2 text-2xl'>
										<button onClick={() => decrease(item)} class=' mr-4 font-medium'>
											-
										</button>
										<span>{item.cartQuantity}</span>
										<button onClick={() => increase(item)} class=' ml-4 '>
											+
										</button>
									</div>
									<button className='mt-2 text-md text-start font-bold flex items-center' onClick={() => removeItem(item)}>
										Remove <FcFullTrash></FcFullTrash>
									</button>
								</div>
							</div>
						))}
						{cartProducts.length !== 0 && (
							<button className='btn btn-outline mt-2' onClick={() => allRemove()}>
								CLEAR ALL
							</button>
						)}
					</div>
					<div className='mx-6 w-full max-h-8 flex items-center justify-center text-2xl'>
						<div class='card w-96 bg-base-100 shadow-xl'>
							<div class='card-body'>
								<h2 class='card-title text-2xl text-white bg-[#646464] p-[12px] '>ORDER SUMMARY!</h2>
								<div className=' my-5'>
									<div className=' flex item-center justify-between mx-2'>
										<span>Total Price :</span>
										<span className=' font-bold'>{totalPrice} TK</span>
									</div>
									<div className=' flex item-center justify-between mx-2'>
										<span>Total product :</span>
										<span className=' font-bold'>{cartProducts.length}</span>
									</div>
									<div className=' flex item-center justify-between mx-2'>
										<span>Total Quantity :</span>
										<span className=' font-bold'>{totalQuantity} </span>
									</div>
								</div>
								<button onClick={() => navigate('/payment')} class='btn btn-outline mt-20'>
									Checkout
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartDetaials;
