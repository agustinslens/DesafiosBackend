class ProductManager {
    constructor() {
        this.products = [];
    }
    getProducts = () => {
        return this.products;
    }
    addProduct = (code, title, description, price, thumbnail, stock) => {

        if (code === undefined || title === undefined || description === undefined || price === undefined || thumbnail === undefined || stock === undefined) {
            console.log("All the fields must be completed")
            return;
        }
        let sameProduct = true;
        this.products.forEach(element => {
            if (element.code === code) {
                sameProduct = false;
            }
        });
        if (sameProduct === false) {
            console.log(`The field code ${code} is repeated`);
            return;
        }
        const product = {
            code: code ?? "",
            title: title ?? "",
            description: description ?? "",
            price: price ?? "",
            thumbnail: thumbnail ?? "",
            stock: stock ?? "",
            id: this.products.length + 1
        }

       
        this.products.push(product)
    }
    getProductById = (id) => {
        let indexValue = this.products.find((event) => event.id === id);
        if (!indexValue) {
            console.log("Not found");
            return;
        }
    }
}
const product1 = new ProductManager();
product1.addProduct("abc123", "Producto de prueba", "Este es un producto de prueba",200, "sin imagen", 25)
product1.addProduct("abc123", "Producto de prueba", "Este es un producto de prueba",200, "sin imagen", 25)
product1.addProduct("it2", "Cama", "Marron", 50.5, "../imagen2", 100)

product1.getProductById(3);
console.log(product1.getProducts());

