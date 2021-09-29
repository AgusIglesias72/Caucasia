const template = document.getElementById("template-productos").content
const productos = document.getElementById('contenedor-productos')
const fragment = document.createDocumentFragment()

const templateCarrito = document.getElementById('template-carrito').content
const modalCarrito = document.getElementById('modal-body')
const fragmentCarrito = document.createDocumentFragment()
const botonCarrito = document.getElementById('boton-carrito')


// Función para Mostrar Productos
const mostrarProductos = array =>{

    array.forEach(elemento =>{
        const cardContenedor = template.getElementById('producto')
        template.getElementById('producto-titulo').textContent = elemento.nombre
        template.getElementById('producto-imagen').setAttribute('src', elemento.img)
        template.getElementById('producto-tipo').textContent = elemento.tipo
        template.getElementById('precio-producto').textContent = elemento.precio
        template.querySelector('.btn-primary').dataset.id = elemento.id

        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })
    productos.appendChild(fragment)
}
mostrarProductos(stockTotal)

// Función de Filtrado



// Mostrar máximo de 12 productos por página
const mostrarCantidad = 12
const cantidadPagina = Math.ceil(stockTotal.length/mostrarCantidad)
console.log(cantidadPagina)

// Función para mostrar sólo determinada cantidad

// const mostrarEstos = stockTotal => {
//     let estosProductos = []
//     for(let i = 0; i = mostrarCantidad; i++){
//         estosProductos.push(stockTotal[i])
//     }
// }
// mostrarEstos(stockTotal)
// console.log(estosProductos)

let carrito = {}

productos.addEventListener('click', e =>{
    agregarCarrito(e)
})

const agregarCarrito = e =>{
    if(e.target.classList.contains('btn')){
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = obj =>{
    const producto = {
        img: obj.querySelector('#producto-imagen').getAttribute('src'),
        id: obj.querySelector('.btn').dataset.id,
        title: obj.querySelector('h3').textContent,
        precioUnit: parseInt(obj.querySelector('p').textContent),
        cantidad: 1,
    }

    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1
    }
    carrito[producto.id] = {...producto}
}

// Mostrar Carrito
botonCarrito.addEventListener('click', () =>{
    mostrarCarrito()
})

const mostrarCarrito = () =>{
    let arrayCarrito = Object.values(carrito)
    armarCarrito(arrayCarrito)
    mostrarTotal()
}

const armarCarrito = coleccion =>{
    modalCarrito.innerHTML = ""
    coleccion.forEach(prod =>{
        templateCarrito.getElementById('img-carrito').setAttribute('src', prod.img)
        templateCarrito.getElementById('titulo-carrito').textContent = prod.title
        templateCarrito.getElementById('boton-cantidad').textContent = prod.cantidad
        templateCarrito.getElementById('precio-total').textContent = `$${prod.cantidad * prod.precioUnit}`
        templateCarrito.getElementById('boton-mas').dataset.id = prod.id
        templateCarrito.getElementById('boton-menos').dataset.id = prod.id

        const cloneCarrito = templateCarrito.cloneNode(true)
        fragmentCarrito.appendChild(cloneCarrito)
    })
    modalCarrito.appendChild(fragmentCarrito)
}

// Función para mostrar el Total de productos y cantidad
const mostrarTotal = () =>{
    const cantidadTotal = Object.values(carrito).reduce((acc, {cantidad})=> acc + cantidad, 0)
    const precioTotal = Object.values(carrito).reduce((acc, {cantidad, precioUnit})=> acc + cantidad * precioUnit, 0)

    document.getElementById('cant-productos').textContent = cantidadTotal
    document.getElementById('cant-total').textContent = precioTotal
}


// Boton para Vaciar el Carrito

const botonVaciar = document.getElementById('vaciar-carrito')

botonVaciar.addEventListener('click', () =>{
    vaciarCarrito()
    
})
const vaciarCarrito = () =>{
    carrito = {}
    let arrayCarrito = Object.values(carrito)
    armarCarrito(arrayCarrito)
    mostrarTotal()
}

// Funcionalidad a los Botones de Sumar y Restar

modalCarrito.addEventListener('click', e =>{
    botonAccion(e)
})

const botonAccion = e =>{
    const producto = carrito[e.target.dataset.id]
    if (e.target.classList.contains('btnplus')){
        producto.cantidad += 1
        carrito[e.target.dataset.id] = {...producto}
    }
    if (e.target.classList.contains('btnminus')){
        producto.cantidad -= 1
        if(producto.cantidad === 0){
            delete carrito[e.target.dataset.id]
        } else {
            carrito[e.target.dataset.id] = {...producto}
        }
    }
    mostrarCarrito()
    e.stopPropagation()
}
