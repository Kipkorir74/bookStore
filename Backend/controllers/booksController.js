const booksModel = require('../models/book Model')
const mongoose = require('mongoose')


//async keyword indicates that the function contains asynchronous code and might 
//use await to pause execution until promises are resolved.

//Retrieve all books

const getAllBooks = async (req, res) => {
    // const user_id =req.user._id
    const books = await booksModel.find({})
    res.status(200).json({
        count: books.length,
        data: books
    })

}

//Retrieve a single workout
const getBook = async (req, res) => {
    try {
        const { id } = req.params
        const book = await booksModel.findById(id)

        return res.status(200).json(book)

    } catch (error) {

        res.status(404).json({ error:"No such book exists" })

    }


    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({ error: 'No such book exists' })
    // }




}

//Create a single workout
const createBook = async (req, res) => {
    // destructure the req.body object to extract these properties.
    const { title, author, publishYear } = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }

    if (!author) {
        emptyFields.push('author')
    }

    if (!publishYear) {
        emptyFields.push('publishYear')
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({
            error: "Please fill all the fields", emptyFields
        })
    }

    try {
        // const user_id = req.user._id
        // Create a new workout document using the Mongoose model booksModel.
        const book = await booksModel.create({ title, author, publishYear })

        // Respond with a 200 (OK) status code and the created workout as JSON.
        res.status(200).send({message:"Book created successfully"})
    }
    catch (error) {
        // If there is an error, respond with a 400 (Bad Request) status code and an error message as JSON.
        res.status(400).json({ error: error.message, emptyFields })
    }
}

//Delete a workout
const deleteBook = async (req, res) => {

    try{
        const { id } = req.params

        const book = await booksModel.findOneAndDelete({ _id: id })

        res.status(200).send({message:"Book deleted successfully"})

    }
    catch(error){
        res.status(404).json({ error:"No such book exists" })
    }


    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({ error: 'No such workout exists' })
    // }
}

// Update a workout
const updateBook = async (req, res) => {
    try {
        const { id } = req.params

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({ error: 'No such workout exists' })
    // }

    const book = await booksModel.findByIdAndUpdate({_id:id}, {
        ...req.body
    })

    if (!book) {
        return res.status(404).json({ error: "No such book exists" })
    }

    res.status(200).send({message:"Book updated successfully"})
    }
    catch(error){
        res.status(404).json({ error:"No such book exists" })
    }
    
}

module.exports = {
    getAllBooks,
    getBook,
    createBook,
    deleteBook,
    updateBook
}