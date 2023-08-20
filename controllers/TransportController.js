const { errorValidations } = require('../helper');
const {Transports} = require('../models/index')
const { Validator } = require('node-input-validator');


const TransportController = {

    async index(req, res){
        try {
            const transports = await Transports.findAll()
            return res.send(transports)
        } catch (error) {
            return res.send(error.message)
        }
    },

    async store(req, res){
        try {
            const {transport, type} = req.body
            const validate = new Validator(req.body, {
                transport: 'required',
                type: 'required'
            })

            const matched = await validate.check()
            if(!matched) return res.send({
                status: false,
                data:errorValidations(validate.errors)
            })

            const create = await Transports.create({
                transport: transport,
                type: type
            })
            return res.send('has created!')
        } catch (error) {
            throw error
        }
    },

    async view(req, res){
        try {
            const {id} = req.params
            const one = await Transports.findOne({
                where:{id:id}
            })
        } catch (error) {
            throw error
        }
    },

    async update(req, res){
        try {
            const {id} = req.params
            const {transport, type} = req.body
            const validate = new Validator(req.body, {
                transport: 'required',
                type: 'required'
            })

            const matched = await validate.check()
            if(!matched) return res.send({
                status:false,
                data:errorValidations(validate.errors)
            })

            const update = await Transports.update({
                transport: transport,
                type:type
            },{
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
            const destroy = await Transports.destroy({
                where:{id:id}
            })
            return res.send('has deleted!')
        } catch (error) {
            throw error
        }
    }

}
module.exports=TransportController