const express = require('express')
const TransportController = require("../controllers/TransportController")
const HotelController = require('../controllers/HotelController')
const XperienceController = require('../controllers/XperienceController')
const RutesController = require('../controllers/RutesController')
const ClassController = require('../controllers/ClassController')
const BusAttributeController = require('../controllers/BusAttributeController')
const InvXperienceController = require('../controllers/InvXperienceController')
const InvHotelController = require('../controllers/InvHotelController')
const UsersController = require('../controllers/UsersController')

const router = express.Router()

//transport
router.get('/transport', TransportController.index)
router.post('/transport', TransportController.store)
router.get('/transport/:id', TransportController.view)
router.put('/transport/:id', TransportController.update)
router.delete('/transport/:id', TransportController.delete)

//tr_rute
router.get('/transport-rute', RutesController.index)
router.post('/transport-rute', RutesController.store)
router.get('/transport-rute/:id', RutesController.view)
router.put('/transport-rute/:id', RutesController.update)
router.delete('/transport-rute/:id', RutesController.delete)

//tr_class
router.get('/transport-class', ClassController.index)
router.post('/transport-class', ClassController.store)
router.get('/transport-class/:id', ClassController.view)
router.put('/transport-class/:id', ClassController.update)
router.delete('/transport-class/:id', ClassController.delete)

//hotel
router.get('/hotel', HotelController.index)
router.post('/hotel', HotelController.store)
router.get('/hotel/:id', HotelController.view)
router.put('/hotel/:id', HotelController.update)
router.delete('/hotel/:id', HotelController.delete)
router.get('/hotel-city', HotelController.viewByCity)

//xperience
router.get('/xperience', XperienceController.index)
router.post('/xperience', XperienceController.store)
router.get('/xperience', XperienceController.view)
router.put('/xperience/:id', XperienceController.update)
router.delete('/xperience/:id', XperienceController.delete)

//bus-attribute
router.get('/bus-attribute', BusAttributeController.index)
router.post('/bus-attribute', BusAttributeController.store)
router.get('/bus-attribute/:id', BusAttributeController.view)
router.put('/bus-attribute/:id', BusAttributeController.update)
router.delete('/bus-attribute/:id', BusAttributeController.delete)

//inv_xperience
router.get('/inv-Xperience', InvXperienceController.index)
router.post('/inv-Xperience', InvXperienceController.store)
router.delete('/inv-Xperience/:id', InvXperienceController.delete)

//inv_hotel
router.get('/inv-hotel', InvHotelController.index)
router.post('/inv-hotel', InvHotelController.store)
router.delete('/inv-hotel/:id', InvHotelController.delete)


//users
router.get('/users', UsersController.index)
router.post('/user', UsersController.store)
router.get('/user/:email', UsersController.view)

module.exports = router