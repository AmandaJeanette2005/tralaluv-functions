const {Xperience} = require("../models/index")
const { Validator } = require("node-input-validator")
const { errorValidations } = require("../helper")


const XperienceController = {

    async index(req, res){
        try {
            const get = await Xperience.findAll()
            return res.send(get)
        } catch (error) {
            throw error
        }
    },

    async store(req, res){
        try {
            const {name, image, description, stock_tickets, price} = req.body
            const validate = new Validator(req.body, {
                name: 'required',
                image: 'required',
                description: 'required',
                stock_tickets: 'required',
                price: 'required'
            })

            const matched = await validate.check()
            if(!matched) return res.send({
                status:false,
                data:errorValidations(validate.errors)
            })

            const create = await Xperience.create({
                name: name,
                image: image,
                description:description,
                stock_tickets:stock_tickets,
                price:price
            })
            return res.send('has created!')
        } catch (error) {
            throw error
            return res.send(error)
        }
    },

    async view(req, res){
        try {
            const {id} = req.params
            const one = await Xperience.findOne({
                where:{id:id}
            })            
            return res.send(one)
        } catch (error) {
            throw error
            return res.send(error)
        }
    },

    async update(req, res){
        try {
            const {id} = req.params
            const {name, image, description, stock_tickets, price} = req.body
            const validate = new Validator({
                name: 'required',
                image: 'required',
                description: 'required',
                stock_tickets: 'required',
                price: 'required'
            })
            const matched = await validate.check()
            if(!matched) return res.send({
                status:false,
                data:errorValidations(validate.errors)
            })

            const create = await Xperience.update({
                name: name,
                image: image,
                description:description,
                stock_tickets:stock_tickets,
                price:price
            }, {
                where:{id:id}
            })
            return res.send('has updated!')
        } catch (error) {
            throw error
            return res.send(error)
        }
    },

    async delete(req, res){
        try {
            const {id} = req.params
            const del = await Xperience.destroy({
                where:{id:id}
            })
            return res.send('has deleted!')
        } catch (error) {
            throw error
            return res.send(error)
        }
    }

}
module.exports = XperienceController