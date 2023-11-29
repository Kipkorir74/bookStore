const booksModel = require('../models/book Model')
const mongoose = require('mongoose')


//async keyword indicates that the function contains asynchronous code and might 
//use await to pause execution until promises are resolved.

//Retrieve all books

const getAllBooks = async (req, res) => {
    // const user_id =req.user._id
    // const workouts = await workoutModel.find({user_id}).sort({ createdAt: -1 })
    // res.status(200).json(workouts)

}

//Retrieve a single workout
const getBook = async (req, res) => {
    // const { id } = req.params

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({ error: 'No such workout exists' })
    // }

    // const workout = await workoutModel.findById(id)

    // if (!workout) {
    //     return res.status(404).json({ error: "No such workout exists" })
    // }
    // else {
    //     return res.status(200).json(workout)
    // }
}

//Create a single workout
const createBook = async (req, res) => {
    // destructure the req.body object to extract these properties.
    const { title, author, publishYear } = req.body

    let emptyFields = []

    if(!title){
        emptyFields.push('title')
    }

    if(!author){
        emptyFields.push('author')
    }

    if(!publishYear){
        emptyFields.push('publishYear')
    }

    if(emptyFields.length > 0) {
        return res.status(400).json({
            error:"Please fill all the fields", emptyFields
        })
    }

    try {
        // const user_id = req.user._id
        // Create a new workout document using the Mongoose model booksModel.
        const book = await booksModel.create({ title, author, publishYear})

        // Respond with a 200 (OK) status code and the created workout as JSON.
        res.status(200).json(book)
    }
    catch (error) {
        // If there is an error, respond with a 400 (Bad Request) status code and an error message as JSON.
        res.status(400).json({ error: error.message, emptyFields })
    }
}

//Delete a workout
const deleteBook = async (req, res) => {
    // const { id } = req.params

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({ error: 'No such workout exists' })
    // }

    // const workout = await workoutModel.findOneAndDelete({ _id: id })

    // if (!workout) {
    //     return res.status(404).json({ error: "No such workout exists" })
    // }

    // res.status(200).json(workout)
}

// Update a workout
const updateBook = async (req, res) => {
    // const { id } = req.params

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({ error: 'No such workout exists' })
    // }

    // const workout = await workoutModel.findByIdAndUpdate({_id:id}, {
    //     ...req.body
    // })

    // if (!workout) {
    //     return res.status(404).json({ error: "No such workout exists" })
    // }

    // res.status(200).json(workout)
}

module.exports = {
    getAllBooks,
    getBook,
    createBook,
    deleteBook,
    updateBook
}