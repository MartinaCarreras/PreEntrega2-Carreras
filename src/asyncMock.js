export const productos = [
    {name: "Peluche de pulpo", img: "https://i.imgur.com/qCxG6Go.jpeg", price: 1500, description: "Explora el encanto del océano con nuestro peluche de pulpo tejido a mano. Una adición encantadora y llena de personalidad para cualquier colección.", category: "Peluches", stock: 7},
    {name: "Cardigan de parches", img: "https://i.imgur.com/3H9549L.jpeg", price: 15000, description: "Viste con elegancia y creatividad con nuestro cardigan de granny squares tejido con esmero. Un símbolo de estilo y calidez, perfecto para cualquier ocasión.", category: "Ropa", stock: 2},
    {name: "Monedero", img: "https://imgur.com/JyJ7I1S.jpeg", price: 1200, description: "Lleva la moda en tus manos con nuestro monedero tejido a crochet. Práctico, elegante y único, el complemento perfecto para tus aventuras diarias.", category: "Accesorios", stock: 15},
    {name: "Peluche de Manzana", img: "https://imgur.com/IjDZCPI.jpeg", price: 1800, description: "Descubre la dulzura de la naturaleza con nuestro peluche de manzana tejido a crochet. Un regalo encantador y juguetón que hará brillar cualquier día.", category: "Peluches", stock: 9},
    {name: "Peluche de Alicia", img: "https://imgur.com/yC1QNPf.jpeg", price: 5000, description: "Embárcate en un viaje mágico con nuestro peluche de Alicia en el País de las Maravillas. Una compañera encantadora que te llevará a aventuras inolvidables.", category: "Peluches", stock: 3},
    {name: "Peluche de ranita", img: "https://imgur.com/aPIceQC.jpeg", price: 2000, description: "Salta a la diversión con nuestro adorable peluche de ranita. Con detalles encantadores y suavidad inigualable, es el compañero perfecto para aventuras ilimitadas.", category: "Peluches", stock: 5},
    {name: "Peluche de lechuza", img: "https://imgur.com/kERTdqv.jpeg", price: 2000, description: "Descubre la sabiduría y la ternura con nuestro peluche de lechuza. Con sus ojos brillantes y su suavidad, es el compañero perfecto para acompañarte en tus aventuras nocturnas.", category: "Peluches", stock: 7},
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