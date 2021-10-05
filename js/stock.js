let stockTotal = []

// STOCK BASES
stockTotal.push(
    {id: 1, tipo: "Base", nombre: "Base Saona", precio: 250, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "./img/Productos/velaChipre.jpeg"},
    {id: 2, tipo: "Base", nombre: "Base Ibiza", precio: 280, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 3, tipo: "Base", nombre: "Base Tulum", precio: 300, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 4, tipo: "Base", nombre: "Base Niza", precio: 300, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 5, tipo: "Base", nombre: "Base Hawaii", precio: 400, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 6, tipo: "Base", nombre: "Base Bayahibe", precio: 450, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 7, tipo: "Base", nombre: "Espejo Índico", precio: 500, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 8, tipo: "Base", nombre: "Bandeja Mediterráneo", precio: 800, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
)
// STOCK DECO
stockTotal.push(
    {id: 9, tipo: "Deco", nombre: "Cascada Aconcagua", precio: 750, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 10, tipo: "Deco", nombre: "Pack x10 Sahumerios", precio: 100, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 11, tipo: "Deco", nombre: "Pack x5 Sahumerios", precio: 70, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 12, tipo: "Deco", nombre: "Hornitos Castilla y León", precio: 700, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 13, tipo: "Deco", nombre: "Repuesto para Hornito", precio: 250, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 14, tipo: "Deco", nombre: "Wax Bars Bahía x2", precio: 300, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
)
// STOCK VELAS
stockTotal.push(
    {id: 15, tipo: "Velas", nombre: "Vela Málaga Shore", precio: 450, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "./img/Productos/velaMalaga.jpeg"},
    {id: 16, tipo: "Velas", nombre: "Vela Guinea", precio: 450, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 17, tipo: "Velas", nombre: "Vela Malasia", precio: 500, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 18, tipo: "Velas", nombre: "Vela Milán", precio: 500, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "./img/Productos/velaMilan.jpeg"},
    {id: 19, tipo: "Velas", nombre: "Vela Nepal", precio: 500, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "./img/Productos/velaNepal.jpeg"},
    {id: 20, tipo: "Velas", nombre: "Vela Caucasia", precio: 550, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "./img/Productos/velaCaucasia.jpeg"},
    {id: 21, tipo: "Velas", nombre: "Vela Mónaco", precio: 600, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "./img/Productos/velaMonaco.jpeg"},
    {id: 22, tipo: "Velas", nombre: "Vela Montenegro", precio: 600, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "./img/Productos/velaMontenegro.jpeg"},
    {id: 23, tipo: "Velas", nombre: "Vela Roma", precio: 650, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "./img/Productos/velaRoma.jpeg"},
    {id: 24, tipo: "Velas", nombre: "Vela Cartagena", precio: 750, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "./img/Productos/velaCartagena.jpeg"},
    {id: 25, tipo: "Velas", nombre: "Vela Moscú", precio: 800, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "./img/Productos/velaMoscu.jpeg"},
    {id: 26, tipo: "Velas", nombre: "Vela Belice XL", precio: 850, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "./img/Productos/velaBeliceXL.jpeg"},
    {id: 27, tipo: "Velas", nombre: "Vela Viena", precio: 900, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 28, tipo: "Velas", nombre: "Vela Praga", precio: 1000, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "./img/Productos/velaPraga.jpeg"},
    {id: 29, tipo: "Velas", nombre: "Vela Shanghai", precio: 1400, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "./img/Productos/velaShangai.jpeg"},
    {id: 30, tipo: "Velas", nombre: "Vela Hydra", precio: 1700, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "./img/Productos/velaHydra.jpeg"},
    {id: 31, tipo: "Velas", nombre: "Vela Afrodita", precio: 650, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "./img/Productos/velaAfrodita.jpeg"},
    {id: 32, tipo: "Velas", nombre: "Vela Afrodita Mini", precio: 200, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "./img/Productos/velaAfroditaMini.jpeg"},
    {id: 33, tipo: "Velas", nombre: "Vela Afrodita Mini x2", precio: 350, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 34, tipo: "Velas", nombre: "Combo Afrodita + Mini", precio: 750, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 35, tipo: "Velas", nombre: "Colección Zodiac", precio: 500, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "./img/Productos/velaZodiacGeminis.jpeg"},
)
// STOCK SPA
stockTotal.push(
    {id: 50, tipo: "Spa", nombre: "Baño de Hierbas", precio: 380, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 51, tipo: "Spa", nombre: "Antifaz", precio: 320, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 52, tipo: "Spa", nombre: "Almohadilla Chica", precio: 450, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 53, tipo: "Spa", nombre: "Almohadilla Grande", precio: 580, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 54, tipo: "Spa", nombre: "Kit Chico Almohadilla", precio: 650, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 55, tipo: "Spa", nombre: "Kit Grande Almohadilla", precio: 750, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 56, tipo: "Spa", nombre: "Pack x3 Jabones Tahití", precio: 400, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
)
// STOCK OTROS
stockTotal.push(
    {id: 90, tipo: "Otros", nombre: "Apagavelas Catalina", precio: 200, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 91, tipo: "Otros", nombre: "Hoja Aruba", precio: 250, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 92, tipo: "Otros", nombre: "Base Fiyi", precio: 350, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 93, tipo: "Otros", nombre: "Aro Hazel Bay", precio: 700, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},
    {id: 94, tipo: "Otros", nombre: "Caja Caucasia", precio: 250, descripción: "Breve Descripción del Producto para mostrar al hacer click", stock: 10, img: "img/ImagenGris.png"},

)


// console.log(stockTotal)
