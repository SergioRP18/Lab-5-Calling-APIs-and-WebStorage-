import { Products } from './products';
import { shoppingItem } from './shopping';

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	products: Products[];
	cart: shoppingItem[];
};

export enum ProductActions {
	'ADD' = 'ADD',
	'GET' = 'GET',
}

export interface AddProductAction {
	action: ProductActions.ADD;
	payload: shoppingItem;
}

export interface GetProductAction {
	action: ProductActions.GET;
	payload: Products[];
}

export type Actions = AddProductAction | GetProductAction;