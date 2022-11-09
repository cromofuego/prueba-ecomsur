import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { CartListProducts } from "../components/CartListProducts";
import { ProductDetails } from "../components/ProductDetails";
import { Navbar } from "../components/Navbar";
import "../style/Main.scss";

const AppUI = () => {
	return (
		<HashRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/cart-list' element={<CartListProducts />} />
				<Route path='/product-details/:id' element={<ProductDetails />} />
			</Routes>
		</HashRouter>
	);
};

export { AppUI };
