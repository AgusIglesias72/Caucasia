carrito = []

const titulo = $('#title')
titulo.addClass('container', 'titulo')

const contenedor = $('#contenedor-productos')

const tabla = $('#tabla-contenedor')


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

mostrarProductos(stockTotal)

// FILTRADO
const filtroTipo = $("#tipo")
const filtroPrecio = $("#precios")

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

// for (const producto of stockTotal) {

//     const div = document.createElement('div')

//     div.className = "card producto"
//     div.style.width = "18rem"
 
//     div.innerHTML = `
//         <h3>${producto.nombre}</h3>
//         <img src=${producto.img}>
//         <p>$${producto.precio}</p>
//         <a onclick="agregarCarrito(${producto.id})" class="btn btn-primary" id="botonCarrito">Boton</a>
//     `    
//     contenedor.appendChild(div)
// }


console.log(carrito)
