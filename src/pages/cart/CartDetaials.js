import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeCart, removeAllCart, decreaseQuantity, IncreaseQuantity, TotalsAmmount } from '../../features/cart/cartSlice';
import { FcFullTrash } from 'react-icons/fc';
const CartDetaials = () => {
	const dispatch = useDispatch();
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
			<div className=' flex justify-center items-center'>
				<div className=' grid grid-cols-1 md:grid-cols-2 mt-5'>
					<div className=' '>
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
					<div className='w-full flex items-start justify-center text-2xl bg-red-400 bg-slate-100 rounded'>
						<div className='flex flex-col'>
							<span>Total Price : {totalPrice} TK</span>
							<span>Total Quantity : {totalQuantity} </span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartDetaials;
