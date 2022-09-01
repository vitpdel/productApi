import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import  {Product}   from    "./productModel"
import { ProductsService } from "./productServices";

@Controller("products")

export  class   ProductController{
    constructor(private productsService: ProductsService){
        
    }


    @Get()
    getAll():Product[]{ // Return a product list
        return this.productsService.getAll()
    }

    
    @Get()
    getOne(@Param() params):Product{ // Return one product
        return this.productsService.getOne(params.id)
    }


    @Post() 
    create(@Body() product: Product){ // Create a new product
        product.id  =   100
        this.productsService.create(product)
    }


    @Put()
    change(@Body()product:  Product):Product{ // Change a product data
        return  this.productsService.change(product)
    }


    @Delete(":id")
    delete(@Param() params){ // Delete a product
        this.productsService.delete(params.id)
    }
}
