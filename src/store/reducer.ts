import TaskItem from '../components/taskItem/taskItem';
import TaskList from '../components/taskList/taskList';
import { Actions, AppState } from '../types/store';

export const reducer = (currentAction: any, currentState: any) => {
    const {action, payload} = currentAction;

    switch (action) {
        case Actions.ADD_TASK:
            return {
                ...currentState,
                taskList: [...currentState.taskList, payload],
            };

        case Actions.REMOVE_TASK:
            return {
                ...currentState,
                taskList: currentState.taskList.filter((task: TaskItem) => task.uid !== payload.uid),
            };

        case Actions.TOGGLE_TASK:
            return {
                ...currentState,
                taskList: currentState.taskList.map((task: TaskItem) => {
                    if(task.uid === payload.uid){
                        task.isfinished = !task.isfinished;
                    }
                    return task;
                }),
            }

        case Actions.CHANGE_SCREEN:
            return {
                ...currentState,
                screen: payload,
            }

        default:
            return currentState;
    }
};