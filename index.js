class productManager{
    constructor(){
        this.products= []
    }

    getProducts = () =>{ console.log(this.products)}

    getNextID= () =>{
        const count = this.products.length
        if(count>0){
            const lastProduct= this.products[count-1]
            const id= lastProduct.id +1
            return id
        }
        else{
            return 1
        }
      /*   return (count>0) ? this.events[count-1].id +1 : 1 */
    }

    addProducts = (title, description, price, thumbnail, code, stock)=>{
        const id = this.getNextID()
        const validatedCode = this.validateCode(code)
        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            validatedCode,
            stock
        }
        if((title && description && price && thumbnail && validatedCode && stock)!= null){
            this.products.push(product)
        }   
    }

    validateCode = (code)=>{
       const product= this.products.find(product => product.validatedCode == code)
       if( product == undefined) return code
       else return null
    }

    getProductByID = (productID) =>{
        const productByID = this.products.find(product=> product.id == productID)
        if(productByID != undefined) console.log(productByID) 
        else console.log ("Not found")
    }
}


/* myProducts.addProducts("coca", "gaseosa", 30, "foto", 45, 10)
myProducts.addProducts("sprite","gaseosa", 40, "foto", 4, 16)
myProducts.addProducts("fanta", 40, "foto", 45, 16)*/

/* myProducts.getProducts() */
/* myProducts.getProductByID(1) */
/* console.log(myProducts.products)  */


 //TESTING
 const myProducts = new productManager()
 
 myProducts.addProducts("producto prueba", "Este es un producto de prueba", 200, "sin imagen", "abc123", 25)
 myProducts.addProducts("producto prueba", "Este es un producto de prueba", 200, "sin imagen", "abc123", 25)
 myProducts.getProducts()
 myProducts.getProductByID(1)