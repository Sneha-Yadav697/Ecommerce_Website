const footerHTML = `
<footer class="section-footer">
    <div class="footer-container container">
      <div class="content_1">
        <img src="/image/logo.png" alt="logo" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos cumque saepe non consectetur,.</p>
        <img src="/image/home02.png" alt="card" />
        <img src="/image/home02.png" alt="card" />
        <img src="/image/home02.png" alt="card" />
        <img src="/image/home02.png" alt="card" />
      </div>
      <div class="content_2">
        <h4>Shppoing</h4>
        <a href="#">Computer Store</a>
        <a href="#">Computer Store</a>
        <a href="#">Computer Store</a>
        <a href="#">Computer Store</a>
      </div>
      <div class="content_3">
        <h4>Shppoing</h4>
        <a href="./contact.html">contact us</a>
        <a href="" target="_blank">Computer Store</a>
        <a href="" target="_blank">Computer Store</a>
        <a href="" target="_blank">Computer Store</a>
      </div>
      <div class="content_4">
        <h4>Newsletter</h4>
        <p>be the first to know about mew <br /> arrive sales and promos</p>
        <div class="f-mail">
          <input type="email" placeholder="your mail" />
          <i class="fa-solid fa-envelope"></i>
        </div>
        <hr />


        <div class="f-design">
          <div class="f-design-text">
            <p>design and code by thapa technical</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
`;
const PopoutLogin = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin" , footerHTML)