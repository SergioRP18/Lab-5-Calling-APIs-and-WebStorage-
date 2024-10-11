import { getProducts } from "../services/getProducts";
import AppProduct, { Attribute } from "../components/Product/Product";
import AppShoppingCart, { AttributeCart } from "../components/ShoppingCartItem/ShoppingCartItem";
import { getProduct } from '../store/actions';
import { shoppingItem } from "../types/shopping";
import { Products } from "../types/products";
import '../components/indexPadre';
import { addObserver, appState, dispatch } from "../store/store";

class Dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        addObserver(this);
    }

    async connectedCallback() {
		const action = await getProduct();
		dispatch(action);
        this.render();
	}

    render(){
            const section = this.ownerDocument.createElement('section');
            section.classList.add('products-container');
        
            const productSection = this.ownerDocument.createElement('section');
            productSection.classList.add('products');
        
            if (this.shadowRoot) {
                appState.products.forEach((element: Products) => {
                    const card = this.ownerDocument.createElement('app-product') as AppProduct;
                    card.setAttribute(Attribute.image, element.image);
                    card.setAttribute(Attribute.name, element.title);
                    card.setAttribute(Attribute.description, element.description);
                    card.setAttribute(Attribute.category, element.category);
                    card.setAttribute(Attribute.price, element.price);
                    card.setAttribute(Attribute.rating, element.rating);
                    productSection.appendChild(card); // Cambiar a appendChild directamente
                });
        
                section.appendChild(productSection);
        
                const cartSection = this.ownerDocument.createElement('section');
                cartSection.classList.add('cart');
        
                const cartTitle = this.ownerDocument.createElement('h2');
                cartTitle.textContent = 'Carrito';
                cartSection.appendChild(cartTitle); // Solo añadir aquí
                section.appendChild(cartSection);
        
                appState.cart.forEach((cart: shoppingItem) => {
                    const item = this.ownerDocument.createElement('item-cart') as AppShoppingCart;
                    item.setAttribute(AttributeCart.title, cart.title);
                    item.setAttribute(AttributeCart.image, cart.image);
                    item.setAttribute(AttributeCart.price, cart.price);
                    cartSection.appendChild(item);
                });
        
                this.shadowRoot.appendChild(section); // Añadir la sección completa al shadowRoot
        }
    }
};
customElements.define("app-dashboard", Dashboard);
