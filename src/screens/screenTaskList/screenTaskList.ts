import TaskList from "../../components/taskList/taskList";
import styles from "./screenTaskList.css";

class TaskListScreen extends HTMLElement {
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
                <task-list></task-list>
                <button id="create-button">Create Task</button>
            `;

            const cssFormScreen = this.ownerDocument.createElement('style');
            cssFormScreen.innerHTML = styles;
            this.shadowRoot.appendChild(cssFormScreen);
        }
    }
}

customElements.define('task-list-screen', TaskListScreen);