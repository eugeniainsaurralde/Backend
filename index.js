class productManager{
    constructor(){
        this.products= []
    }

    getProducts = () =>{return this.products}

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
        if((title && description && price && thumbnail && code && stock)!= null){
            this.products.push(product)
        }
        
    }

    validateCode = (code)=>{
       const product= this.products.find(product => product.validateCode != code)
      /*  console.log(product)
       if( product == undefined) return code
       else{
        console.log("ERROR. MISMO CODIGO")
       } */
    }

    getProductByID = (productID) =>{
        const productByID = this.products.find(product=> product.id == productID)
        if(productByID != undefined) console.log(productByID) 
    }
}

const myProducts = new productManager()
myProducts.addProducts("coca", "gaseosa", 30, "foto", 45, 10)
myProducts.addProducts("sprite","gaseosa", 40, "foto", 4, 16)
myProducts.addProducts("fanta", "gaseosa cero", 40, "foto", 45, 16)

myProducts.getProductByID(1)
/* console.log(myProducts.products) */