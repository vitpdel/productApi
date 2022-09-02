import { Document } from "mongoose"

//  Creating a document for Product
export  class   Product extends Document{

    id: number
    code:   string
    name:   string
    price:  number    

}
