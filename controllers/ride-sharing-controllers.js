const express = require('express')
const user = require('../models/users')
const driver = require('../models/drivers')
const ride = require('../models/rides')

const userDetails = async (req, res) => {
    try {
        const allUserDetails = await user.find({})
        if(allUserDetails) {
            res.status(200).json({
                success : true,
                message : "All user details are fetched successfully!",
                data : allUserDetails
            })
        }
        else {
            res.status(404).json({
                success : false,
                message : "No user details Found!"
            })
        }
    } catch (err) {
        res.status(500).json("Something went wrong! Please try again")
    }
}

const addUserDetails = async (req, res) => {
    try {
        const currUserDetails = req.body
        const addedUserDetails = await user.create(currUserDetails)

        if(addedUserDetails) {
            res.status(201).json({
                success : true,
                message : "User details has been added successfully!",
                data : addedUserDetails
            })
        }
        else {
            res.status(500).json({
                success : false, 
                message : "Something went wrong"
            })
        }
    } catch (err) {
        res.status(500).json({
            message : "Something went wrong! Please try again!",
            error : err
        })
    }
}

const driverDetails = async (req, res) => {
    try {
        const currDriverDetails = req.body
        const addedDriverDetails = await driver.create(currDriverDetails)

        if(addedUserDetails) {
            res.status(201).json({
                success : true,
                message : "Driver details has been added successfully!",
                data : addedDriverDetails
            })
        }
        else {
            res.status(500).json({
                success : false, 
                message : "Something went wrong"
            })
        }
    } catch (err) {
        res.status(500).json({
            message : "Something went wrong! Please try again!",
            error : err
        })
    }
}

const addDriverDetails = async (req, res) => {
    try {
        const allDriverDetails = await Driver.find({})
        if(allDriverDetails) {
            res.status(200).json({
                success : true,
                message : "All Driver details are fetched successfully!",
                data : allDriverDetails
            })
        }
        else {
            res.status(404).json({
                success : false,
                message : "No user details Found!"
            })
        }
    } catch (err) {
        res.status(500).json("Something went wrong! Please try again")
    }
}

const getRideDetails = async (req, res) => {
    try {
        const currRideDetails = req.body
        const addedRideDetails = await user.create(currRideDetails)

        if(addedUserDetails) {
            res.status(201).json({
                success : true,
                message : "Ride details has been added successfully!",
                data : addedRideDetails
            })
        }
        else {
            res.status(500).json({
                success : false, 
                message : "Something went wrong"
            })
        }
    } catch (err) {
        res.status(500).json({
            message : "Something went wrong! Please try again!",
            error : err
        })
    }
}

const addRideDetails = async (req, res) => {
    try {
        const allRideDetails = await Ride.find({})
        if(allRideDetails) {
            res.status(200).json({
                success : true,
                message : "All Ride details are fetched successfully!",
                data : allRideDetails
            })
        }
        else {
            res.status(404).json({
                success : false,
                message : "No user details Found!"
            })
        }
    } catch (err) {
        res.status(500).json("Something went wrong! Please try again")
    }
}

module.exports = {
    userDetails,
    addUserDetails,
    driverDetails,
    addDriverDetails,
    getRideDetails,
    addRideDetails
}