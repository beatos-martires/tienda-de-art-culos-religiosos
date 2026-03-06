// CONTENEDORES
const shopContent = document.getElementById("shopContent");
const buscador = document.getElementById("buscador"); // input del header
const cart = [];


function renderProductos(lista) {
  shopContent.innerHTML = "";

  lista.forEach((product) => {
    const content = document.createElement("div");
    content.className = "card"; 

    content.innerHTML = `
      <img src="${product.img}" alt="${product.productName}">
      <h3>${product.productName}</h3>
      <p class="price">$ ${product.price}</p>
      <button class="add-to-cart" data-id="${product.id}">
        Añadir al Carrito
      </button>`;

    shopContent.appendChild(content);
  });
}


renderProductos(productos);


shopContent.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-to-cart");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  const product = productos.find((p) => p.id === id);
  if (!product) return;

  const repeat = cart.some((p) => p.id === id);

  if (repeat) {
    cart.forEach((p) => {
      if (p.id === id) p.quanty++;
    });
  } else {
    cart.push({ ...product }); 
  }

  if (typeof displayCartCounter === "function") {
    displayCartCounter();
  }
});

//Boton Buscar
if (buscador) {
  buscador.addEventListener("input", () => {
    const q = buscador.value.trim().toLowerCase();

    const filtrados = productos.filter((p) =>
      p.productName.toLowerCase().includes(q)
    );

    renderProductos(filtrados);
  });
}
