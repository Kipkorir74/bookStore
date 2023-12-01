const express = require ("express");
const app = express();

require("dotenv").config()
const mongoose = require ("mongoose")

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// Registers middleware using app.use(). It tells Express to parse incoming JSON data from HTTP requests. This middleware is crucial for handling JSON data sent in the request body.
app.use(express.json())

app.get('/',(req,res) => {
    console.log(req);
    return res.status(234).send("Bienvenue")
} )

const booksRoutes = require ("./Backend/routes/books")

app.use('/api/bookstore', booksRoutes)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests 
        app.listen(process.env.PORT, () => {
            console.log("Connected to mongoDb and Listening to port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
