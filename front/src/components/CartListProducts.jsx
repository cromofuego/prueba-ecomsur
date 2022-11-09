import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProductFromCart } from "../slice/sliceProducts";

const CartListProducts = () => {
	const cart = useSelector((state) => state.products.cart);
	const dispatch = useDispatch();
	const handleClick = (indexProduct) => {
		dispatch(removeProductFromCart(indexProduct));
	};
	return (
		<div className='container-articles'>
			{cart?.length === 0 && (
				<h3 className='empty-cart'>Cart Products Empty</h3>
			)}
			{cart?.map((product, index) => {
				const { _id, name, price, image, amount } = product;
				return (
					<article className='article-list' key={_id}>
						<div className='article-list__info'>
							<img
								className='article-list__img'
								src={`http://localhost:5000${image}`}
								alt='product'
							></img>
							<span>
								<p>
									<strong>{name}</strong>
								</p>
								<p>
									<strong>Price:</strong> ${price}
								</p>
								<p>
									<strong>Amount:</strong> {amount}
								</p>
							</span>
						</div>
						<button onClick={() => handleClick(index)}>Remove</button>
					</article>
				);
			})}
		</div>
	);
};

export { CartListProducts };
