import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeCart } from '../../features/cart/cartSlice';

const CartDetaials = () => {
	const dispatch = useDispatch();
	const { cartProducts } = useSelector((state) => state.cartAll);

	useEffect(() => {}, [cartProducts]);

	const removeItem = (item) => {
		dispatch(removeCart(item));
	};
	return (
		<div>
			{cartProducts.length === 0 && <spn> Your Cart is Empty</spn>}

			<div className='ProductsOfCart'>
				{cartProducts?.map((item) => (
					<div key={item._id} className='product'>
						<img src={item?.image.url} alt='' width='212px' height='212px' />
						<span>{item.name}</span>
						<span>{item.brand}</span>
						<span>{item.price}</span>
						<span>Total Price:{item.price * item.cartQuantity}</span>
						<button onClick={() => removeItem(item)}> REMOVE</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default CartDetaials;
