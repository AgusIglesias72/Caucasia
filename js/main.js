carrito = []

const titulo = document.getElementById('title')
titulo.classList.add('container', 'titulo')

const contenedor = $('#contenedor-productos')
//const contenedor = document.querySelector('#contenedor-productos')

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
const mostrarProductos = (array) => {
    
    contenedor.html = ""

    for (const producto of array){

        contenedor.append(`
    
            <div class="card producto">
            <h3>${producto.nombre}</h3>
            <img src=${producto.img}>
            <p>$${producto.precio}</p>
            <a onclick="agregarCarrito(${producto.id})" class="btn btn-primary" id="botonCarrito">Boton</a>
            </div>
            
        `)
    
        $(".producto").css("width" , "22rem")
    }
}
// const mostrarProductos = (array) => {
    
//     contenedor.innerHTML = ""

//     for (const producto of array){
//         const div = document.createElement('div')
//         div.className = "card producto"
//         div.innerHTML = `
//             <h3>${producto.nombre}</h3>
//             <img src=${producto.img}>
//             <p>$${producto.precio}</p>
//             <a id="agregarProducto-${producto.id}" class="btn btn-primary">Boton</a>
//         `
//         // const compraButton = document.getElementById(`agregarProducto${producto.id}`)
//         // compraButton.addEventListener('click', agregarCarrito(`${producto.id}`))
//     const botonProducto = document.getElementById(`agregarProducto-${producto.id}`)

//         $("#producto").css("width" , "22rem")
//     }
//         botonProducto.addEventListener('click', () =>{
//             agregarCarrito(producto.id)
//         })
// }
document.addEventListener('DOMContentLoaded', () =>{
    mostrarProductos(stockTotal)
})

// FILTRADO
const filtroTipo = document.getElementById("tipo")
const filtroPrecio = document.getElementById("precios")

const filtrado = () => {
    let valorTipo = filtroTipo.value
    let valorPrecio = filtroPrecio.value 
    
    let productosFiltrados = []

    if (valorTipo == "Todos"){
        productosFiltrados = stockTotal
    } else {
        productosFiltrados = stockTotal.filter( el => el.tipo == filtroTipo.value)
    }

    if (valorPrecio == 1){
        productosFiltrados = productosFiltrados.filter( el => el.precio <= 1000)
    } else if (valorPrecio == 2){
        productosFiltrados = productosFiltrados.filter( el => el.precio >= 1000)
    }

    mostrarProductos(productosFiltrados)
}

filtroTipo.addEventListener('change', ()=>{
    filtrado()
})
filtroPrecio.addEventListener('change', ()=>{
    filtrado()
})

console.log(carrito)
