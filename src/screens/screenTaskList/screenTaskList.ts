import TaskList from "../../components/taskList/taskList";
import '../../components/taskList/taskList'
import { dispatch } from "../../store/index";
import { changeScreen } from "../../store/actions";
import { addObserver } from "../../store/index";
import { Screens } from "../../types/store";
import styles from "./screenTaskList.css";

class TaskListScreen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <task-list></task-list>
                <button id="create-button">Create Task</button>
            `;

            const createButton = this.shadowRoot.querySelector('#create-button')!;
            createButton.addEventListener('click', () => {
                dispatch(changeScreen(Screens.TASKFORM));
            });

            const cssFormScreen = this.ownerDocument.createElement('style');
            cssFormScreen.innerHTML = styles;
            this.shadowRoot.appendChild(cssFormScreen);
        }
    }
}

customElements.define('task-list-screen', TaskListScreen);