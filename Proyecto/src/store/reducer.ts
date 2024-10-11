import { Actions, AppState, ProductActions } from '../types/store';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	const { action, payload } = currentAction;

	switch (action) {
		case ProductActions.ADD:
			return {
				...currentState,
				cart: [payload, ...currentState.cart],
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