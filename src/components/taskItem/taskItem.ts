class TaskItem extends HTMLElement {
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

customElements.define('task-item', TaskItem);
export default TaskItem;