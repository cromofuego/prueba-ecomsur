import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCart, reduceStock } from "../slice/sliceProducts";

const ProductDetails = () => {
	const products = useSelector((state) => state.products.products);
	const params = useParams();
	const dispatch = useDispatch();

	const handleClick = (product) => {
		dispatch(setCart(product));
		dispatch(reduceStock(product));
	};

	const productUnique = products?.filter(
		(procduct) => procduct._id === params.id
	);

	const renderStars = (rating) => {
		return [1, 2, 3, 4, 5].map((ele, ind) => {
			if (ele - 0.5 < rating)
				return <BsStarFill className='color-star' key={ind} />;
			if (ele - 1 < rating && ele > rating)
				return <BsStarHalf className='color-star' key={ind} />;
			return <BsStar className='color-star' key={ind} />;
		});
	};

	return (
		<>
			{productUnique.map((product) => {
				const {
					_id,
					name,
					price,
					image,
					countInStock,
					brand,
					numReviews,
					category,
					description,
					rating,
				} = product;
				const condition = countInStock === 0;

				return (
					<section className='section' key={_id}>
						<img
							className='section__img'
							src={`http://localhost:5000${image}`}
							alt='product'
						/>

						<div className='container-info-product'>
							<div className='section-header'>
								<h3 className='section__title'>{name}</h3>

								<div className='div'>
									<p className='article__rating'>
										{rating}
										<div className='div'>{renderStars(rating)}</div>
										<span>Reviews: {numReviews}</span>
									</p>
								</div>
							</div>
							<article className='article'>
								<ul className='article__list'>
									<li>
										<strong>Price:</strong> $ {price}
									</li>
									<li>
										<strong>Category:</strong> {category}
									</li>
									<li>
										<strong>Brand:</strong> {brand}
									</li>
									<li>
										<strong>Stock:</strong> {countInStock}
									</li>
									<li className='article__list__description'>{description}</li>
								</ul>
								<button
									disabled={condition && 1}
									onClick={() => handleClick(product)}
								>
									{condition ? "No stock" : "Add item to cart"}
								</button>
							</article>
						</div>
					</section>
				);
			})}
		</>
	);
};

export { ProductDetails };
