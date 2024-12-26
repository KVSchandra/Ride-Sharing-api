const express = require('express')
const {
    userDetails,
    addUserDetails,
    driverDetails,
    addDriverDetails,
    getRideDetails,
    addRideDetails
} = require('../controllers/ride-sharing-controllers')

const router = express.Router()

router.get('/get-user-details', userDetails)
router.post('/add-user-details', addUserDetails)
router.get('/get-driver-details', driverDetails)
router.post('/add-driver-details', addDriverDetails)
router.get('/get-ride-details', getRideDetails)
router.post('/add-ride-details', addRideDetails)

module.exports = router