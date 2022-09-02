import  mongoose    from    "mongoose"

// Creating a schema for products
export  const   ProductSchema   =   new mongoose.Schema({
    id: Number,
    code:   String,
    name:   String,
    price:  Number
})

