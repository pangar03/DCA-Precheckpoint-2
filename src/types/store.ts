import TaskList from "../components/taskList/taskList";

export type AppState = {
    screen: string;
    taskList: TaskList;
};

export type Observer = { render: () => void } & HTMLElement;

export enum Actions {
    'ADD_TASK' = 'ADD_TASK',
    'REMOVE_TASK' = 'REMOVE_TASK',
    'TOGGLE_TASK' = 'TOGGLE_TASK',
};

export enum Screens {
    'TASKLIST' = 'TASKLIST',
    'TASKFORM' = 'TASKFORM',
};