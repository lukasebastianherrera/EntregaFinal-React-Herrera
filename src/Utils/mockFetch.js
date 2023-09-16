const products = [
    {id: 1, name: "Producto 1", price: 1000, stock: 20, description: "Mueble", img: "https://acdn.mitiendanube.com/stores/002/026/119/products/img-20230105-wa02521-6b880ee03b4d41bdac16729416707377-480-0.jpg" },
    {id: 2, name: "Producto 2", price: 524, stock: 3, description: "Mueble", img: "https://acdn.mitiendanube.com/stores/002/026/119/products/img-20230105-wa02521-6b880ee03b4d41bdac16729416707377-480-0.jpg" },
    {id: 3, name: "Producto 3", price: 3.14, stock: 99999999999999999999999999999999999999999999999999999999999999999999999999, description: "Mueble", img: "https://acdn.mitiendanube.com/stores/002/026/119/products/img-20230105-wa02521-6b880ee03b4d41bdac16729416707377-480-0.jpg" },
    {id: 4, name: "Producto 4", price: 777, stock: 777, description: "Mueble", img: "https://acdn.mitiendanube.com/stores/002/026/119/products/img-20230105-wa02521-6b880ee03b4d41bdac16729416707377-480-0.jpg" },
    {id: 5, name: "Producto 5", price: 0.99, stock: 1, description: "Mueble", img: "https://acdn.mitiendanube.com/stores/002/026/119/products/img-20230105-wa02521-6b880ee03b4d41bdac16729416707377-480-0.jpg" }
]

export const mFetch = (pid) => new Promise((res, rej) => {
        setTimeout(() => {
            res(pid ? products.find(products => products.id === pid) : products)
        }, 2000)
})