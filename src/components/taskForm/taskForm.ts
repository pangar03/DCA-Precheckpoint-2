import TaskItem, { TaskAttribute } from "../taskItem/taskItem";
import '../taskItem/taskItem'
import { dispatch } from "../../store/index";
import { addTask, changeScreen } from "../../store/actions";
import styles from './taskForm.css';

class TaskForm extends HTMLElement {
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
                <form>
                    <label for="task-description">What's the task about?</label>
                    <input type="text" id="task-description" name="task-description" required>
                    <button type="submit">Create Task</button>
                </form>
            `;

            const form = this.shadowRoot.querySelector('form')!;
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const description = (form.querySelector('#task-description') as HTMLInputElement).value;
                const taskId = new Date().getTime();

                const task = this.ownerDocument.createElement('task-item') as TaskItem;

                task.setAttribute(TaskAttribute.uid, String(taskId));
                task.setAttribute(TaskAttribute.description, description);
                task.setAttribute(TaskAttribute.isfinished, String(false));

                dispatch(addTask(task));
            });

            const cssForm = this.ownerDocument.createElement('style');
            cssForm.innerHTML = styles;
            this.shadowRoot.appendChild(cssForm);
        }
    }
};

customElements.define('task-form', TaskForm);
export default TaskForm;