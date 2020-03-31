const mongo = require('mongoose')


const UserSchema = new mongo.Schema({
    name: String,
    idade: Number
})

module.exports = mongo.model('Users', UserSchema)