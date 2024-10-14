import TaskItem from '../components/taskItem/taskItem';
import { Actions, Screens } from '../types/store';

export const addTask = (payload: TaskItem) => {
    return {
        action: 'ADD_TASK',
        payload,
    }
};

export const removeTask = (payload: TaskItem) => {
    return {
        action: 'REMOVE_TASK',
        payload,
    }
};

export const toggleTask = (payload: TaskItem) => {
    return {
        action: 'TOGGLE_TASK',
        payload,
    }
};

export const changeScreen = (payload: string) => {
    return {
        action: 'CHANGE_SCREEN',
        payload,
    }
};