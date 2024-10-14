import { reducer } from "./reducer";
import { AppState, Observer } from "../types/store";
import storage from "../utils/storage";
import TaskList from "../components/taskList/taskList";
import TaskItem from "../components/taskItem/taskItem";

const initialState: AppState = {
    screen: 'TASKLIST',
    taskList: [],
};

// The Global State (appState)
export let appState = storage.get('STORE', initialState);

let observers: Observer[] = [];

const persistStorage = (state: any) => {
    storage.set('STORE', state);
} 

// Dispatch
export const dispatch = (action: any) => {
    const clone = JSON.parse(JSON.stringify(appState));
    const newState = reducer(action, clone);
    appState = newState;

    persistStorage(appState);
    observers.forEach(observer => observer.render());
};

// Add the Observers
export const addObserver = (ref: any) => {
    observers = [...observers, ref];
};