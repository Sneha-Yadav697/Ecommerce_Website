// 
const showPopupBtn = document.querySelector(".login-btn")
const loggedIn = document.querySelector(".Logged-in")
const hidePopupBtn = document.querySelector(".form-popup .close-btn ")

 

    showPopupBtn.addEventListener("click",()=>{
        document.body.classList.toggle("show-popup")
        
    })

    
    loggedIn.addEventListener("click",()=>{
        showPopupBtn.click()
        showPopupBtn.innerHTML = ` LOG OUT`;
    })

    hidePopupBtn.addEventListener("click",()=>{
        showPopupBtn.click()
        
    })
    
   