const mongoose=require('mongoose')

const Schema = mongoose.Schema;

const bookSchema = mongoose.Schema (
    {
        title:{
            type:String,
            required:true,
        },
        author:{
            type:String,
            required: true,
        },
        publishYear:{
            type:Number,
            required:true,
        },
        
    },
    {timestamps:true}
)
module.exports = mongoose.model("Bookstore", bookSchema)