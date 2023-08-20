const { Validator } = require("node-input-validator")
const {INV_hotel} = require("../models/index")
const { errorValidations } = require("../helper")

const InvHotelController = {

    async index(req, res){
        try {
            const get = await INV_hotel.findAll()
            return res.send(get)
        } catch (error) {
            return res.send(error)
        }
    },

    async store(req, res){
        try {
            const {hotel_id, name, email, no_hp, check_in, duration, check_out, guests, price} = req.body
            const validate = new Validator({
                hotel_id: 'required',
                name: 'required',
                email: ' required', 
                no_hp: 'required',
                check_in: 'required',
                duration: 'required',
                check_out: 'required',
                guests: 'required',
                price: 'required'
                
            })

            const matched = await validate.check()
            if(!matched) return res.send({
                status: false,
                data: errorValidations
            })

            const create = await INV_hotel.create({
                hotel_id:hotel_id,
                name:name,
                email:email,
                no_hp:no_hp,
                check_in:check_in,
                duration:duration,
                check_out:check_out,
                guests:guests,
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
            const del = await INV_hotel.destroy({
                where:{id:id}
            })
            return res.send('has deleted!')
        } catch (error) {
            return res.send(error)
        }
    }

}
module.exports = InvHotelController