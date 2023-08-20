const { Validator } = require("node-input-validator")
const {BusAttribute} = require("../models/index")
const { errorValidations } = require("../helper")

const BusAttributeController = {

    async index(req, res){
        try {
            const get = await BusAttribute.findAll()
            return res.send(get)
        } catch (error) {
            throw error
            return res.send(error)
        }
    },

    async store(req, res){
        try {
            const {rute, price} = req.body
            const validate = new Validator(req.body, {
                rute: 'required',
                price: 'required'
            })

            const matched = await validate.check()
            if(!matched) return res.send({
                status:false,
                data:errorValidations(validate.errors)
            })

            const create = await BusAttribute.create({
                rute: rute,
                price: price
            })
            return res.send('has created!')
        } catch (error) {
            throw error
        }
    },

    async view(req, res){
        try {
            const {id} = req.params
            const one = await BusAttribute.findOne({
                where:{id:id}
            })            
            return res.send(one)
        } catch (error) {
            throw error
        }
    },

    async update(req, res){
        try {
            const {id} = req.params
            const {rute, price} = req.body
            const validate = new Validator({
                rute: 'required',
                price: 'required'
            })
            const matched = await validate.check()
            if(!matched) return res.send({
                status:false,
                data:errorValidations(validate.errors)
            })

            const create = await BusAttribute.update({
                rute: rute,
                price: price
            }, {
                where:{id:id}
            })
            return res.send('has updated!')
        } catch (error) {
            throw error
        }
    },

    async delete(req, res){
        try {
            const {id} = req.params
            const del = await BusAttribute.destroy({
                where:{id:id}
            })
            return res.send('has deleted!')
        } catch (error) {
            throw error
        }
    }

}
module.exports = BusAttributeController