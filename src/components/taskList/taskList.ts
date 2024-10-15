import './taskList.css';
import TaskItem, {TaskAttribute} from '../taskItem/taskItem';
import '../taskItem/taskItem'
import { addObserver } from '../../store/index';
import storage from '../../utils/storage';
import { appState } from '../../store/index';

import styles from './taskList.css';

class TaskList extends HTMLElement {
    tasklist?: TaskItem[];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }

    getTaskList() {
        // this.tasklist = appState.taskList;        
        const container = this.shadowRoot?.querySelector('.task-list')!;

        appState.taskList?.forEach((task: any) => {
            console.log(task);
            
            const taskInstance = this.ownerDocument.createElement('task-item') as TaskItem;
            
            taskInstance.setAttribute(TaskAttribute.uid, String(task.uid));
            taskInstance.setAttribute(TaskAttribute.description, String(task.description));
            taskInstance.setAttribute(TaskAttribute.isfinished, String(task.isfinished));
            
            container.appendChild(taskInstance);
        });
    }

    connectedCallback() {
        this.render();
        this.getTaskList();
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <section class="task-list"></section>
            `;
        }

        const cssTaskList = document.createElement('style');
        cssTaskList.innerHTML = styles;
        this.shadowRoot?.appendChild(cssTaskList);
    }
};

customElements.define('task-list', TaskList);
export default TaskList;