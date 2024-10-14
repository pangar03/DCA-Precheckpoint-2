import { Actions, AppState } from '../types/store';

export const reducer = (currentAction: any, currentState: any) => {
    const {action, payload} = currentAction;

    switch (action) {
        default:
            return currentState;
    }
};