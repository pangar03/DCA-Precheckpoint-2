import { removeTask, toggleTask } from "../../store/actions";
import { dispatch } from "../../store/index";
import styles from './taskItem.css';

export enum TaskAttribute {
    'uid' = 'uid',
    'description' = 'description',
    'isfinished' = 'isfinished',
}

class TaskItem extends HTMLElement {
    uid?: number;
    description?: string;
    isfinished?: boolean;

    static get observedAttributes() {
        return Object.keys(TaskAttribute);
    }

    attributeChangedCallback(propName: TaskAttribute, oldValue: string | undefined, newValue: string | undefined){
        switch(propName){
            case TaskAttribute.uid:
                this[propName] = newValue ? Number(newValue) : undefined;
                break;
            case TaskAttribute.isfinished:
                this[propName] = propName === 'isfinished' ? newValue === 'true' : undefined;
                break;
            default:
                this[propName] = newValue ? newValue : undefined;
                break;
        }
    }

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
                <div class="task-item">
                    <h2>${this.description}</h2>
                    <div>
                        <button class="toggle-task">Complete</button>
                        <button class="delete">Delete</button>
                    </div>
                </div>
            `;

            this.shadowRoot.querySelector('.toggle-task')?.addEventListener('click', () => { dispatch(toggleTask(this)); });
            this.shadowRoot.querySelector('.delete')?.addEventListener('click', () => { 
                dispatch(removeTask(this)); 
            });
            
            const cssTaskItem = document.createElement('style');
            cssTaskItem.innerHTML = styles;
            this.shadowRoot.appendChild(cssTaskItem);
        }
    }
};

customElements.define('task-item', TaskItem);
export default TaskItem;