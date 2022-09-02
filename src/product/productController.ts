import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import  {Product}   from    "./productModel"
import { ProductsService } from "./productServices";

@Controller("products")

export  class   ProductController{
    constructor(private productService: ProductsService){
        
    }


    @Get()
    getAll(){ // Return a product list
        return this.productService.getAll()
    }

    
    @Get()
    getOne(@Param() params){ // Return one product
        return this.productService.getOne(params.id)
    }


    @Post() 
    create(@Body() product){ // Create a new product
        product.id  =   100
        return  this.productService.create(product)
    }


    @Put()
    change(@Param("id") id: number, @Body()product:  Product){ // Change a product data
        return  this.productService.change(id,  product)
    }


    @Delete(":id")
    delete(@Param() params){ // Delete a product
        this.productService.delete(params.id)
    }
}
