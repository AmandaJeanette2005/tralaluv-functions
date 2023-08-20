const { Validator } = require("node-input-validator")
const {INV_Xperience} = require("../models/index")
const { errorValidations } = require("../helper")

const InvXperienceController = {

    async index(req, res){
        try {
            const get = await INV_Xperience.findAll()
            return res.send(get)
        } catch (error) {
            throw error
            return res.send(error)
        }
    },

    async store(req, res){
        try {
            const {xperience_id, name, email, no_hp, quantity, date, price} = req.body
            const validate = new Validator({
                xperience_id: 'required',
                name: 'required',
                email: ' required', 
                no_hp: 'required',
                quantity: 'required',
                date: 'required',
                price: 'required'
            })

            const matched = await validate.check()
            if(!matched) return res.send({
                status: false,
                data: errorValidations
            })

            const create = await INV_Xperience.create({
                xperience_id:xperience_id,
                name:name,
                email:email,
                no_hp:no_hp,
                quantity:quantity,
                date:date,
                price:price
            })
            return res.send('has created!')
        } catch (error) {
            throw error
            return res.send(error)
        }
    },

    async delete(req, res){
        try {
            const {id} = req.params
            const del = await INV_Xperience.destroy({
                where:{id:id}
            })
            return res.send('has deleted!')
        } catch (error) {
            return res.send(error)
        }
    }
}

module.exports = InvXperienceController