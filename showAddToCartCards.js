import products from "./api/products.json";
import { getCartProductFromLS } from "./getCartProducts";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { removeProductFromCart } from "./removeProductFromCart";
import { incrementDecrement } from "./incrementDecrement";
import { updateCartProductTotal } from "./updateCartProductTotal";



let cartProducts = getCartProductFromLS();

const filterProducts = products.filter((curProd) => {
    return cartProducts.some((curElem) => curElem.id === curProd.id)
})
console.log(filterProducts)

//to update the cart page------------------------------

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");



const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        const { id, name, category, image, price, stock } = curProd;
        let productClone = document.importNode(templateContainer.content, true);

        const LSActualData = fetchQuantityFromCartLS(id, price);


        productClone.querySelector("#cardValue").setAttribute('id', `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productPrice").textContent = LSActualData.price;
        productClone.querySelector(".productQuantity").textContent = LSActualData.quantity;


        //handle increment decrement
        productClone.querySelector(".stockElement")
            .addEventListener('click', (event) => {
                incrementDecrement(event, id, stock, price);
                
            })

        productClone.querySelector(".remove-to-cart-button").addEventListener("click", () =>
                removeProductFromCart(id));
        


        cartElement.appendChild(productClone)
    })
}
//show the cart products


showCartProduct();


updateCartProductTotal();
