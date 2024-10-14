class TaskForm extends HTMLElement {
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

customElements.define('task-form', TaskForm);
export default TaskForm;