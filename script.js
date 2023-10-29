function handleAgregarAlCarrito(nombre, imagen, precio, buttonElement) {
    let carrito = [];

    const carritoStorage = localStorage.getItem('carrito');
    if (carritoStorage) {
        carrito = JSON.parse(carritoStorage);
    }

    const productContainer = buttonElement.closest('.product-container');
    const productQuantityInput = productContainer.querySelector(".product-quantity");
    let productQuantity = parseInt(productQuantityInput.value);

    // Validar la cantidad
    if (isNaN(productQuantity) || productQuantity <= 0) {
        productQuantity = 1;
    }

    const producto = {
        nombre: nombre,
        imagen: imagen,
        precio: precio,
        cantidad: productQuantity
    };

    carrito.push(producto);

    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert('Producto agregado al carrito!');
}
