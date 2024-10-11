import './components/indexPadre';
import "./screens/dashboard";

class AppContainer extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        const item = this.ownerDocument.createElement('app-dashboard');
		this.shadowRoot?.appendChild(item);
}
}
customElements.define('app-container', AppContainer);