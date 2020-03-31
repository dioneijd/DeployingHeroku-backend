const mongo = require('mongoose')
const User = require('../models/User')

const Users = {
    
    async index(req, res){
        const users = await User.find()

        return res.json(users)

    },
    
    async store(req, res){
        
        const user = await User.create(req.body)

        return res.json(user)

    }
}

module.exports = Users