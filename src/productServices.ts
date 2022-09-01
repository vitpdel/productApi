import { Injectable } from "@nestjs/common"
import  {Product}   from    "./productModel"

@Injectable()
export  class   ProductsService{
    // Instead of the ProductController searching and creating objects, this class does that
    // so it's injected as a dependecy of the ProductController constructor


    products:   Product[]   =   [
        new Product("PRODUCT0", "First product", 10.00),
        new Product("PRODUCT1", "Second product",   20.00)
    ]


    getAll():Product[]{
        return  this.products
    }


    getOne(id:number): Product{
        return  this.products[0]
    }


    create(product:Product){
        this.products.push(product)
    }


    change(product:Product):Product{
        return  product
    }


    delete(id:number){
        this.products.pop()
    }
} 
