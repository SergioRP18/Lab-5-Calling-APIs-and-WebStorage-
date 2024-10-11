import { Actions, AppState, ProductActions } from '../types/store';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	const { action, payload } = currentAction;

	switch (action) {
		case ProductActions.ADD:
			return {
				...currentState,
				cart: [...currentState.cart, payload],
			};
		case ProductActions.GET:
			return {
				...currentState,
				products: payload,
			};

		default:
			return currentState;
	}
};