const { Validator } = require("node-input-validator")
const {TransportClass} = require("../models/index")
const { errorValidations } = require("../helper")


const ClassController = {

    async index(req, res){
        try {
            const get = await TransportClass.findAll()
            return res.send(get)
        } catch (error) {
            throw error
        }
    },

    async store(req, res){
        try {
            const {transport_id, tr_class, price} = req.body
            const validate = new Validator(req.body, {
                transport_id: 'required',
                tr_class: 'required',
                price: 'required'
            })

            const matched = await validate.check()
            if(!matched) return res.send({
                status:false,
                data:errorValidations(validate.errors)
            })

            const create = await TransportClass.create({
                transport_id: transport_id,
                class: tr_class,
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
            const one = await TransportClass.findOne({
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
            const {transport_id, tr_class, price} = req.body
            const validate = new Validator({
                transport_id: 'required',
                tr_class: 'required',
                price: 'required'
            })
            const matched = await validate.check()
            if(!matched) return res.send({
                status:false,
                data:errorValidations(validate.errors)
            })

            const create = await TransportClass.update({
                transport_id: transport_id,
                class: tr_class,
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
            const del = await TransportClass.destroy({
                where:{id:id}
            })
            return res.send('has deleted!')
        } catch (error) {
            throw error
        }
    }

}

module.exports = ClassController