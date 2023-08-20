const { Validator } = require("node-input-validator")
const {TransportRute} = require("../models/index")
const { errorValidations } = require("../helper")

const RutesController = {

    async index(req, res){
        try {
            const get = await TransportRute.findAll()
            return res.send(get)
        } catch (error) {
            throw error
            return res.send(error)
        }
    },

    async store(req, res){
        try {
            const {origin, destination} = req.body
            const validate = new Validator(req.body, {
                origin: 'required',
                destination: 'required'
            })

            const matched = await validate.check()
            if(!matched) return res.send({
                status:false,
                data:errorValidations(validate.errors)
            })

            const create = await TransportRute.create({
                origin: origin,
                destination: destination
            })
            return res.send('has created!')
        } catch (error) {
            throw error
        }
    },

    async view(req, res){
        try {
            const {id} = req.params
            const one = await TransportRute.findOne({
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
            const {origin, destination} = req.body
            const validate = new Validator({
                origin: 'required',
                destination: 'required'
            })
            const matched = await validate.check()
            if(!matched) return res.send({
                status:false,
                data:errorValidations(validate.errors)
            })

            const create = await TransportRute.update({
                origin: origin,
                destination: destination
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
            const del = await TransportRute.destroy({
                where:{id:id}
            })
            return res.send('has deleted!')
        } catch (error) {
            throw error
        }
    }

}
module.exports = RutesController