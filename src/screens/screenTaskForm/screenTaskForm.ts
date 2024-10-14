import TaskForm from "../../components/taskForm/taskForm";
import '../../components/taskForm/taskForm'
import { dispatch } from "../../store/index";
import { changeScreen } from "../../store/actions";
import { addObserver } from "../../store/index";
import { Screens } from "../../types/store";
import styles from "./screenTaskForm.css";

class TaskFormScreen extends HTMLElement {
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
                <task-form></task-form>
                <button id="cancel-button">Cancel</button>
            `;

            const createButton = this.shadowRoot.querySelector('#cancel-button')!;
            createButton.addEventListener('click', () => {
                dispatch(changeScreen(Screens.TASKLIST));
            });

            const cssFormScreen = this.ownerDocument.createElement('style');
            cssFormScreen.innerHTML = styles;
            this.shadowRoot.appendChild(cssFormScreen);
        }
    }
}

customElements.define('task-form-screen', TaskFormScreen);