const productos = [
    {id:1, name: "Peluche de Vaquita", img: "https://imgur.com/XhfkkTS.jpeg", price: 4000, description: "Un peluche de una vaquita", category: "Peluches", stock: 5},
    {id:2, name: "Peluche de pulpo", img: "https://i.imgur.com/qCxG6Go.jpeg", price: 1500, description: "Un peluche de un pulpito de 7 cm", category: "Peluches", stock: 7},
    {id:3, name: "Top verde", img: "https://i.imgur.com/hD9tij0.jpeg", price: 6000, description: "Una pupera verde", category: "Ropa", stock: 4},
    {id:4, name: "Cardigan de parches", img: "https://i.imgur.com/3H9549L.jpeg", price: 15000, description: "Un cardigan hecho enteramente con granny squares", category: "Ropa", stock: 2},
    {id:5, name: "Monedero", img: "https://imgur.com/JyJ7I1S.jpeg", price: 1200, description: "Un monedero de flor para guardar todas tus monedas", category: "Accesorios", stock: 15},
    {id:6, name: "Peluche de Manzana", img: "https://imgur.com/IjDZCPI.jpeg", price: 1800, description: "¡Un peluche de manzana para que te acompañe a todos lados!", category: "Peluches", stock: 9},
    {id:7, name: "Peluche de Alicia", img: "https://imgur.com/yC1QNPf.jpeg", price: 5000, description: "¡Un peluche de Alicia en el País de las Maravillas!", category: "Peluches", stock: 3},
    {id:8, name: "Peluche de ranita", img: "https://imgur.com/aPIceQC.jpeg", price: 2000, description: "¡Un peluche de una ranita!", category: "Peluches", stock: 5},
    {id:9, name: "Peluche de lechuza", img: "https://imgur.com/kERTdqv.jpeg", price: 2000, description: "¡Un peluche de una lechuza!", category: "Peluches", stock: 7},
]

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve (productos);
            }, 1000);
        }else {
            reject ("No hay productos");
        }
    });
}

export const getProduct = (id) => {
    return new Promise ((resolve, reject) => {
        if (productos.length  > 0) {
            const Item = productos.find((producto) => producto.id == id)
            setTimeout(() => {
                if (Item) {
                    resolve(Item);
                }else {
                    reject("No existe este producto");
                }
            }, 1000);
        }else {
            reject ("No hay productos")
        }
    })
}