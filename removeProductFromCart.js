import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";


export const removeProductFromCart=(id)=>{
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd)=>curProd.id !== id)

//update the local storage after removing the item
localStorage.setItem("cartProductsLS", JSON.stringify(cartProducts));

//to remove the div on click------------------------------------
let removeDiv = document.getElementById(`card${id}`);
if(removeDiv){
    removeDiv.remove();
    showToast("delete",id)
}
updateCartValue(cartProducts);
updateCartProductTotal()
};
