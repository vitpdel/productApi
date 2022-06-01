import { Controller, Get } from "@nestjs/common";

@Controller("products")

export  class   ProductController{

    @Get()
    getAll():string{
        return "List all products"
    }

    getOne():string{
        return `Return the product $${params.id}`
    }

}
