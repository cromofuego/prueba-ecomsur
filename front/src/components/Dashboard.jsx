import { useEffect } from "react";
import { setCart, reduceStock } from "../slice/sliceProducts";
import { fetchAllProducts } from "../api/products";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.products);

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, []);

	const handleClick = (product) => {
		dispatch(reduceStock(product));
		dispatch(setCart(product));
	};

	return (
		<ul className='main-container'>
			{products?.map((product) => {
				const { _id, name, price, image, countInStock } = product;
				const condition = countInStock === 0;
				return (
					<li className='card' key={`product list ${_id}`}>
						<img
							src={`http://localhost:5000${image}`}
							className='card__img'
							alt='product'
						/>
						<h3 className='card__title'>{name}</h3>
						<p>Price: $ {price}</p>
						<div className='card__container-buttons'>
							<button
								onClick={() => handleClick(product)}
								disabled={condition && 1}
							>
								{condition ? "No stock" : "Add item to cart"}
							</button>
							<NavLink to={`/product-details/${_id}`} className='btn-details'>
								<button>Details</button>
							</NavLink>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export { Dashboard };
