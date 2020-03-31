require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())


const userController = require('./controllers/userController')
 
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.get('/', (req, res) => {
    return res.send('hello world')
})


app.get('/users', userController.index)
app.post('/users', userController.store)


app.listen(process.env.PORT || 3333)