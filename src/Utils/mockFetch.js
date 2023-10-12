const products = [
    {id: 1, name: "Modular", category : "muebles" , price: 17200, stock: 4, description: "MODULAR IMPERIAL 190X80cm", img: "https://acdn.mitiendanube.com/stores/002/026/119/products/img-20230105-wa02521-6b880ee03b4d41bdac16729416707377-480-0.jpg" },
    {id: 2, name: "A14", category : "tecnologia" , price: 86000, stock: 8, description: "Celular Samsung A14 ", img: "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/a/samsung-a14-5g-front_1.png" },
    {id: 3, name: "Televisor ´42", category : "tecnologia" , price: 213900, stock: 5, description: "Televisor Hitachi ´42 Full HD", img: "https://www.megatone.net/Images/Articulos/zoom2x/252/TEL4219HIT_2.jpg" },
    {id: 4, name: "Modular Fijo de Pino", category : "muebles" , price: 43000, stock: 4, description: "MODULAR FIJO DE PINO 100 CM", img: "https://acdn.mitiendanube.com/stores/912/364/products/modular-de-pino-rosario-120-cm-precios11-9759aef86089f5e8cf16643101686527-640-0.webp" },
    {id: 5, name: "Despensero de Pino ", category : "muebles" , price: 14000, stock: 1, description: "Despensero de Pino 80CM", img: "https://acdn.mitiendanube.com/stores/912/364/products/despensero-de-pino-80-cm-puertas-vidrio1-73406b594e851cb31616002964894020-640-0.jpg" }
]

export const mFetch = (pid) => new Promise((res, rej) => {
        setTimeout(() => {
            res(pid ? products.find(products => products.id === pid) : products)
        }, 500)
})