import './screens/screenTaskList/screenTaskList';
import './screens/screenTaskForm/screenTaskForm';
import { addObserver } from './store/index';
import { appState } from './store/index';

class AppContainer extends HTMLElement {
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
            switch(appState.screen){
                case 'TASKLIST':
                    this.shadowRoot.innerHTML = `<task-list-screen></task-list-screen>`;
                    break;
                case 'TASKFORM':
                    this.shadowRoot.innerHTML = `<task-form-screen></task-form-screen>`;
                    break;
            }
        }
    }
}

customElements.define('app-container', AppContainer);
