import { getProducts } from "../services/getProducts";
import { AddProductAction, GetProductAction, ProductActions } from "../types/store";

export const getProduct = async (): Promise<GetProductAction> => {
	const product = await getProducts();
	return {
		action: ProductActions.GET,
		payload: product,
	};
};

export const addNewProduct = (payload: any) => {
	return {
		action: ProductActions.ADD,
		payload,
	};
};