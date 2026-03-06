
const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");
const cartBtn = document.getElementById("cart-btn");
const cartCounter = document.getElementById("cart-counter");

const displayCart = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display ="block";
    modalOverlay.style.display ="block";

    // MODAL HEADER
    const modalHeader = document.createElement("div");
    const modalClose = document.createElement("div");

    modalClose.innerText = "❌";
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    // CERRAR CARRITO
    modalClose.addEventListener("click", () => {
        modalContainer.style.display ="none"
        modalOverlay.style.display ="none"});

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Tu compra 🛒";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

    // MODAL BODY
    // if (cart.Length > 0) {
    cart.forEach((product) => {
        const modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        modalBody.innerHTML = `
        <div class="product">
            <img class="product-img" src="${product.img}">
                <div class="product-info">
                    <h4>${product.productName}</h4>
                </div>
            <div class="quantity">
                <span class="quantity-btn-decrese">-</span>
                <span class="quantity-input">${product.quanty}</span>
                <span class="quantity-btn-increse">+</span>
            </div>
            <div class="price">$ ${product.price * product.quanty}</div>
            <div class="delete-product">❌</div>
        </div>
        `;
        modalContainer.append(modalBody);

        // BOTON RESTAR PRODUCTOS
        const decrese = modalBody.querySelector(".quantity-btn-decrese");
        decrese.addEventListener("click", () => {
            if(product.quanty !== 1){
                product.quanty--;
                displayCart();
            }
            displayCartCounter();
        });
        // BOTON SUMAR PRODUCTOS
        const increse = modalBody.querySelector(".quantity-btn-increse");
        increse.addEventListener("click", () => {
            product.quanty++;
            displayCart();
            displayCartCounter();
        });
        // BOTON ELIMINAR PRODUCTO
        const deleteProduct =modalBody.querySelector(".delete-product");
        deleteProduct.addEventListener("click", () => {
            deleteCartProduct(product.id);
        });

    });

    // MODAL FOOTER

    const total = cart.reduce((acumulador, elemento) => 
        acumulador + elemento.price * elemento.quanty, 0);
    const modalFooter = document.createElement("div");
    modalFooter.className ="modal-footer"

    modalFooter.innerHTML = `
        <div class="total-price">Total a pagar: $ ${total}</div>
        <button class="checkout-btn">Finalizar compra</button>`;
   
    modalContainer.append(modalFooter)};

cartBtn.addEventListener("click", displayCart);




const deleteCartProduct = (id) => {
    const foundId = cart.findIndex((element)=> element.id === id);
    cart.splice(foundId, 1);
    displayCart();
    displayCartCounter();};


const displayCartCounter = () => {
    const cartLength = cart.reduce((acumulador, elemento) => acumulador + elemento.quanty, 0);
    if (cartLength > 0) {
        cartCounter.style.display = "block";
        cartCounter.innerText = cartLength;} 
        else {
        cartCounter.style.display = "none";}}


//boton Finalizar compra
function finalizarCompra() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío");
    return;
  }

  // Link fijo de Mercado Pago
  window.location.href = "http://link.mercadopago.com.ar/salvifici";
}