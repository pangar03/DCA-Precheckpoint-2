import TaskItem from '../taskItem/taskItem';

class TaskList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {

    }
};

customElements.define('task-list', TaskList);
export default TaskList;