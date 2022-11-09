import axios from "axios";
import { setProducts } from "../slice/sliceProducts";

export const fetchAllProducts = () => (dispatch) => {
	axios
		.get("http://localhost:5000/api/products")
		.then((response) => {
			dispatch(setProducts(response.data));
		})
		.catch((error) => console.log(error));
};
