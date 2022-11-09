import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
	name: "products",
	initialState: {
		products: [],
		cart: [],
	},
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
		},
		reduceStock: (state, action) => {
			const stockSubtractioned = state.products.map((product) => {
				if (product._id === action.payload._id) {
					product.countInStock = product.countInStock - 1;
				}
				return product;
			});
			state.products = [...stockSubtractioned];
		},
		setCart: (state, action) => {
			const productAdded = { ...action.payload, amount: 1 };
			const productExist = state.cart.find(
				(product) => product._id === action.payload._id
			);

			if (!productExist) {
				state.cart = [...state.cart, productAdded];
			} else {
				const productSum = state.cart.map((product, index) => {
					if (index === state.cart.indexOf(productExist)) {
						product.amount = product.amount + 1;
					}
					return product;
				});
				state.cart = productSum;
			}
		},
		removeProductFromCart: (state, action) => {
			const indexProduct = action.payload;
			state.cart.splice(indexProduct, 1);
		},
	},
});

export const { setProducts, setCart, reduceStock, removeProductFromCart } =
	productsSlice.actions;

export default productsSlice.reducer;
