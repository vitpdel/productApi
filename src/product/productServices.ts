import { Injectable } from "@nestjs/common"
import  {Product}   from    "./productModel"
import  {InjectModel}   from    "@nestjs/mongoose"
import { Model } from "mongoose"

@Injectable()
export  class   ProductsService{
    // Instead of the ProductController searching and creating objects, this class does that
    // so it's injected as a dependecy of the ProductController constructor

    constructor(@InjectModel("Product") private readonly productModel:Model<Product>){
            
        }

    
    async   getAll(){
        return  await   this.productModel.find().exec()
    }


    async   getOne(id:number){
        return  await  this.productModel.findById(id).exec()
    }


    async   create(product:Product){
        const   createdProduct  =   new this.productModel(product)
        return  await   createdProduct.save()
    }


    async   change(id:number,   product:Product){
        await   this.productModel.updateOne({_id:id},product).exec()
        return  this.getOne(id)
    }


    async   delete(id:string){
        return  await   this.productModel.deleteOne({_id:id}).exec()
    }
} 
