import  { MongooseModule }  from    "@nestjs/mongoose"

import  {ProductsService}   from    "./productServices"
import  {ProductController} from    "./productController"
import  {Module}    from    "@nestjs/common"
import  {ProductSchema} from    "./schemas/productSchema"

@Module({
    imports: [
        MongooseModule.forFeature([{name: "Products", schema: ProductSchema }]),
        // Connecting MongoDB and creating a schema
        MongooseModule.forRoot("mongodb+srv://<UserDB>:<Password>@cluster0.o3gg1.mongodb.net/?retryWrites=true&w=majority"),
    ],
    controllers:[ProductController],
    providers:  [ProductsService]
})


export  class   ProductModule{

}
