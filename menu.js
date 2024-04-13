const container_contenido = document.getElementById('container_contenido');

//Crear variables para cada uno de los items del menu
const item_menu_cliente = document.getElementById('item_menu_cliente');
const item_menu_producto = document.getElementById('item_menu_producto');

//Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item del cliente
item_menu_cliente.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('cliente.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del cliente


//Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item del producto
item_menu_producto.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('producto.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });  ////Fin de código del menu-item del producto