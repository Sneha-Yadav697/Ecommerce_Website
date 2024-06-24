const showPopupBtn = document.querySelector(".checkout")
const hidePopupBtn = document.querySelector(".checkout-popup .close-btn")
 

    showPopupBtn.addEventListener("click",()=>{
        document.body.classList.toggle("checkout-box")
    })

    hidePopupBtn.addEventListener("click",()=>{
        showPopupBtn.click()
    })
