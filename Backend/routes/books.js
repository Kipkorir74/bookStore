const express = require('express')

const{getAllBooks, getBook, createBook, deleteBook, updateBook} = require('../controllers/booksController')

// const requireAuth = require('../middleware/requireAuth')


const router = express.Router()

//require auth for all workout routes

// router.use(requireAuth)

//retrive all workouts
router.get('/', getAllBooks)

// retrieve a single workout
router.get('/:id', getBook)

//add a new workout
router.post('/', createBook)

//delete a workout
router.delete('/:id', deleteBook)

//Update a workout
router.patch('/:id', updateBook)



module.exports = router