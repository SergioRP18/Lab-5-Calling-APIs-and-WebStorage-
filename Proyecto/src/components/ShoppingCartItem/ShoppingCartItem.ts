export enum AttributeCart {
	'image' = 'image',
	'title' = 'title',
	'price' = 'price',
}

class AppShoppingCart extends HTMLElement {
    image?: string;
	name?: string;
	price?: string;

    constructor(){
        super()
        this.attachShadow({mode:'open'});
    }

    static get observedAttributes(){
        return Object.keys(AttributeCart);
    }

    attributeChangedCallback(propName: AttributeCart, oldValue: string, newValue: string) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot)
            this.shadowRoot.innerHTML = `
                <section>
                    <h1>${this.title}</h1>
                    <img src="${this.image}">
                    <span>${this.price}</span>
                </section>
        `;

    }
}
customElements.define('app-shopping-cart', AppShoppingCart);
export default AppShoppingCart;