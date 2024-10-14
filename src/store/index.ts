import { reducer } from "./reducer";
import { AppState, Observer } from "../types/store";
import TaskList from "../components/taskList/taskList";
import TaskItem from "../components/taskItem/taskItem";

// The Global State (appState)
export let appState: AppState = {
    screen: 'TASKLIST',
    taskList: [],
};

let observers: Observer[] = [];

// Dispatch
export const dispatch = (action: any) => {
    const clone = JSON.parse(JSON.stringify(appState));
    appState = reducer(action, clone);
    observers.forEach(observer => observer.render());
};

// Add the Observers
export const addObserver = (ref: any) => {
    observers = [...observers, ref];
};