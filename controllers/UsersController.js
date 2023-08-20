const {Users} = require("../models/index")

const UsersController = {

    async index(req, res){
        try {
            const get = await Users.findAll()
            return res.send(get)
        } catch (error) {
            throw error
            return res.send(error)
        }
    },

    async store(req, res){
        try {
            const {name, gender, no_hp, email, password} = req.body
            const add = await Users.create({
                name:name,
                gender:gender,
                no_hp:no_hp,
                email:email,
                password:password
            })
            return res.send('has created!')
        } catch (error) {
            throw error 
            return res.send(error)
        }
    },

    async view(req, res){
        try {
            const {email} = req.params  
            const one = await Users.findOne({
                where:{email:email}
            })
        } catch (error) {
            throw error
            return res.send(error)
        }
    }
}
module.exports = UsersController