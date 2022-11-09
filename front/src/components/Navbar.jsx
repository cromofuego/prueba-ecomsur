import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
	const cart = useSelector((state) => state.products.cart);
	const initialValue = 0;
	const totalProductsInCart = cart?.reduce((prevValue, currentValue) => {
		return (prevValue = prevValue + currentValue.amount);
	}, initialValue);

	return (
		<nav className='nav'>
			<NavLink to='/' className='dashboard'>
				Dashboard
			</NavLink>
			<NavLink to='/cart-list'>
				<AiOutlineShoppingCart className='icon' />
				<span>{totalProductsInCart}</span>
			</NavLink>
		</nav>
	);
};

export { Navbar };
