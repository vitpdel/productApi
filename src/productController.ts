import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";

@Controller("products")

export  class   ProductController{

    @Get()
    getAll():string{
        return "List all products"
    }

    
    getOne(@Param() params):string{
        return `Return the product ${params.id}`
    }


    @Post()
    create(@Body() product):string{
        console.log(product)
        return  `Product created: ${product}`
    }


    @Put()
    change(@Body()product):string{
        console.log(product)
        return  `Product updated: ${product}`
    }


    @Delete(":id")
    delete(@Param()params):string{
        return `Product deleted ${params.id}`
    }

}
