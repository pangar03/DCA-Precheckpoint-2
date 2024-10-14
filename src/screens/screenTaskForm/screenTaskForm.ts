import TaskForm from "../../components/taskForm/taskForm";
import styles from "./screenTaskForm.css";

class TaskFormScreen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
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

            const cssFormScreen = this.ownerDocument.createElement('style');
            cssFormScreen.innerHTML = styles;
            this.shadowRoot.appendChild(cssFormScreen);
        }
    }
}

customElements.define('task-form-screen', TaskFormScreen);