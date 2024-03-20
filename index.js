class ProductManager {
    constructor() {
        this.products = []
        this.nextId = 1
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        const productExist = this.products.find((product) => product.code === code)
        if (productExist) {
            console.log(`El código de producto ${code} ya está asignado a ${productExist.title}`)
            return
        }

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log(`${title} no se agregó ya que no tiene todos los campos obligatorios`)
            return
        }
        else {
            const newProduct = {
                id:this.nextId++,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            this.products.push(newProduct)
            console.log(`El producto ${newProduct.title} se agregó correctamente`)
        }
    }

    getProducts() {
        return this.products
    }

    getProductById(id) {
        const productId = this.products.find((product) => product.id === id)
        if (!productId) {
            return ('Producto no encontrado')
        }
        else {
            return productId
        }
    }
}

const producto = new ProductManager()
//Agrega un producto
producto.addProduct('producto prueba', 'Este es un producto prueba”',200, 'Sin imagen', 'abc123', 25)

//Intenta agregar un producto con el mismo ID
producto.addProduct('producto prueba2', 'Este es un producto prueba2”',300, 'Sin imagen', 'abc123', 23)

//Intenta agregar un producto sin todos los campos
producto.addProduct('producto prueba3', 'Este es un producto prueba3',400, 'abc126', 10)

//Muestra toodos los productos
console.log(producto.getProducts())

//Muestra el producto con el id 1
console.log(producto.getProductById(1))

//Busca un producto con ID inexistente
console.log(producto.getProductById(3))