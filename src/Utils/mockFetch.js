const products = [
    {id: 1, name: "Modular", category : "muebles" , price: 1000, stock: 20, description: "MODULAR IMPERIAL 190X80cm", img: "https://acdn.mitiendanube.com/stores/002/026/119/products/img-20230105-wa02521-6b880ee03b4d41bdac16729416707377-480-0.jpg" },
    {id: 2, name: "A14", category : "tecnologia" , price: 524, stock: 3, description: "Celular Samsung A14 ", img: "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/a/samsung-a14-5g-front_1.png" },
    {id: 3, name: "Televisor ´42", category : "tecnologia" , price: 3.14, stock: 99999999999999999999999999999999999999999999999999999999999999999999999999, description: "Televisor Hitachi ´42 Full HD", img: "https://www.megatone.net/Images/Articulos/zoom2x/252/TEL4219HIT_2.jpg" },
    {id: 4, name: "Producto 4", category : "muebles" , price: 777, stock: 777, description: "Mueble", img: "https://acdn.mitiendanube.com/stores/002/026/119/products/img-20230105-wa02521-6b880ee03b4d41bdac16729416707377-480-0.jpg" },
    {id: 5, name: "Producto 5", category : "muebles" , price: 0.99, stock: 1, description: "Mueble", img: "https://acdn.mitiendanube.com/stores/002/026/119/products/img-20230105-wa02521-6b880ee03b4d41bdac16729416707377-480-0.jpg" }
]

export const mFetch = (pid) => new Promise((res, rej) => {
        setTimeout(() => {
            res(pid ? products.find(products => products.id === pid) : products)
        }, 500)
})