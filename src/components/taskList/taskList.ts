import './taskList.css';
import TaskItem from '../taskItem/taskItem';
import storage from '../../utils/storage';
import { appState } from '../../store/index';

import styles from './taskList.css';

class TaskList extends HTMLElement {
    tasklist?: TaskItem[];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    getTaskList() {
        this.tasklist = appState.taskList;

        const container = this.shadowRoot?.querySelector('.task-list')!;

        this.tasklist.forEach((task) => {
            container.appendChild(task);
        });
    }

    connectedCallback() {
        this.render();
        this.getTaskList();
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <section class="task-list">
                </section>
            `;
        }

        const cssTaskList = document.createElement('style');
        cssTaskList.innerHTML = styles;
        this.shadowRoot?.appendChild(cssTaskList);
    }
};

customElements.define('task-list', TaskList);
export default TaskList;