const { Validator } = require("node-input-validator")
const {Hotel} = require("../models/index")
const { errorValidations } = require("../helper")
const _ = require("lodash")

const HotelController = {

    async index(req, res){
        try {
            const get = await Hotel.findAll()
            return res.send(get)
        } catch (error) {
            throw error
        }
    },

    async store(req, res){
        try {
           const {name, image, city, type, available_room, price, room_facilities, address} = req.body
            // const validate = new Validator(req.body{
            //     name: 'required',
            //     image: 'required',
            //     city: 'required',
            //     address: 'required',
            //     type:'required',
            //     room_facilities: 'required',
            //     available_room: 'required',
            //     price: 'required'
            // })
            
            // const matched = await validate.check()
            // if(!matched) return res.send({
            //     status: false,
            //     data:errorValidations(validate.errors)
            // })

            const add = await Hotel.create({
                name:name,
                image:image,
                city:city,
                address:address,
                type:type,
                room_facilities:room_facilities,
                available_room:available_room,
                price:price
            })
            console.log(add)
            return res.send('has created!')
        } catch (error) {
            throw error
        }
    },

    async view(req, res){
        try {
            const {id} = req.params
            const one = await Hotel.findOne({
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
            const {name, image, city, type, available_room, price, room_facilities, address} = req.body

            const update = await Hotel.update({
                name:name,
                image:image,
                city:city,
                address:address,
                type:type,
                room_facilities:room_facilities,
                available_room:available_room,
                price:price
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
            const deleteHotel = await Hotel.destroy({
                where:{id:id}
            })
            return res.send('has deleted!')
        } catch (error) {
            throw error
        }
    },

    async viewByCity(req, res){
        try {
            const getCity = await Hotel.findAll()

            let Cities = [];

            getCity.forEach(element => {
                const arrIndex = _.findIndex(Cities, {city: element.dataValues.city});

                console.log(arrIndex, "arrIndex")
                if (arrIndex !== -1) {
                    Cities[arrIndex].list.push({...element.dataValues})
                } else {
                    Cities.push(
                        {
                            city: element.dataValues.city,
                            list: [{...element.dataValues}]
                        }
                    );
                };
            });
            return res.send(Cities)
        } catch (error) {
            throw error
        }
    }

}
module.exports = HotelController