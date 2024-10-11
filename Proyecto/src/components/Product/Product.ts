import { addNewProduct } from '../../store/actions';
import { dispatch } from '../../store/store';
import styles from './product.css';

export enum Attribute {
    'name' = 'name',
    'image' = 'image',
    'description' = 'description',
    'category' = 'category',
    'price' = 'price',
    'rating' = 'rating'
}
class AppProduct extends HTMLElement {
    name?: string;
    image?: string;
    description?: string;
    category?: string;
    price?: number;
    rating?: number;

    static get observedAttributes(){
        return Object.keys(Attribute);
    }

    attributeChangedCallback(propName:Attribute, oldValue: string | undefined, newValue: string | undefined){
        switch(propName){
            case Attribute.price:
                this.price = newValue ? Number(newValue) : undefined;
                break;

            case Attribute.rating:
                this.rating = newValue ? Number(newValue) : undefined;
                break;

            default:
                this[propName] = newValue;
                break;
        }
        this.render();        
    }

    constructor(){
        super()
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();

        const button = this.shadowRoot?.querySelector('button');
		button?.addEventListener('click', () => {
			dispatch(addNewProduct({ title: this.title, price: this.price, image: this.image }));
		});
    }

    render(){
        if(this.shadowRoot)
            this.shadowRoot.innerHTML = `
            <style>${styles}</style>
                <section>
                    <div class="container">
                        <div class="card">
                            <img src="${this.image}" alt="">
                            <h1>${this.name}</h1>
                            <p>${this.description}</p>
                            <h3>${this.category}</h3>
                            <span>${this.price}</span>
                            <span>${this.rating}</span>
                            <button id="guardar">añadir al carrito</button>
                        </div>
                    </div>
                </section>
        `;
    }
}
customElements.define('app-product', AppProduct);
export default AppProduct;