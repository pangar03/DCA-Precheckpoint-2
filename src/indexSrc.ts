import { appState } from './store/index';

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot){
            switch(appState.screen){
                case 'TASKLIST':
                    this.shadowRoot.innerHTML = `<task-list></task-list>`;
                    break;
                case 'TASKFORM':
                    this.shadowRoot.innerHTML = `<task-form></task-form>`;
                    break;
            }
        }
    }
}

customElements.define('app-container', AppContainer);
