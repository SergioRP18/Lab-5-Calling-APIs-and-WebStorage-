import { reducer } from './reducer';
import { Actions, AppState, Observer } from '../types/store';
import Storage, { PersistanceKeys } from '../utils/storage';


const emptyState: AppState = {
	products: [],
	cart: [],
};

export let appState = Storage.get({
	key: PersistanceKeys.STORE,
	defaultValue: emptyState,
});

let observers: Observer[] = [];

const persistStore = (state: AppState) => Storage.set({ key: PersistanceKeys.STORE, value: state });

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: Actions) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;

	persistStore(newState);
	notifyObservers();
};

export const addObserver = (ref: Observer) => {
	observers = [...observers, ref];
};