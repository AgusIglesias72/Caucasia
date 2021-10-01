const template = document.getElementById("template-productos").content
const productos = document.getElementById('contenedor-productos')
const fragment = document.createDocumentFragment()

const templateCarrito = document.getElementById('template-carrito').content
const modalCarrito = document.getElementById('modal-body')
const fragmentCarrito = document.createDocumentFragment()
const botonCarrito = document.getElementById('boton-carrito')

document.addEventListener('DOMContentLoaded', () =>{
    dividirProductos(stockTotal)
    mostrarProductos(primerosDoce)
    crearBotones(stockTotal)
    
})
// Función para Mostrar Productos
const mostrarProductos = array =>{
    productos.innerHTML = ''
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

// Mostrar máximo de 12 productos por página
const mostrarCantidad = 12

let primerosDoce = []
let segundosDoce = []
let tercerosDoce = []
let cuartosDoce = []
let quintosDoce = []

const dividirProductos = array =>{
    console.log(primerosDoce)
    let hola = []
    console.log(hola)
    primerosDoce.splice(0, primerosDoce.length)
    segundosDoce = []
    tercerosDoce = []
    cuartosDoce = []
    quintosDoce = []

    console.log(primerosDoce)
    for(let i = 0; i < array.length; i++){
        if(i < mostrarCantidad){
            if(primerosDoce.includes(array[i]) == false){
                primerosDoce.push(array[i])
            } else continue
            
        }
        if(mostrarCantidad <= i && i < mostrarCantidad*2){
            if(segundosDoce.includes(array[i]) == false){
                segundosDoce.push(array[i])
            } else continue
        }
        if(mostrarCantidad*2 <= i && i < mostrarCantidad*3){
            if(tercerosDoce.includes(array[i]) == false){
                tercerosDoce.push(array[i])
            } else continue
        }
        if(mostrarCantidad*3 <= i && i < mostrarCantidad*4){
            if(cuartosDoce.includes(array[i]) == false){
                cuartosDoce.push(array[i])
            } else continue
        }
        if(mostrarCantidad*4 <= i && i < mostrarCantidad*5){
            if(quintosDoce.includes(array[i]) == false){
                quintosDoce.push(array[i])
            } else continue
        }
    }
    console.log(primerosDoce)
}

let carrito = {}

// Creo los botones para navegar entre páginas
const templateButton = document.getElementById('templateButton').content
const fragmentButton = document.createDocumentFragment()
const contenedorButton = document.getElementById('contenedor-button')

const crearBotones = array =>{
    let cantidadPagina = Math.ceil(array.length/mostrarCantidad)
    contenedorButton.innerHTML = ""
    for(let i = 1; i <= cantidadPagina; i++){
        templateButton.getElementById('botonPagina').dataset.id = `boton${i}`
        templateButton.getElementById('botonPagina').textContent = `${i}`

        const cloneButton = templateButton.cloneNode(true)
        fragmentButton.appendChild(cloneButton)
    }
    contenedorButton.appendChild(fragmentButton)
}

contenedorButton.addEventListener('click', e => mostrarEstos(e))
const mostrarEstos = e =>{
    let numeroBoton = (e.target.dataset.id).slice(5)
    if(numeroBoton == 1){
        mostrarProductos(primerosDoce)
    }
    if(numeroBoton == 2){
        mostrarProductos(segundosDoce)
    }
    if(numeroBoton == 3){
        mostrarProductos(tercerosDoce)
    }
    if(numeroBoton == 4){
        mostrarProductos(cuartosDoce)
    }
    if(numeroBoton == 5){
        mostrarProductos(quintosDoce)
    }
    e.stopPropagation()
}

productos.addEventListener('click', e => agregarCarrito(e))

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
botonCarrito.addEventListener('click', () => mostrarCarrito())

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

botonVaciar.addEventListener('click', () => vaciarCarrito())
const vaciarCarrito = () =>{
    carrito = {}
    let arrayCarrito = Object.values(carrito)
    armarCarrito(arrayCarrito)
    mostrarTotal()
}

// Funcionalidad a los Botones de Sumar y Restar

modalCarrito.addEventListener('click', e => botonAccion(e))
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

// Filtrado
const tipoFiltrado = document.getElementById('tipo-filtrado')

tipoFiltrado.addEventListener('change',() => modificarFiltro())

const modificarFiltro = () =>{
    let valorFiltro = tipoFiltrado.value
    let arrayFiltrado = []
    if(valorFiltro == "Todos"){
        arrayFiltrado = stockTotal
    } else{
        arrayFiltrado = stockTotal.filter( el => el.tipo == valorFiltro)
    }
    dividirProductos(arrayFiltrado)
    mostrarProductos(primerosDoce)
    crearBotones(arrayFiltrado)

}

const ordenarProductos = document.getElementById('ordenar')

ordenarProductos.addEventListener('change', () => ordenProductos())

const ordenProductos = () =>{
    let valorOrden = ordenarProductos.value
    if(valorOrden == ""){
        return
    }
    if(valorOrden == "A-Z"){
        stockTotal.sort((a, b) =>{
            if (b.nombre > a.nombre){
                return -1
            }
        })
    }
    if(valorOrden == "Z-A"){
        stockTotal.sort((a, b) =>{
            if (a.nombre > b.nombre){
                return -1
            }
        })
    }
    if(valorOrden == "$+"){
        stockTotal.sort((a, b) =>{
            if (a.precio > b.precio){
                return -1
            }
        })
    }
    if(valorOrden == "$-"){
        stockTotal.sort((a, b) =>{
            if (b.precio > a.precio){
                return -1
            }
        })
    }
    modificarFiltro()
}

