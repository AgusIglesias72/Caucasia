carrito = []

const titulo = document.getElementById('title')
titulo.classList.add('container', 'titulo')

const contenedor = document.getElementById('contenedor-productos')

const tabla = document.getElementById('tabla-contenedor')


const mostrarCompra = () => {
    
    tabla.innerHTML = ""
 
    carrito.forEach((producto) => {
        const tr = document.createElement('tr')
        tr.className = "table-primary"
        tr.innerHTML = `
            <th scope="row">${producto.nombre}</th>
            <td>${producto.tipo}</td>
            <td>${producto.precio}</td>
        `
        tabla.appendChild(tr)   
    });
}
const agregarCarrito = (prodId) => { 
    let producto = stockTotal.find( (el) => el.id === prodId)
    carrito.push(producto)

    mostrarCompra()
}

for (const producto of stockTotal) {

    const div = document.createElement('div')

    div.className = "card producto"
    div.style.width = "18rem"
 
    div.innerHTML = `
        <h3>${producto.nombre}</h3>
        <img src=${producto.img}>
        <p>$${producto.precio}</p>
        <a onclick="agregarCarrito(${producto.id})" class="btn btn-primary" id="botonCarrito">Boton</a>
    `    
    contenedor.appendChild(div)
}


console.log(carrito)